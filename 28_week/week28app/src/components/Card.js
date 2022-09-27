import React from 'react';
import './Card.css';

export default function Card(props) {

    let color = "";
    let color_light = "";
    if (props.price == "300") {
        color = "blue";
        color_light = "light_blue";
    }
    if (props.price == "450") {
        color = "green";
        color_light = "light_green";
    }
    if (props.price == "550") {
        color = "red";
        color_light = "light_red";
    }
    if (props.price == "1000") {
        color = "black";
        color_light = "light_black";
    }
    let isSelected = "";
    if (props.isSelected) isSelected = "selected";


    return (
        <div className={props.value} onClick={props.onClick}>
            <div className={`card-tariff ${color}`}>{props.tariff}</div>
            <div className={`card-price ${color_light}`}>
                <span className="sup">руб</span>{props.price}
                <span className="sub">/мес</span>
            </div>
            <div className="card-traffic">{props.traffiс}</div>
            <div className="card-footer">{props.footer}</div>
        </div >
    );
}