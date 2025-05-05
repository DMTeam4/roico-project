import "./Diagnostics.css"
import Message from "../../Components/Message"

function Diagnostics(){

    return(
        <div className="mt-4 d-flex justify-content-center">
        <div className="col-lg-6 col-11">
            <div className="diagnostics-title">
                <h1>Diagnostics</h1>
            </div>
            <div className="card shadow-lg  bg-secondary-subtle">
                <div className="card-body flex-md-row gap-md-5">
                    <div className="diagnstic-container">
                        <p>System Messages</p>
                        <Message></Message>
                        <Message></Message>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default Diagnostics