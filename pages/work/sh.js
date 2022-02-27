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


const SH = ({ }) => {

    const proj = {
        seo: {
            title: "Smart Hospital",
            desc: ""
        },
        color1: "#EDB2C8",
        color2: "#447CBE",
        name: "Montreal Children's Hospital",
        title: <>Making the hospital feel smart, and kind.</>,
        foci: [
            "Health"
        ],
        year: "2021",
        disciplines: [
            "Brand Design",
        ],
        intro: <>The Smart Hospital Project, housed at the Montreal Children’s Hospital with funding from the Montreal Children’s Hospital Foundation, is developing wireless vital sign monitors for children in the Neo-natal intensive care unit. They needed a brand that reflected the huge leap in technology that this project represented—while reflecting the very human goal behind it: make it easier for parents to hold their newborns.</>,
        challenge: <>The challenge was to build a brand that reflected modern technological progress—but didn’t feel cold or alienating for parents. The Smart Hospital team was going to need to engage a lot with young (brand new) parents as they researched the technology—so they needed a brand that would facilitate that.</>,
        dotstrip: <>Make technological<br/> innovation feel safe <br/>for new parents.</>,
        approach: <>We started by benchmarking modern brands that reflected the same human/tech balance that were interested in. We looked at healthcare, tech, and the social sector as a starting point. Then, we built a brand values compass and mooodboards—helping the client understand what similar brands were doing, and where Smart Hospital could fit into the picture. Then, we moved onto developing 3 logo options for the team to vote on. All of them were debated—but one eventually rose to the top. Finally, the team chose a colour palette that felt warm and kind—and the project was finished.</>,
        execution: <>Once the brand direction was landed on, we asked the Smart Hospital team what kind of assets they might need. We sent them a simple 20-page style guide for their team to use, a couple key assets so that they could get their social media up and running, and finally gave them assets for use across the hospital.</>,
        LR: [
            ["Logo", <>We developed a bilingual logo that could live online and across the Montreal Children’s Hospital as the project was implemented. We delivered several versions of the logo for use in different contexts.</>],
            ["Style Guide", <>We gave them an easy to use style guide that broke down the use of the logo, colours, and type—among other things. This came with an easy to navigate Google Folder which included all of the assets we had built.</>],
            ["Assets", <>We developed a couple key assets for the team that could be used to get their social media, external presence, and website up and running.</>],
        ],
        outcome: <>We sent the brand to the Smart Hospital and they loved it. It captured the balance of modern and warm that they were looking for. Like many visual branding projects—the outcome is better seen than read.</>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638875/case-studies/smart%20hospital/SH_Header_fbt4fl.png",
        main: "https://res.cloudinary.com/mymediacreative/video/upload/v1645638873/case-studies/smart%20hospital/Smart_Hospital_Logo_Animation_d6y371.mp4",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638872/case-studies/smart%20hospital/SH_Colors_rnwvkc.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638872/case-studies/smart%20hospital/SH_Logo1_vwt1na.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638872/case-studies/smart%20hospital/SH_Logo2_npabxk.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638873/case-studies/smart%20hospital/SH_Logo3_lkquuc.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638873/case-studies/smart%20hospital/SH_BusinessCards_rqqqvs.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638873/case-studies/smart%20hospital/SH_Bag_el9cc7.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638873/case-studies/smart%20hospital/SH_Sticker_nb5ulf.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638873/case-studies/smart%20hospital/SH_Brochure_i9hg20.png",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638872/case-studies/smart%20hospital/SH_Brand_nehuav.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638873/case-studies/smart%20hospital/SH_Book_wt7xiz.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638872/case-studies/smart%20hospital/SH_Assets_fxkzj0.png",
        ]
    }

  return (
      <>
        <div className="case-study-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <div className="case-study-head">
                <Nav seo={proj.seo} isBlack={true} active="work"/>
                <HeaderImg src={proj.header}/>
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
                <GalleryVid src={proj.main} />
            </div>

            <Challenge text={proj.challenge} color={proj.color1} />

            <DotStrip text={proj.dotstrip} color={proj.color2} />

            <Approach text={proj.approach} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[0]} />
                <ThreeImg
                    img1={proj.gallery[1]}
                    img2={proj.gallery[2]}
                    img3={proj.gallery[3]} />
                <img src={proj.gallery[4]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LR color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} img={proj.LRimgs[0]}/>
                <LR color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} img={proj.LRimgs[1]}/>
                <LR color={proj.color1} title={proj.LR[2][0]} blurb={proj.LR[2][1]} img={proj.LRimgs[2]}/>
            </div>

            <Outcome text={proj.outcome} color={proj.color1} />

            <div className="full-width">
                <TwoImg
                    img1={proj.gallery[5]}
                    img2={proj.gallery[6]} />
                <img src={proj.gallery[7]} />
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

export default SH
