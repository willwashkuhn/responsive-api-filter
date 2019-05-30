import React from 'react'

const Sports = ({ sports }) => {
  return (
    <div>
      <center><h1>Sports List</h1></center>
      {sports
        .map((sport) => (
            <div className="card" key={sport.idSport}>
              <div className="card-body">
                <h5 className="card-title">{sport.strSport}</h5>
                <p className="card-text">{sport.strSportDescription}</p>
              </div>
            </div>
      ))}
    </div>
  )
};

export default Sports