import React from "react";
import "./Clock.css";

export class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick(){
        this.setState({date:new Date()})
    }

    componentDidMount() {
        this.state.date = setInterval(() => {this.tick()}, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.date);
    }

    render(){
        const click = this.props.click;

        return(
            <div className="clock-wrapper">
                <div className="clock-content">
                    <span className="clock-time">{this.state.date.toLocaleTimeString()}</span>
                    {(click)?<span className="clock-date">{this.state.date.toDateString()}</span>: null}
                </div>
            </div>
        );
    }
}