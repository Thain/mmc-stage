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


const IPPNWC = ({ }) => {

    const proj = {
        seo: {
            title: "IPPNWC",
            desc: ""
        },
        color1: "#243553",
        color2: "#243553",
        name: <>International Physicians for the <br/>Prevention of Nuclear War Canada</>,
        title: <>Bringing young physicians into <br/>the peace movement.</>,
        foci: [
            "Anti-Militarism",
        ],
        year: "2021",
        disciplines: [
            "Campaign Strategy",
            "Copywriting",
            "Video",
        ],
        intro: <>International Physicians for the Prevention of Nuclear War Canada (IPPNWC) is the Canadian arm of the two-time Nobel Peace Prize Winning movement of medical practitioners advocating against militarism and war. IPPNWC reached out to us to run a campaign that would draw medical students (among other young people) into their mentorship programs. The goal was to spread a 21st century message that could help the organization find the next generation of peace advocates. To do that we built a set of campaign videos, social media posts, and an email campaign.</>,
        challenge: <>The broad donor and support base for IPPNWC was cultivated during the peak of the peace movement in the 1970s and 1980s. Today, young people have shifted their focus to other global issues like climate change and social inequality. The challenge for us was to bring a modern twist to the peace movement that would resonate with, and mobilize, young activists (specifically medical students).</>,
        dotstrip: <>Find a vital 21st century <br/>message for the peace <br/>movement and IPPNWC.</>,
        approach: <>At the time, COVID-19 was most of what people could think about. There wasn’t lot of space left for any other social issues—so we leaned into that. We focused on creating a video that likened the nuclear weapons crisis to the global health crisis that we had been in the midst of for more than a year at that point. We also pointed to the unprecedented capacity of global institutions to roll out effective solutions to both crises—in the case of COVID-19, the vaccine and in the case of nuclear weapons, non-proliferation treaties. Finally, we leveraged the elevated importance of health care workers’ opinions in the midst of a global pandemic to create a sense of moral authority in the messaging.</>,
        execution: <>To roll out this campaign strategy we built three videos, three social posts, and an email campaign with a focus on the messaging. The video was designed to make the audience think we were talking about COVID—and then reveal that we were, in fact, referring to was a global nuclear crisis. We did this to expose the parallels between the two crisis—and to invoke the active global response to COVID as proof that we needed a similarly forceful response to nuclear proliferation. Our email campaign used similar messaging point—but when on to discuss the hope that exists in the movement. We pointed to a history of successful activism and the passion of youth to show our audience the light at the end of the tunnel.</>,
        LR: [
            ["Flagship Video", <>This flagship video used news footage, stock imagery, and a core monologue to mobilize young people around the principles of the peace movement.</>],
            ["Social Media Videos", <>We created several shorter videos for use across social media. One of the core videos focused on the history of successful activism that ran through IPPNWC. This was done to inspire hope that there was a viable path forward.</>],
            ["Email Campaign", <>Our email campaign to existing donors was designed to shine a light on the power of youth in this movement (if properly activated and supported). It also spoke to the active youth-focused programs IPPNWC was running to do just that.</>],
        ],
        outcome: <>When surveyed, 92% of medical students said that they would be highly likely to share the campaigns flagship video with their peers—and seek out further information on the subject. Qualitatively, medical students pointed to the novelty of the campaign and the important role that it played putting the issue on their radar. In the end, the campaign was successful in driving new interest among medical students to IPPNWC’s Fellowships and programs.</>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645639229/case-studies/ippnwc/IPPNWC_Header_tafon1.png",
        main: "https://vimeo.com/681653736",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158826/case-studies/ippnwc/IPPNWC_Mobile_svyvw4.png",
        mobilePosition: "77%",
        gallery: [
            "https://vimeo.com/681652482",
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639228/case-studies/ippnwc/IPPNWC_1_zki73o.png",
            "https://vimeo.com/681652705",
            "https://vimeo.com/681652601",
        ]
    }

  return (
      <>
        <div className="case-study-content">
            <div className="case-study-head"style={{ backgroundImage: `url(${proj.mobile})`, backgroundPosition: `${proj.mobilePosition}`}}>
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
                <GalleryPlayer src={proj.gallery[0]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LR color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} img={proj.LRimgs[0]}/>
                <LRplayer  color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} src={proj.LRimgs[1]}/>
                <LRplayer  color={proj.color1} title={proj.LR[2][0]} blurb={proj.LR[2][1]} src={proj.LRimgs[2]}/>
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

export default IPPNWC
