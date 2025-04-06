import axios from "axios";

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
        const response = await axios.post("http://localhost:7070/api/move", {Direction});
        console.log(response.data);
    } catch (error) {
        console.error("Error sending move command:", error);
    }
};


export default Button