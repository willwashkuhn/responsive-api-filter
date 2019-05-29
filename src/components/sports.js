import React from 'react'

const Sports = ({ sports }) => {
  return (
    <div>
      <center><h1>Sports List</h1></center>
      {sports.map((sport) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{sport.strSport}</h5>
                <p class="card-text">{sport.strSportDescription}</p>
              </div>
            </div>
      ))}
    </div>
  )
};

export default Sports