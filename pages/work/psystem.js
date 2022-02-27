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


const Psystem = ({ }) => {

    const proj = {
        seo: {
            title: "Psystem",
            desc: ""
        },
        color1: "#F27254",
        color2: "#F27254",
        name: "Psystem",
        title: <>Making wellness accessible to to everyone who needs care.</>,
        foci: [
            "Health",
        ],
        year: "2021",
        disciplines: [
            "Brand Strategy",
            "Brand Design",
            "Web Design",
            "Copywriting",
            "Campaign Strategy",
            "Graphic Design",
        ],
        intro: <>Psystem is a health and wellness coaching firm focused on serving those with Chronic Pain and people who have historically faced barriers to care. With Psystem, we developed a brand, website, and brand activation campaign across social media.</>,
        challenge: <>People with chronic pain, and people who have been left behind by the modern medical system, often don’t trust care providers. We needed to built a brand that would help those people feel comfortable and seen—while communicating the fact that the organization’s founder is a credentialed (and innovative) leader in the field.</>,
        dotstrip: <>Build a brand that makes <br/>healthcare feel safe for those <br/>who it’s often left behind.</>,
        approach: <>We started with in depth interviews—looking over the founder’s experience and research about people who have faced barriers to care. We took this information to develop our brand strategy. This took the form of Experience Principles—which defined the brand’s audience and cardinal rules for the brand. Once that was done, we worked to develop a visual brand and website that reflected our strategic objectives. Finally, with all of this research and brand strategy done—we developed a brand Go-To-Market campaign which went out through social media and digital advertising.</>,
        execution: <>We wanted to build a Psystem world—a digital experience that would make the user feel safe through every touchpoint + interaction with Psystem. That started with the visual brand, and really came to life with the website. The story of a backpacker journeying through life became a core motif. This motif was then implemented and expanded upon through every touchpoint. By the time we had finished our work with Psystem we had built a veritable Wonderland that Alice would be impressed by (and feel at ease in).</>,
        LR: [
            ["Branding", <>We looked at health and wellness firms, and inspirations sourced by the founder, to develop a unique expression of Psystem’s core principles.</>],
            ["Web Design", <>We turned the website into a story to be explored by the user—filled with characters, animals, and a variety of locations. We truly hope that our user feels like they’re on the journey with us.</>],
            ["Psytem Listens", <>We wanted to build a campaign that expanded on the world we were building with the brand—but one that would also get the average scroller to stop in their tracks. So we came up with an idea: “Like your phone, Psystem listens.</>],
            ["Social Media", <>We developed several social media posts that would focus on the humans and stories that make up Psystem. This would really help people feel comfortable approaching them.</>],
            ["Businesses Assets", <>We wanted to build a campaign that expanded on the world we were building with the brand—but one that would also get the average scroller to stop in their tracks. So we came up with an idea: “Like your phone, Psystem listens.</>],
        ],
        outcome: <>Psystem has a consistent world that has come through every relevant touch point. The Experience Principles and broader brand strategy has been extremely well implemented within the organization. The current marketing team had done a great job of independently sticking to, and thoughtfully expanding on, the brand that we handed them. <br/><br/>Since our initial work with Psystem, they’ve grown from a single entrepreneur to a 7 person team within a year.</>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1920/v1645638493/case-studies/psystem/Psystem_Header_vphhdo.png",
        main: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1920/v1645638493/case-studies/psystem/Psystem_1_zlte3a.png",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_2200/v1645638493/case-studies/psystem/Psystem_2_j7icvn.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_2200/v1645638494/case-studies/psystem/Psystem_3_xvq6du.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_2200/v1645638493/case-studies/psystem/Psystem_4_b5hlvn.png",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1200/v1645638493/case-studies/psystem/Psystem_Branding_cdectv.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1200/v1645638493/case-studies/psystem/Psystem_Web_glpibc.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1200/v1645638493/case-studies/psystem/Psysten_listens_goyi7z.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1200/v1645638493/case-studies/psystem/Psystem_Social_viqauh.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1200/v1645638493/case-studies/psystem/Psystem_BusinessAsset_aeemw3.png"
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
                <img src={proj.gallery[1]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LR color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} img={proj.LRimgs[0]}/>
                <LR color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} img={proj.LRimgs[1]}/>
                <LR color={proj.color1} title={proj.LR[2][0]} blurb={proj.LR[2][1]} img={proj.LRimgs[2]}/>
                <LR color={proj.color1} title={proj.LR[3][0]} blurb={proj.LR[3][1]} img={proj.LRimgs[3]}/>
                <LR color={proj.color1} title={proj.LR[4][0]} blurb={proj.LR[4][1]} img={proj.LRimgs[4]}/>
            </div>

            <Outcome text={proj.outcome} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[2]} />
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

export default Psystem
