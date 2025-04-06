import './Controls.css'
import UpArrow from '../../assets/UpArrow.png'
import DownArrow from '../../assets/DownArrow.png'
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'
import RotateLeft from '../../assets/RotateLeft.png'
import RotateRight from '../../assets/RotateRight.png'
import Button from '../../Components/Button'


function Controls() {
    return (
        <div className="container mt-4">
            <div className="justify-content-center d-flex flex-column flex-md-row gap-3">
                <div className="col-lg-6 col-12">
                    <div className="card shadow-lg card-custom bg-secondary-subtle">
                        <div className='card-body'>
                            <div className='card-top'>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                    Advanced Settings
                                </label>
                            </div>
                            <div className='card-middle'>
                                <div className='buttons-placement'>
                                    <Button onClick="rotateLeft" src={RotateLeft}></Button>
                                    <Button onClick="forward" src={UpArrow}></Button>
                                    <Button onClick="rotateRight" src={RotateRight}></Button>
                                </div>
                                
                                <div className='buttons-placement'>
                                    <div className='horizontal-nav-buttons'>
                                    <Button onClick="moveLeft" src={LeftArrow}></Button>
                                    </div>
                                    <div>
                                    <Button onClick="moveRight" src={RightArrow}></Button>
                                    </div>
                                </div>

                                <div className='buttons-placement'>
                                <Button onClick="backward" src={DownArrow}></Button>
                                </div>
                            </div>

                            <div className='card-bottom'>
                                <button className='paint-btn btn-primary'>Start Painting</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
                <div className="stop-container col-lg-6 d-flex">
                    <button className="stop-button">STOP</button>
                </div>
            </div>
        </div>
    );
}


export default Controls