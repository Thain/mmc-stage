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


const AisB = ({ }) => {

    const proj = {
        seo: {
            title: "Apathy is Boring",
            desc: ""
        },
        color1: "#ea3df3",
        color2: "#ea3df3",
        name: "Apathy is Boring",
        title: <>Helping young voters rise.</>,
        foci: [
            "Youth Engagement",
            "Civic Participation",
        ],
        year: "2021",
        disciplines: [
            "Copywriting",
            "Web Design",
            "Web Development",
        ],
        intro: <>Apathy is Boring mobilizes young voters—getting them involved in Canadian democracy at every stage possible. They reached out to us to redesign the web pages for their RISE program, and their VOTE page ahead of the 2021 election. We re-imagined the pages—bringing in new visual motifs and developing an interactive map to help people navigate local RISE projects. View the RISE page here. View the VOTE page here.</>,
        challenge: <>The challenge was mobilizing young voters in a way that was national and non-partisan way. We had to strike a conversational tone that young people would see themselves in—and actually follow the story to the resources or application at the bottom. We had to do this in a nonpartisan way that would activate people across localities and the political spectrum.</>,
        dotstrip: <>Mobilize young voters in a <br/>way that was national and <br/>non-partisan.</>,
        approach: <>To address these challenges, we developed two major design innovations. The first one was an interactive map that allowed people to see their city, the projects within, and the people connected to those projects. We thought this was a better way to engage people across Canada—and organize the information that was previously broken down as a long list. The second was to mimic the UX of iMessage. We structured the content as a text conversation about voting. Then, we brought that to life on the page. To tie it all together, we added new illustrative elements and refined the UX of each page.</>,
        execution: <>We started with a couple brainstorm sessions, moved through to content design, mocked the site up in Figma, and then developed it as custom code on Nation Builder. The writing and design of the site was relatively straightforward. We wanted to pull on AisB’s existing messaging and brand principles—but take them to the next level visually. We did that by crafting an outside the box VOTE narrative that was built on their existing messaging framework. We also integrated illustrations into their existing photos—to really add a touch of wonder to their human imagery. The execution of the interactive (and editable) map was a complex development challenge within the NationBuilder CRM. We built it out seamlessly after research and some good old fashioned hard work.</>,
        LR: [
            ["Illustrations", <>We integrated illustrations into photos that AisB already had—adding another visual dynamic to the brand, and bringing the photos to life.</>],
            ["Web Design", <>We designed the websites with some out of the box ideas like an interactive map + a whole page playing out like a text conversation between two friends about voting.</>],
            ["Web Development", <>We designed these pages to be fully editable within the NationBuilder CRM—which was a departure from our general use of the WordPress CRM.</>],
        ],
        outcome: <>We launched the pages! In the case of VOTE, we did it just in time for the writ to drop. As Apathy is Boring ramped up their activities ahead of the 2021 Federal Election—our pages became a hub for a ton of traffic that their initiatives were sending to the website. In the case of the outcome for these pages, though, pictures speak louder than words.</>,
        header: "https://res.cloudinary.com/mymediacreative/video/upload/v1645638250/case-studies/AisB/AisB_Header_kb2j5u.mp4",
        main: "https://res.cloudinary.com/mymediacreative/video/upload/v1645638442/case-studies/AisB/Rise_Flagship_ro6zzf.mp4",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638249/case-studies/AisB/AisB_1_ndmqfr.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638250/case-studies/AisB/AisB_2_a7xm2z.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638250/case-studies/AisB/AisB_6_kngnjo.png",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638249/case-studies/AisB/AisB_3_dwwsng.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638249/case-studies/AisB/AisB_4_clwli2.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638249/case-studies/AisB/AisB_5_pimk78.png",
        ]
    }

  return (
      <>
        <div className="case-study-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <div className="case-study-head">
                <Nav seo={proj.seo} isBlack={false} active="work"/>
                <HeaderVid src={proj.header} />
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
                <TwoImg
                    img1={proj.gallery[1]}
                    img2={proj.gallery[2]} />
                <img src={proj.gallery[3]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LR color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} img={proj.LRimgs[0]}/>
                <LR color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} img={proj.LRimgs[1]}/>
                <LR color={proj.color1} title={proj.LR[2][0]} blurb={proj.LR[2][1]} img={proj.LRimgs[2]}/>
            </div>

            <Outcome text={proj.outcome} color={proj.color1} />

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

export default AisB
