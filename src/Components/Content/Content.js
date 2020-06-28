import React from "react";
import {Slider} from "./../Slider/Slider";
import {Clock} from "./../Clock/Clock";
import "./Content.css";

export class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {click: true};
    }

    handleSliderClick(bool) {
        this.setState({click: bool})
    }

    render() {

        const click = this.state.click;

        return (
            <div className="content">
                <Slider click={click} onSliderClick={this.handleSliderClick.bind(this)}/>
                <Clock click={click}/>
            </div>
        );
    }
}