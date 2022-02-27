import React from "react"
import Link from "next/link"

const HomeWide = ({ proj }) => {

    function getVideo(v){
        if(!v.classList.contains("home-wide")) v = v.parentElement;
        if(!v.classList.contains("home-wide")) v = v.parentElement;
        if(!v.classList.contains("home-wide")) v = v.parentElement;
        if(!v.classList.contains("home-wide")) v = v.parentElement;
        v = v.children[0];
        return v;
    }

    function play() {
        var vid = event.target.parentElement;
        vid = getVideo(vid);
        vid.play();
    }

    function pause() {
        var vid = event.target.parentElement;
        vid = getVideo(vid);
        vid.pause();
    }

  return (
      <div className="home-wide"
           onMouseOver={play}
           onMouseOut={pause}
      >
        <video className="wide-vid" width="100%" muted loop playsInline >
            <source src={proj.vid} type="video/mp4" />
        </video>
        <div className="words">
            <svg width="2.5%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#E26E4B"/>
            </svg>
            <h3 className="h3s">{proj.title}</h3>
            <p>{proj.desc} <a className="arrow-link">{proj.name}</a></p>
        </div>
    </div>
  )
}

export default HomeWide

           //onMouseOver={event => event.target.play()}
           //onMouseOut={event => event.target.children[0].pause()}
