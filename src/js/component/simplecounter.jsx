import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom/client"
// Images


// Component

export function SimpleCounter(props) {
    return (<div className="bigCounter">
        <div className="calendar">
            <i className="fa-regular fa-clock"></i>
        </div>
        <div className="seconds4">{props.digitFour}</div>
        <div className="seconds3">{props.digitThree}</div>
        <div className="seconds2">{props.digitTwo}</div>
        <div className="seconds1">{props.digitOne}</div>
    </div>);
}
SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};
const root = 
ReactDOM.createRoot(document.getElementById('app'));
let counter = 0;
setInterval(function () {
    const four = Math.floor((counter / 1000) % 10);
    const three = Math.floor((counter / 100)% 10);
    const two = Math.floor((counter / 10)% 10);
    const one = Math.floor(counter % 10);
    root.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three}digitFour={four}/>);
    counter++;
},1000);