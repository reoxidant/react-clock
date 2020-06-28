import React from "react";
import './Slider.css';
import calendar from "./calendar.svg";

export class Slider extends React.Component{

    constructor(props) {
        super(props);
    }

    handlerClick = () => {
        this.props.onSliderClick(!this.props.click);
    }

    render(){
        const click = this.props.click;

        return(
            <div className="slider-wrapper">
                <div className="slider-toggle" onClick={this.handlerClick.bind(this)}>
                    <div className={"toggle-circle "+((click)?"on":"off")}></div>
                </div>
                <div className="slider-img">
                    <img src={calendar} alt="calendar-icon"/>
                </div>
            </div>
        )
    }
}