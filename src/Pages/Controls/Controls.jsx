import './Controls.css'
import UpArrow from '../../assets/UpArrow.png'
import DownArrow from '../../assets/DownArrow.png'
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'
import RotateLeft from '../../assets/RotateLeft.png'
import RotateRight from '../../assets/RotateRight.png'
import Button from './Button'


function Controls() {
    return (
        <div className="container mt-4">
            <div className="justify-content-center d-flex flex-column flex-md-row gap-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
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
                                    <Button src={RotateLeft}></Button>
                                    <Button src={UpArrow}></Button>
                                    <Button src={RotateRight}></Button>
                                </div>
                                
                                <div className='buttons-placement'>
                                    <div className='horizontal-nav-buttons'>
                                    <Button src={LeftArrow}></Button>
                                    </div>
                                    <div>
                                    <Button src={RightArrow}></Button>
                                    </div>
                                </div>

                                <div className='buttons-placement'>
                                <Button src={DownArrow}></Button>
                                </div>
                            </div>

                            <div className='card-bottom'>
                                <button className='paint-btn btn-primary'>Start Painting</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
                <div className="stop-button border bg-danger text-white text-center rounded">
                    <h4>STOP</h4>
                </div>
            </div>
        </div>
    );
}


export default Controls