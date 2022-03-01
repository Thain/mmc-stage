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


const MADA = ({ }) => {

    const proj = {
        seo: {
            title: "MADA",
            desc: ""
        },
        color1: "#FDBF0E",
        color2: "#09283D",
        name: "MADA Community Center",
        title: <>Could You Choose?</>,
        foci: [
            "Anti-Poverty",
            "Food Security"
        ],
        year: "2021",
        disciplines: [
            "Campaign Strategy",
            "Copywriting",
            "Video",
            "Graphic Design"
        ],
        intro: <>MADA is one of Montreal’s most important anti-poverty organizations, and one of MacLean’s top 100 Canadian charities. In 2021 they set out to raise $2 million dollars through a major public fundraising campaign. We worked with them to craft a creative strategy, messaging, and visual language that would ask donors to consider the impossible choices and diverse needs of MADA’s clients. We did this drive donations and inspire fundraising teams to take action. The campaign was a success—raising $2 million dollars in 7 days.</>,
        challenge: <>MADA had more ambitious goals than ever. They wanted to double last year’s success while telling a complex story about changing social circumstances, the future of the organization, and the needs that were going to be exposed as emergency funding from the pandemic tapered off in the community. The previous year’s campaign used a very strong, simple, COVID-19 relief focused message to drive unprecedented levels of donor-engagement. We had our work cut out for us.</>,
        dotstrip: <>Raise $2m with a story about changing realities in the community.</>,
        approach: <>After a couple weeks of researching and engaging with the MADA team—we came back with a core thrust for the campaign: “Could You Choose”. A ton of people who access food banks, and other similar services, skip out on meals to afford other basic necessities on the regular. We thought this was a deeply human reality that donors would connect to. It also provided space for us to talk about the diverse range of community services that MADA provides. As a second prong in the campaign, we focused on the idea of “hope” and how to nurture it. MADA makes sure that people aren’t just fed, but that they’re nourished. That they have access to community, security, and dignity. With “I Need Hope” we pushed the message that those things, not just food, were the foundation for hope.</>,
        execution: <>We executed the campaign through a mix of digital and traditional media: social posts, placement ads, print, billboards, in-city signs, TV commercials, email, and donor-letters. The goal was to make the messaging inescapable to anyone who was likely to be a donor to MADA—whether that was online or IRL. Once we established the core messaging, we focused on three stories: the story of a young mother, an older couple, and a young man. We booked time to with them to for a video and photo shoot. This would serve as the essential material for our placement ads, print, and video campaign.</>,
        LR: [
            ["Branding", <>We started by establishing the core visual brand alongside the strategic thrust. We had to develop a unique style guide for the campaign—which brought the human stories we were telling to life.</>],
            ["Messaging", <>The messaging focused on “Choices” and “Hope”. We zoned in on extremely human stories—drawing them out across media and platforms. The idea was to really harness empathy in this campaign.</>],
            ["Ads", <>We built a mix of video and static advertisements for broad use on digital, print, and other traditional platforms. Like the messaging, these ads focused on three core human stories to drive donations.</>],
            ["Social Media", <>We built out several social media assets from interviews with clients and donors. These documentary style posts were meant to stimulate deeper engagement from MADA’s existing donor-base.</>],
            ["Email Campaign", <>Any good fundraising campaign needs a ton of email. We built a 7-day email sequence to get, and keep, people engaged in the campaign , sharing it, and donating throughout the week.</>],
        ],
        outcome: <>The campaign was a success on several fronts. Of course the most important metric, funds raised, speaks for itself. Within 7 days the campaign raised $2 million. Digital ad spending on our creative assets proved useful—showing a 6x ROI on ad dollars spent (with “Could You Choose” being the highest performer of our assets”. Finally, the message was successful in mobilizing the existing community: 129 fundraising teams raised an average of $10,000 each—for a total of $1.4 million.</>,
        header: "https://res.cloudinary.com/mymediacreative/video/upload/v1645642687/case-studies/mada/MADA_Header_Loop_rsbu9k.mp4",
        main: "https://vimeo.com/681645746",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646157461/case-studies/mada/MOBILE_MADA_Header_zuu9lx.png",
        mobilePosition: "59%",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638916/case-studies/mada/MADA_1_bwspal.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638915/case-studies/mada/MADA_2_v4xeaw.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638916/case-studies/mada/MADA_3_m3pfy2.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638915/case-studies/mada/MADA_Feed_thzsaz.png",
            "https://vimeo.com/681646047",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/video/upload/v1645642687/case-studies/mada/MADA_Logo_Animation_kwlz1x.mp4",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638915/case-studies/mada/MADA_Messaging_maavdq.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638915/case-studies/mada/MADA_Billboard_asgfsi.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638915/case-studies/mada/MADA_SocialMedia_gsot1u.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638915/case-studies/mada/MADA_Email_xvn8ka.png",
        ]
    }

  return (
      <>
        <div className="case-study-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <div className="case-study-head" style={{ backgroundImage: `url(${proj.mobile})`, backgroundPosition: `${proj.mobilePosition}`}}>
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
                <GalleryPlayer src={proj.main} />
            </div>

            <Challenge text={proj.challenge} color={proj.color1} />

            <DotStrip text={proj.dotstrip} color={proj.color2} />

            <Approach text={proj.approach} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[0]} />
                <img src={proj.gallery[1]} />
                <img src={proj.gallery[2]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LRvid  color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} src={proj.LRimgs[0]}/>
                <LR     color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} img={proj.LRimgs[1]}/>
                <LR     color={proj.color1} title={proj.LR[2][0]} blurb={proj.LR[2][1]} img={proj.LRimgs[2]}/>
                <LR     color={proj.color1} title={proj.LR[3][0]} blurb={proj.LR[3][1]} img={proj.LRimgs[3]}/>
                <LR     color={proj.color1} title={proj.LR[4][0]} blurb={proj.LR[4][1]} img={proj.LRimgs[4]}/>
            </div>

            <Outcome text={proj.outcome} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[3]} />
                <GalleryPlayer src={proj.gallery[4]} />
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

export default MADA
