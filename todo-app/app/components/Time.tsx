import React from 'react'

const Time = () => {

    const currentDate = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ];
    const monthIndex = currentDate.getMonth();
    let month = monthNames[monthIndex];
    
    
  return (
    <h4>{`${month+' '+ currentDate.getDate()}`}</h4>

  )
}

export default Time