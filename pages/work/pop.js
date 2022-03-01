import React from "react"

//import Seo from "../../components/seo"
import { Layout, Nav, Footer, Spacer } from "../../components/meta"

import { Intro, Challenge, Approach, Execution, Outcome,
         LR, LRvid,
         DotStrip,
         HeaderVid, HeaderImg, GalleryVid, GalleryPlayer,
         TwoImg, ThreeImg
       } from "../../components/casestudy"

import WorkCard from "../../components/work/workcard"


const POP = ({ }) => {

    const proj = {
        seo: {
            title: "POP Montreal",
            desc: ""
        },
        color1: "#F46A33",
        color2: "#F46A33",
        name: "POP Montreal",
        title: <>Filling the streets of Montreal with <br/>music and joy.</>,
        foci: [
            "Arts & Culture",
        ],
        year: "2021",
        disciplines: [
            "Video Production",
        ],
        intro: <>2021 was POP Montreal’s 20th festival, and their first major in-person festival since the COVID-19 pandemic. They reached out to us to capture that excitement—to paint a portrait of the festival filled with joy, and excitement, about coming back to live music after months indoors. Attending the festival for all three days, we really felt (and captured) that.</>,
        challenge: <>The reality is, the tunes were f*cking sweet. In between shots we were moving and grooving. The beat would be pick up, the guitar would wail, and we would have to resist the deeply human urge to move our feet to the rythm. Why? Because if we danced, the footage would be toast. The challenge was keeping still (and getting beautiful shots) while these amazing artists filled the streets of Montreal with music and joy.</>,
        dotstrip: <>Try not to dance to the <br/>sweet tunes to avoid <br/>ruining our footage.</>,
        approach: <>Despite the sweet tunes, professionalism prevailed. We attended the festival for three days—immersing ourselves in the music + people that make it special. We pulled together the footage that we captured over those three days and, in just 4 days, we turned around a three-minute recap video.</>,
        execution: <></>,
        LR: [
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
        ],
        outcome: <></>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645639122/case-studies/pop%20montreal/POP_Header_awrq2e.png",
        main: <><iframe width="560" height="315" src="https://www.youtube.com/embed/EMILJCe8-uE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></>,
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158852/case-studies/pop%20montreal/POP_Mobile_tm99xf.png",
        mobilePosition: "center",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639122/case-studies/pop%20montreal/POP_1_gt8fk2.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639122/case-studies/pop%20montreal/POP_2_c9bh79.png",
        ],
        LRimgs: [
            "",
            "",
            "",
            "",
            ""
        ]
    }

  return (
      <>
        <div className="case-study-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <div className="case-study-head"style={{ backgroundImage: `url(${proj.mobile})`, backgroundPosition: `${proj.mobilePosition}`}}>
                <Nav seo={proj.seo} isBlack={false} active="work"/>
                <HeaderImg src={proj.header} />
            </div>

            <div className="case-study-intro reg-w">
                <div>
                    <h4 className="h4p" style={{color: proj.color1, fontStyle: "italic"}}>{proj.name}</h4>
                    <h3 className="h3s">{proj.title}</h3>
                </div>

                <div className="case-study-tags">
                    <p style={{fontWeight: 500, color: proj.color1}}>Focus</p>
                    <ul>
                      <>{ proj.foci.map((focus, index) => { return <li key={index}>{focus}</li>; })}</>
                    </ul>

                    <Spacer h="10px" />

                    <p style={{fontWeight: 500, color: proj.color1}}>Year</p>
                    <ul><li> {proj.year} </li></ul>

                    <Spacer h="10px" />

                    <p style={{fontWeight: 500, color: proj.color1}}>Disciplines</p>
                    <ul><>{ proj.disciplines.map((disc, index) => { return <li key={index}>{disc}</li>; })}</></ul>
                </div>

                <Intro text={proj.intro} color={proj.color1} />
            </div>

            <div className="full-width">
                <div className="yt-embed">{proj.main}</div>
            </div>

            <Challenge text={proj.challenge} color={proj.color1} />

            <DotStrip text={proj.dotstrip} color={proj.color2} />

            <Approach text={proj.approach} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[0]} />
                <img src={proj.gallery[1]} />
            </div>

            <Spacer h="80px" />

        </div>
      <Footer />
    </>
  )
}

{/* export async function getStaticProps() {
  // Run API calls in parallel
  // const [articlesRes, homepageRes] = await Promise.all([
  //   fetchAPI("/articles", { populate: "*" }),
//  const [homepageRes] = await Promise.all([
//    fetchAPI("/homepage", {
//      populate: {
//        hero: "*",
//        seo: { populate: "*" },
//      },
//    }),
//  ])
//
//  return {
//    props: {
//      homepage: homepageRes.data,
//    },
//    revalidate: 1,
//  }
} */}


export default POP
