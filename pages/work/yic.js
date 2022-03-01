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


const YIC = ({ }) => {

    const proj = {
        seo: {
            title: "InvestEco and Renewal Funds",
            desc: ""
        },
        color1: "#d27765",
        color2: "#d27765",
        name: "InvestEco and Renewal Funds",
        title: <>Getting youth involved in impact <br/>and entrepreneurship.</>,
        foci: [
            "Social Innovation",
        ],
        year: "2020",
        disciplines: [
            "Campaign Strategy",
            "Social Media Strategy",
            "Video",
            "Graphic Design",
        ],
        intro: <>When InvestEco and Renewal Funds, two of Canada’s largest impact-oriented venture capital firms, wanted to give $10,000 away to a great social innovator—we were ecstatic. The catch? We had less than a month to mobilize as many people as possible. Ultimately, we built out a social campaign that leveraged micro-influencers, direct outreach, and organic content growth to drive 10,000 website visitors, 650+ followers, and 600+ people to apply in that time. </>,
        challenge: <>Enter the crowded market for pitch-competitions with a new brand. Get 300+ entrepreneurs to write a 3-page proposal about their idea. Do all of this in a month without any ad spending. Challenge accepted.</>,
        dotstrip: <>Run a digital campaign to <br/>get young people imagining <br/>and making. </>,
        approach: <>We started by building a strategy that leveraged social and personal networks. We identified key micro-influencers at universities across the country—and interviewed them. Once we had made the interviews, we had them share onto their social networks—exposing us to hundreds of new young people in our target audience. We did the same by doing outreach to 100s of organizations with a youth audience + posting across groups of young innovators in Canada. We paired this with a strong, consistent, drumbeat of content that educated people and reminded them to apply.</>,
        execution: <>We started by building our campaign strategy—pitching it to the team. We would support the coordinators on rollout throughout the process. Content-wise, we made several interview videos, graphic social posts, and a flagship video in the aftermath of the competition—looking ahead to the next year.</>,
        LR: [
            ["Interviews", <>We interviewed a ton of youth leaders from across the country—turning some of their interviews into videos, and others into quote posts like this one.</>],
            ["Infographics", <>We made a couple infographics on key issues from Project Drawdown. This was mean to educate and make the competition more accessible to a broader range of young people.</>],
            ["Flagship Video", <>We made a simple, fast-paced, video that would capture the year’s success and get people excited for the competition’s future.</>],
        ],
        outcome: <>The outcome was positive. We accumulated 9000+ site visits across 350 Canadian cities and 650+ social media followers in the month we were active. We more than doubled our 300 person goal—accumulating applications from 600+ people across Canada.</>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638564/case-studies/invest%20eco/YIC_1_psuzqu.png",
        main: "https://vimeo.com/681650354",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158818/case-studies/invest%20eco/YIC_Mobile_xzqjf0.png",
        mobilePosition: "center",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638564/case-studies/invest%20eco/YIC_Header_gf80ze.png",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638564/case-studies/invest%20eco/YIC_Quotes_nm2ouj.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638564/case-studies/invest%20eco/YIC_3_kvxjrw.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638564/case-studies/invest%20eco/YIC_4_kf8m1o.png",
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
                <GalleryPlayer src={proj.main}/>
            </div>

            <Challenge text={proj.challenge} color={proj.color1} />

            <DotStrip text={proj.dotstrip} color={proj.color2} />

            <Approach text={proj.approach} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[0]} />
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

export default YIC
