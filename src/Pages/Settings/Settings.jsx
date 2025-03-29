import "./Settings.css"
import Textbox from "../../Components/textbox";

function Settings(){

    return(
        <div className="mt-4 d-flex justify-content-center">
                <div className="col-lg-6 col-12">
                    <div className="card shadow-lg card-custom bg-secondary-subtle">
                        <div className="card-body d-flex flex-column flex-md-row gap-md-5">
                            <div className="settings-box col-md-6">
                                <div className="input-field">
                                    <label>Max Height (cm)</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Distance from the top (cm)</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Distance from the bottom (cm)</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Stride Width (cm)</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Distance to the wall (cm)</label>
                                    <Textbox />
                                </div>
                            </div>
                            <div className="settings-box">
                                <div className="input-field">
                                    <label>Broker</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Port</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Client ID</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>IO Timeout</label>
                                    <Textbox />
                                </div>
                                <div className="input-field">
                                    <label>Keep Alive</label>
                                    <Textbox />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                            <div className='card-bottom mt-4'>
                                <button className='settings-btn btn-primary'>Save</button>
                            </div>
                </div>
            </div>
    );

}

export default Settings