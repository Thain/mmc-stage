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


const IndigIrecruit = ({ }) => {

    const proj = {
        seo: {
            title: "IndigIrecruit",
            desc: ""
        },
        color1: "#643184",
        color2: "#643184",
        name: "IndigIrecruit",
        title: <>Making post-secondary education <br/>more accessible for Indigenous youth.</>,
        foci: [
            "Education",
        ],
        year: "2020",
        disciplines: [
            "Visual Branding",
        ],
        intro: <>Indigirecruit works with Indigenous youth across the country—helping them navigate post-secondary application processes that are historically exclusionary and ill-tailored to the everyday realities of many young people. As they began their national community outreach initiatives, Indigirecruit approached us to build a brand that would capture their core educational mission + be approachable for a diverse range of communities that the organization would be approaching.</>,
        challenge: <>The core challenge was to build a brand that would facilitate the development of trust between Indigirecruit and a wide variety of communities that they would be approaching. The prospect of an outside agency facilitating the relationship between young people and historically exclusionary institutions can be dubious to many communities. That’s why Indigirecruit prioritized in-person outreach. The brand needed to set the groundwork for a good relationship.</>,
        dotstrip: <>Set the groundwork for <br/>trusting relationships with <br/>Indigenous communities.</>,
        approach: <>We led by listening here—working to understand what symbolism and approach would resonate most with the widest variety of audiences. Together, we landed on two symbols that represented the organization’s two core missions. A feather for Indigenous representation and a book for access to education. We tied this together with a modern typeface, and a palette build around the colours of the Iroquois Confederacy.</>,
        execution: <>Indigirecruit were very happy with the brand, sharing this testimonial: “My Media Creative has perfectly responded to our needs with professionalism, efficiency and flexibility. Even though we provided them with very broad guidelines, they accurately grasp our vision and came up with a stunning final product. Working with a passionate team that cares about your project as much as you do is a delightful feeling.”</>,
        LR: [
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
            ["", <></>],
        ],
        outcome: <></>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638619/case-studies/indigirecruit/Indigirecruit_Header_c8az5g.png",
        main: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638618/case-studies/indigirecruit/Indigirecruit_1_ejdjwz.png",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158795/case-studies/indigirecruit/Indigirecruit_Mobile_x7xwc5.png",
        mobilePosition: "center",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638618/case-studies/indigirecruit/Indigirecruit_2_gvcpok.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638619/case-studies/indigirecruit/Indigirecruit_3_w18mgf.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638619/case-studies/indigirecruit/Indigirecruit_4_i7nd37.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638619/case-studies/indigirecruit/Indigirecruit_BC1_bb2xgz.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638619/case-studies/indigirecruit/Indigirecruit_BC2_fbaliu.png",
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

            <Execution text={proj.execution} color={proj.color1} />

            <div className="full-width">
                <TwoImg
                    img1={proj.gallery[2]}
                    img2={proj.gallery[3]} />
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

export default IndigIrecruit
