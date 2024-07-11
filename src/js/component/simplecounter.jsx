import React from "react";
import "../styles/index.css";
// Images


// Component

export function SimpleCounter(props) {
    return(<div className="bigCounter">
        <div className="calendar">
            <i className="fa-regular fa-clock"></i>
        </div>
        <div className="seconds4">0{props.digitFour}</div>
        <div className="seconds3">{props.digitThree}</div>
        <div className="seconds2">{props.digitTwo}</div>
        <div className="seconds1">{props.digitOne}</div>
    </div>);
}
SimpleCounter.propTypes={
    digitFour:propTypes.number,
    digitThree:propTypes.number,
    digitTwo:propTypes.number,
    digitOne:propTypes.number
};
let counter = 0;
setInterval(function(){
    const four= Math.Floor(counter/10000);
    const three= Math.Floor(counter/1000);
    const two= Math.Floor(counter/100);
    const one= Math.Floor(counter/1);
    print(four, three, two, one,);
    counter++;
},1000);