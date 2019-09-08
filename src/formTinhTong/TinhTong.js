import React from 'react';

const tinhTong = (props) => {
    return (
        <div className="col-sm-12 row">
            <div className="col-sm-3">
                <label>Số thứ {props.value}:</label>
            </div>
            
            <div className="col-sm-9">
                <input className="form-control" onChange={props.changed} required type="number" placeholder={props.placeHolder}></input>
            </div>
        </div>
    )
};

export default tinhTong;