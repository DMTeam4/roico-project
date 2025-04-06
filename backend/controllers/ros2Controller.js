const RosLib = require('roslib');

let ros;
let cmdVel = null;
let isConnected = false; 


ros = new RosLib.Ros({
    url: process.env.ROSBRIDGE_SERVER_URL || 'ws://localhost:9090' 
});

setupRosConnection();

function setupRosConnection() {
    if (ros && (ros.isConnected || ros.isConnecting)) {
        console.log('ROS connection already established or in progress.');
        return;
    }

    ros.on('error', (error) => {
        console.error('Backend: ROS Connection ERROR:', error.message || error);
        isConnected = false;
        cmdVel = null;
    });

    ros.on('connection', function() {
        console.log('Connected to websocket');
        isConnected = true;
        cmdVel = new RosLib.Topic({
            ros: ros,
            name: 'cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        });
        cmdVel.advertise();
    });
    
    ros.on('close', function() {
        console.log('ROS: Connection to websocket server closed.');
        isConnected = false;
        if (cmdVel) {
            cmdVel.unadvertise(); 
        }
        cmdVel = null;
    });
}


exports.moveRobot = (req, res) => { 

    const { Direction } = req.body;

    if (!isConnected || !cmdVel) {
        console.error(`Cannot move: ROS connected: ${isConnected}, cmdVel ready: ${!!cmdVel}`);
        return res.status(503).json({ message: "ROS connection not available or topic not ready." });
    }

    let twist;

    switch (Direction) {
        case "forward":
            twist = new RosLib.Message({
                linear: { x: 0.2, y: 0.0, z: 0.0 },
                angular: { x: 0.0, y: 0.0, z: 0.0 }
            });
            break;
        case "backward":
            twist = new RosLib.Message({
                linear: { x: -0.2, y: 0.0, z: 0.0 },
                angular: { x: 0.0, y: 0.0, z: 0.0 }
            });
            break;
        case "rotateLeft":
            twist = new RosLib.Message({
                linear: { x: 0.0, y: 0.0, z: 0.0 },
                angular: { x: 0.0, y: 0.0, z: 0.2 }
            });
            break;
        case "rotateRight":
            twist = new RosLib.Message({
                linear: { x: 0.0, y: 0.0, z: 0.0 },
                angular: { x: 0.0, y: 0.0, z: -0.2 }
            });
            break;
        case "moveLeft":
            twist = new RosLib.Message({
                linear: { x: 0.0, y: 0.2, z: 0.0 },
                angular: { x: 0.0, y: 0.0, z: 0.0 }
            });
            break;
        case "moveRight":
        twist = new RosLib.Message({
            linear: { x: 0.0, y: -0.2, z: 0.0 },
            angular: { x: 0.0, y: 0.0, z: 0.0 }
        });
        break;
        default:
            return res.status(400).json({ message: "Invalid direction command." });
    }

    cmdVel.publish(twist);
    console.log(`Moving ${Direction}`);
    res.json({ message: `Moving ${Direction}!` });
}