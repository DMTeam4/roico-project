import './Controls.css'
import UpArrow from '../../assets/UpArrow.png'
import DownArrow from '../../assets/DownArrow.png'
import LeftArrow from '../../assets/LeftArrow.png'
import RightArrow from '../../assets/RightArrow.png'
import RotateLeft from '../../assets/RotateLeft.png'
import RotateRight from '../../assets/RotateRight.png'


function Controls() {
    return (
        <div className="container mt-4">
            <div className="justify-content-center d-flex flex-column flex-md-row gap-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card shadow-lg card-custom bg-light">
                        <div className='card-body'>
                            <button className='btn btn-primary'>
                            <img src={UpArrow}/>
                            </button>
                            <button className='btn btn-primary'>
                            <img src={DownArrow}/>
                            </button>
                            <button className='btn btn-primary'>
                            <img src={LeftArrow}/>
                            </button>
                            <button className='btn btn-primary'>
                            <img src={RightArrow}/>
                            </button>
                            <button className='btn btn-primary'>
                            <img src={RotateLeft}/>
                            </button>
                            <button className='btn btn-primary'>
                            <img src={RotateRight}/>
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className="py-custom border bg-danger text-white text-center rounded">
                    <h4>STOP</h4>
                </div>
            </div>
        </div>
    );
}


export default Controls