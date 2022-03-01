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


const McConnell = ({ }) => {

    const proj = {
        seo: {
            title: "McConnell Foundation",
            desc: ""
        },
        color1: "#FD1DA5",
        color2: "#FD1DA5",
        name: "The McConnell Foundation",
        title: <>Piloting a participatory approach <br/>to city-building in Canada.</>,
        foci: [
            "Social Innovation",
        ],
        year: "2021",
        disciplines: [
            "Video Production",
        ],
        intro: <>The McConnell Foundation approached us in early 2021 to capture the work they had done with their project: Participatory Canada. Based on a model developed in the UK, Participatory Canada was developing innovative ways to build community at the neighbourhood level—through shared spaces + projects. Despite being at the height of the COVID pandemic, and not having any on-the-ground footage to use, we collected phone photos and Zoom interviews—setting out to make a video that shared learnings from Participatory Canada’s first year in operations.</>,
        challenge: <>We didn’t have any footage from the ground. Most of the activities were online due to COVID-19. All we had were phone photos, screenshots, and a couple Zoom interviews. Our job was to pull all of these disparate elements together into a beautiful collage that shared the valuable lessons that McConnell had learned about community-building and reconciliation with funders and other stakeholders.</>,
        dotstrip: <>Use iPhone and Zoom <br/>footage to capture the magic <br/>of this national project.</>,
        approach: <>We started with collecting all of the footage we could find. Examining what we had at our disposal, and building a story-board that reflected it. Going in, we begun to realize that we were going to need to rely heavily on animation. We planned out several animations—and discovered tool for animating maps. Given the theme of the video (urban social innovation) we thought this was perfect. On top of that, we interviewed a couple program directors at the local leve to narrate the story. Finally, we animated some of the phone photos, pulled it together, and made a beautiful testament to local community resilience during the pandemic.</>,
        execution: <></>,
        LR: [
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
        ],
        outcome: <></>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645639158/case-studies/mcconnell/McConnell_Header_bhbja4.png",
        main: "https://vimeo.com/681649705",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158841/case-studies/mcconnell/McConnell_Mobile_bzonyv.png",
        mobilePosition: "79%",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639158/case-studies/mcconnell/McConnell_2_c6iqw5.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639158/case-studies/mcconnell/McConnell_3_keclvr.png",
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
                <GalleryPlayer src={proj.main}/>
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

export default McConnell
