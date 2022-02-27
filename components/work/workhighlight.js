import React from "react"
import Link from "next/link"

const WorkHighlight = ( proj ) => {
  const url = "/work/" + proj.ext;
  return (
      <div className="highlight-card">
          <a href={url}>
          <div><img src={proj.img} /></div>
          </a>
          <div>
              {proj.blurb}
            <a href={url} className="arrow-link"><em>View project</em></a>
          </div>
      </div>
  )
}

export default WorkHighlight
