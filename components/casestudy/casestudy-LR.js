import React from "react"

export const LR = ( info ) => {
  return (
      <div className="case-study-LR-card">
        <div>
          <img src={info.img} />
        </div>
        <div>
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill={info.color}/>
            </svg>
            <h3 className="h3s">{info.title}</h3>
            <h6>{info.blurb}</h6>
        </div>
      </div>
  )
}

