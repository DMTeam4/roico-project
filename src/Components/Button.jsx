import axios from "axios";
import authHandler from "../utils/authHelper";

function Button(props){

    const handleClick = () => {
        move(props.onClick);
    };

    return(
        <button onClick={handleClick} className='btn btn-arrow m-1' onContextMenu={(e) => e.preventDefault()}>
            <img src={props.src}/>
        </button>
    );
}

const move = async (Direction) => {
    try {
        const config = authHandler(); // Get the config with the token
        const response = await axios.post("api/move", {Direction}, config);
        console.log(response.data);
    } catch (error) {
        console.error("Error sending move command:", error);
    }
};


export default Button