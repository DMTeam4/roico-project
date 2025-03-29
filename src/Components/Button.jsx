
function Button(props){
    return(
        <button className='btn btn-arrow m-1' onContextMenu={(e) => e.preventDefault()} 
        onTouchStart={(e) => e.preventDefault()} >
            <img src={props.src}/>
        </button>
    );
}


export default Button