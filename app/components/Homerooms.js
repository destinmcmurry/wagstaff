import React, { Component } from 'react';

export default (props) => {
  
  const homerooms = props.homerooms;

  return (
    <div>
      <ul>
        {
          homerooms.map(homeroom => {
            return (
              <li key={homeroom.id} className='homeroom-block'>
                <img src={homeroom.teacherImg} />
                <h1>{homeroom.teacher}</h1>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}
