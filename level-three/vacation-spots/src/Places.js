import React from 'react'

function Places (props) {
    const vacation = props.place
    let dollarSign
    if (vacation.price < 500) {
        dollarSign = '$'
    } else if (vacation.price < 1000) {
        dollarSign = '$$'
    } else {
        dollarSign = '$$$'
    }

    let bkgdColor
    if (vacation.timeToGo === "Spring") {
        bkgdColor = '#bd7bc8'
    } else if (vacation.timeToGo === "Summer") {
        bkgdColor = '#4d86b1'
    } else if (vacation.timeToGo === "Fall") {
        bkgdColor = '#822623'
    } else {
        bkgdColor = '#155831'
    }

    return (
        <div id="location" style={{backgroundColor: bkgdColor}} >
            <p className="dollar"> {dollarSign} </p>
            <img src={vacation.img} alt={`view of ${vacation.place}`}/>
            <h4> Where: {vacation.place} </h4>
            <p> How Much: ${vacation.price} </p>
            <span> Best time to visit: {vacation.timeToGo}</span>
        </div>
    );
}

export default Places