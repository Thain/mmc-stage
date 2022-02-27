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


const CHASM = ({ }) => {

    const proj = {
        seo: {
            title: "CHASM",
            desc: ""
        },
        color1: "#8ec8f5",
        color2: "#8ec8f5",
        name: "CHASM",
        title: <>Bringing community health and <br/> social innovation together.</>,
        foci: [
            "Health",
            "Social Innovation",
        ],
        year: "2021",
        disciplines: [
            "Brand Strategy",
            "Copywriting",
            "Web Design",
            "Web Development",
        ],
        intro: <>The CHASM Incubator supports projects at the intersection of community health and social innovation—teaching healthcare entrepreneurs the skills and tools they need to do community engagement properly, and teaching community health leaders how to scale their initiatives. They approached us to clarify their brand story, and spin it all into a beautiful website.</>,
        challenge: <>The challenge was two-fold: <br/>1. Share the importance of community engagement practices in a way that entrepreneurs understand, and share importance of entrepreneurial practices in a way that community health leaders get. <br/>2. Articulate the vitality of this intersection to funders and potential chapter leaders nationally.</>,
        dotstrip: <>Get entrepreneurs, funders <br/>and community health <br/>leaders on the same page.</>,
        approach: <>We dug in on the necessity of including community perspectives in 2021. Our argument was that there is no room anymore for “white saviour solutions” that parachute into communities to solve problems. This is as true for entrepreneurs as it is for civil society/public actors. We positioned CHASM as an organization giving entrepreneurs the tools they need to thrive in this cultural context, and create more impact for communities. We emphasized their innovative approach to community partnership building and incubation programming in the website we built. Visually, we leaned into illustration and welcoming colours—to find the balance between a slick modern style, and a more approachable nonprofit style.</>,
        execution: <></>,
        LR: [
            ["", <></>],
        ],
        outcome: <></>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638655/case-studies/chasm/CHASM_Header_hhnebm.png",
        main: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638655/case-studies/chasm/CHASM1_upcexo.png",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638655/case-studies/chasm/CHASM2_c3p5eq.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638655/case-studies/chasm/CHASM3_mxjqwb.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638655/case-studies/chasm/CHASM4_b6gypx.png",
        ],
        LRimgs: [
            "",
        ]
    }

  return (
      <>
        <div className="case-study-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <div className="case-study-head">
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
                <TwoImg
                    img1={proj.gallery[1]}
                    img2={proj.gallery[2]} />
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

export default CHASM
