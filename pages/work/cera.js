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


const CERA = ({ }) => {

    const proj = {
        seo: {
            title: "CERA",
            desc: ""
        },
        color1: "#8FC3B6",
        color2: "#8FC3B6",
        name: "Centre for Equality Rights in Accommodation",
        title: <>Explain-ing Canada’s Right to <br/>Housing.</>,
        foci: [
            "Affordable Housing",
        ],
        year: "2021",
        disciplines: [
            "Video",
            "Animation",
            "Copywriting",
            "Art Direction",
        ],
        intro: <>The Centre for Equality Rights in Accommodation (CERA), an advocacy, litigation, and program development organization fighting for the Right to Housing in Canada reached out to us to explain the complex policy concept in an accessible video. Immediately, we looked to the undisputed masters of explaining complex topics online: video-journalists like Vox. Benchmarking that extremely popular style, we made 2-minute explainer video that got to the core of the policy issue in a clear (and dare I say entertaining) way.</>,
        challenge: <>The Right to Housing is a broad policy concept that threads its way from international law all the way through to the local level. The contours of the right to housing are nuanced, and sometimes hard to grasp. Finally, it’s just hard to keep people’s attention when talking about housing policy. We wanted to change all of that for viewers.</>,
        dotstrip: <>Explain a complex <br/>housing policy concept <br/>in 2 enthralling minutes.</>,
        approach: <>We started by benchmarking successful video journalism from across the internet—pulling from sources like The New York Times, Vox, and Johnny Harris. We looked at how they used animation and simple storytelling to successfully get big points across in a small amount of time. Then, we built out an art direction that would guide the animation—and evoke the journalistic approach we were inspired by. Finally, building off a script provided by CERA, we researched the Right To Housing and distilled it down into a core narrative. We pulled the art and script together into a clear, and compelling, two-minute video. Don’t take our words for it though—give it a watch!</>,
        execution: <></>,
        LR: [
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
        ],
        outcome: <></>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638951/case-studies/cera/CERA_Header_sjchar.png",
        main: "https://vimeo.com/681902299",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638951/case-studies/cera/CERA_1_odilgo.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638951/case-studies/cera/CERA_2_npzhg3.png",
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
            <div className="case-study-head">
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

export default CERA
