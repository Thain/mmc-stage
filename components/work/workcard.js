import React from "react"
import Link from "next/link"

const WorkCard = ({ proj }) => {
  return (
      <div className="work-card"style={{ backgroundImage: `url(${proj.img})`}}>
          <h4>{proj.name}</h4>
          <h6>{proj.tag}</h6>
          <a href={"/work/" + proj.link} className="work-card-link" />
      </div>
  )
}

export default WorkCard
