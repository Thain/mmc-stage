import React from "react"

//import Seo from "../../components/seo"
import { Layout, Nav, Footer, Spacer } from "../../components/meta"

import { Intro, Challenge, Approach, Execution, Outcome,
         LR, LRvid, LRplayer,
         DotStrip,
         HeaderVid, HeaderImg, GalleryVid, GalleryPlayer,
         TwoImg, ThreeImg
       } from "../../components/casestudy"

import WorkCard from "../../components/work/workcard"


const SEIZE = ({ }) => {

    const proj = {
        seo: {
            title: "SEIZE",
            desc: ""
        },
        color1: "#7E1416",
        color2: "#7E1416",
        name: "SEIZE",
        title: <>Getting students to fund a new vision for the economy… with donuts.</>,
        foci: [
            "Social Innovation",
        ],
        year: "2021",
        disciplines: [
            "Campaign Strategy",
            "Social Media Strategy",
            "Video",
            "Graphic Design",
        ],
        intro: <>SEIZE (The Socialist Economy Incubator Zone) came to us because they needed a video for their fee-levy campaign. They needed a simple, entertaining, way for people to understand and get behind a complicated subject: the collective economy”. Why? Because they didn’t just need to convince the haters to get on their side—they needed to mobilize a significant percentage of the student population to meet quorum. Our approach? A world-saving donut shop.</>,
        challenge: <>The collective economy is a diverse, complex, movement. We wanted to capture it in a simple story that would not only educate people—but actually get them to support SEIZE’s efforts.</>,
        dotstrip: <>Explain the collective <br/>economy in a way that gets <br/>people activated.</>,
        approach: <>A donut shop. Specifically, a collective-led donut shop that saved the world by getting rid of climate change, employing everyone, and solving the world’s social ills. We used the donut shop as a means of explaining the benefits (and impact) of the collective economy. We thought it was an interesting, provocative, and funny way to pack a ton of complex information into a 90-second video.</>,
        execution: <>We imagined the script and visual style as an homage to Hitchhiker’s Guide to the Galaxy and Wes Anderson. Once we had those approved by the team, we connected to a local donut shop and filmed for a day. With that footage we built out four videos.</>,
        LR: [
            ["Flagship Video", <>The flagship video told the whole story. 90-seconds that captured all of the reasons to support SEIZE and their mission to create a collective-led economy,</>],
            ["Short Videos", <>We broke the video up into three shorter pieces that could be used as follow up collateral during the campaign. They each served a different purpose and focused on a different piece of messaging.</>],
        ],
        outcome: <>We broke the video up into three shorter pieces that could be used as follow up collateral during the campaign. They each served a different purpose and focused on a different piece of messaging.</>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645639188/case-studies/seize/SEIZE_Header_xixuyy.png",
        main: "https://vimeo.com/681646253",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639188/case-studies/seize/SEIZE_1_sxgxmz.png",
            "https://vimeo.com/681646443",
            "https://vimeo.com/681646473",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639188/case-studies/seize/SEIZE_Flagship_reqexw.png",
            "https://vimeo.com/681646500",
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
                <GalleryPlayer src={proj.main} />
            </div>

            <Challenge text={proj.challenge} color={proj.color1} />

            <DotStrip text={proj.dotstrip} color={proj.color2} />

            <Approach text={proj.approach} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[0]} />
                <GalleryPlayer src={proj.gallery[1]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LR color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} img={proj.LRimgs[0]}/>
                <LRplayer  color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} src={proj.LRimgs[1]}/>
            </div>

            <Outcome text={proj.outcome} color={proj.color1} />

            <div className="full-width">
                <GalleryPlayer src={proj.gallery[2]} />
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

export default SEIZE
