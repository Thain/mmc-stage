import React from "react"

//import Seo from "../../components/seo"
import { Layout, Nav, Footer, Spacer } from "../../components/meta"

import { Intro, Challenge, Approach, Execution, Outcome,
         LR, LRvid,
         DotStrip,
         HeaderVid, HeaderImg, GalleryVid,
         TwoImg, ThreeImg
       } from "../../components/casestudy"

import WorkCard from "../../components/work/workcard"


const ECTHP = ({ }) => {

    const proj = {
        seo: {
            title: "Ethical Coach",
            desc: ""
        },
        color1: "#172588",
        color2: "#172588",
        name: "Ethical Coach and The Hunger Project",
        title: <>Showing the impact of leaders <br/> on community initiatives.</>,
        foci: [
            "Anti-Poverty",
        ],
        year: "2021",
        disciplines: [
            "Copywriting",
            "Graphic Design",
        ],
        intro: <>EthicalCoach approached us to build a small report that would articulate the value and impact of their work with The Hunger Project. They had spent several months connecting local-level leaders of The Hunger Project’s chapters to world-class leadership coaches. The report we built showed the impact that EthicalCoach’s programs had on leaders, their teams, and the communities they support.</>,
        challenge: <>The challenge was to weave the various data-points and survey responses that the Hunger Project had collected over six months into an engaging narrative that would highlight their impact for future partners + funders. </>,
        dotstrip: <>Tie six months of survey and <br/>ROI data into a compelling <br/>impact narrative.</>,
        approach: <>Our approach started with rigorous research. We dug into the data that EthicalCoach provided to discover the various threads that would inevitably emerge through six months of program administration. Once we discovered a core set of three threads about capacity, confidence, and team-building—we decided to dig deep on that.<br/><br/>Visually, we tied these narratives together with standout data points that supported the arguments we made in the report and quotes that fleshed out the emotional impact that coaches had on the leaders involved.</>,
        execution: <></>,
        LR: [
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
        ],
        outcome: <></>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638597/case-studies/ethical%20coach%20x%20hunger%20project/EthicalCoach_Header_ciqeml.png",
        main: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638597/case-studies/ethical%20coach%20x%20hunger%20project/EthicalCoach1_jeidei.png",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158787/case-studies/ethical%20coach%20x%20hunger%20project/EthicalCoach_Mobile_uluokm.png",
        mobilePosition: "center",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638597/case-studies/ethical%20coach%20x%20hunger%20project/EthicalCoach2_yoxzmy.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638597/case-studies/ethical%20coach%20x%20hunger%20project/EthicalCoach3_wsipuw.png",
        ],
        LRimgs: [
            "",
        ]
    }

  return (
      <>
        <div className="case-study-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <div className="case-study-head"style={{ backgroundImage: `url(${proj.mobile})`, backgroundPosition: `${proj.mobilePosition}`}}>
                <Nav seo={proj.seo} isBlack={true} active="work"/>
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
                <img src={proj.main} />
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

export default ECTHP
