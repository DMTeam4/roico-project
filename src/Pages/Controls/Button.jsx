
function Button(props){
    return(
        <button className='btn btn-arrow m-1'>
            <img src={props.src}/>
        </button>
    );
}


export default Button