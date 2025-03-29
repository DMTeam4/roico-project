import React, { useState } from 'react'; 
import { Collapse } from 'react-bootstrap';
import { FaChevronDown } from "react-icons/fa";


function Message() {
const [open, setOpen] = useState(false);  

const toggleDropdown = () => setOpen(!open);  

return (
    <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center cursor-pointer" onClick={toggleDropdown}>
            <h5>Click to Toggle Information</h5>
            <FaChevronDown className={`transition-transform ${open ? "rotate" : ""}`} />
        </div>
        <Collapse in={open}>
            <div className="card-body">
                <p>Information</p>
            </div>
        </Collapse>
    </div>
);
}

export default Message;
