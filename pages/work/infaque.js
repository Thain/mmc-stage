import React from "react"

import { Layout, Nav, Footer, Spacer } from "../../components/meta"

import { Intro, Challenge, Approach, Execution, Outcome,
         LR, LRvid, LRplayer,
         DotStrip,
         HeaderVid, HeaderImg, GalleryVid, GalleryPlayer,
         TwoImg, ThreeImg
       } from "../../components/casestudy"

import WorkCard from "../../components/work/workcard"


const Infaque = ({ }) => {

    const seo = {
        title: "Infāque",
        desc: ""
    }

    const proj = {
        seo: {
            title: "Infāque",
            desc: ""
        },
        color1: "#1F5E72",
        color2: "#AECBD8",
        name: "Infāque",
        title: <>Rethinking giving for the digital era.</>,
        foci: [
            "Social Innovation",
            "Tech For Good"
        ],
        year: "2021",
        disciplines: [
            "Brand Strategy",
            "Brand Design",
            "Web Design",
            "Copywriting",
            "Campaign Strategy",
            "Video"
        ],
        intro: <>Infāque is a platform that wants to make giving more frictionless, effective, and transparent. Through our research-led work together we identified their audience, market opportunity, and brand strategy. We built this out into a beautiful visual brand and website. Ultimately, we launched the brand across social channels and directly to members of the target market.</>,
        challenge: <>Infāque is a platform that wants to make giving more frictionless, effective, and transparent. Through our research-led work together we identified their audience, market opportunity, and brand strategy. We built this out into a beautiful visual brand and website. Ultimately, we launched the brand across social channels and directly to members of the target market.</>,
        dotstrip: <>Get people donating again<br/> — by building a brand that <br/>speaks to them.</>,
        approach: <>We started with a survey—asking more than 100 young people what their relationship is to charitable giving. We took this data, and more detailed research, to develop our brand strategy. This took the form of a strategic Narrative and Experience Principles—which defined the brand’s audience, market positioning, key values, and it’s “pitch story”. Once that was done, we worked to develop a visual brand and website that reflected our strategic objectives. Finally, with all of this research and brand strategy done—we developed a brand Go-To-Market campaign which went out through social media, direct outreach, and digital advertising.</>,
        execution: <>Our principle for this brand campaign was experimentation. Experiment with different approaches to messaging, content, and audience targeting so that we could learn as much as possible about the audience + what would get them to convert. So, we tried several different content approaches: a 2-minute animated video, 1-minute “Explainer” videos, a couple animated GIFs, and static infographic content for social media. We took feedback from our audience as we rolled these pieces out—adjusting our focus, and creative asset, up until we surpassed our established social media followership growth goals for the initial brand campaign.</>,
        LR: [
            ["Branding", <>We benchmarked tech disruptors and leading nonprofit brands to find the perfect balance between "platform economy" and social good.</>],
            ["Web Design & Development", <>We built an illustration-heavy website that playfully welcomes users into the "world of Infāque".</>],
            ["Explainer Video", <>The concept was novel—but crucial. We built a 2-minute explainer video that focused on inspiring hope in individual action and breaking the core concept of the application down.</>],
            ["Rethink Giving", <>We built a three-part social media series that tackled interesting issues in the social sector in a 1-minute video that was styled halfway between a Vox documentary and a TikTok explainer.</>],
            ["Brand Activation GIFs", <>The concept was novel—but crucial. We built a 2-minute explainer video that focused on inspiring hope in individual action and breaking the core concept of the application down.</>],
        ],
        outcome: <>Our brand strategy work was a game-changer for the product—identifying the audience, market opportunity, and key strategic narrative to tell in order to break into the market. This has been used to great success to acquire speaking opportunities, coverage, and interest from our user base. <br/><br/>The Infāque social media accounts were starting from scratch—so we set reasonable initial goals: 300 followers within the first couple weeks. During the initial two weeks of the brand campaign we received 60,000 impressions and surpassed our follower goal by 200 across platforms. Most importantly, we gathered important data about user preferences through very limited spending—Infāque can use it to shape their decisions when they’re ready to go to market at scale.</>,
        header: "https://res.cloudinary.com/mymediacreative/video/upload/v1645639065/case-studies/infaque/Infaque_HeaderLoop_jszbeh.mp4",
        main: "https://res.cloudinary.com/mymediacreative/image/upload/v1645639064/case-studies/infaque/Infaque_Brand_zempjb.png",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639064/case-studies/infaque/Infaque_Web_pwim7p.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639064/case-studies/infaque/Infaque_Illustration_kcblzj.png",
            "https://res.cloudinary.com/mymediacreative/video/upload/v1645639066/case-studies/infaque/Fire_Gif_y0gxox.mp4",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639065/case-studies/infaque/Infaque_Social_gqgne7.png"
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639064/case-studies/infaque/Infaque_Brand2_shyqhy.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639064/case-studies/infaque/Infaque_Mac_kvmyok.png",
            "https://vimeo.com/681649639",
            "https://vimeo.com/681650164",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645639064/case-studies/infaque/Infaque_Gif_mwgozo.png"
        ]
    }



  return (
      <>
        <div className="case-study-content">
            <div className="case-study-head">
                <Nav isBlack={true} seo={proj.seo} active="work"/>
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
                <img src={proj.main} />
            </div>

            <Challenge text={proj.challenge} color={proj.color1} />

            <DotStrip text={proj.dotstrip} color={proj.color2} />

            <Approach text={proj.approach} color={proj.color1} />

            <div className="full-width">
                <img src={proj.gallery[0]} />
                <div className="two-img">
                        <img src={proj.gallery[1]} />
                        <video style={{margin:"10px 0"}} width="100%" autoPlay={true} muted loop playsInline >
                                <source src={proj.gallery[2]} type="video/mp4" />
                        </video>
                </div>
                <img src={proj.gallery[3]} />
            </div>

            <Execution text={proj.execution} color={proj.color1} />

            <div className="case-study-LR">
                <LR color={proj.color1} title={proj.LR[0][0]} blurb={proj.LR[0][1]} img={proj.LRimgs[0]}/>
                <LR color={proj.color1} title={proj.LR[1][0]} blurb={proj.LR[1][1]} img={proj.LRimgs[1]}/>
                <LRplayer color={proj.color1} title={proj.LR[2][0]} blurb={proj.LR[2][1]} src={proj.LRimgs[2]}/>
                <LRplayer color={proj.color1} title={proj.LR[3][0]} blurb={proj.LR[3][1]} src={proj.LRimgs[3]}/>
                <LR color={proj.color1} title={proj.LR[4][0]} blurb={proj.LR[4][1]} img={proj.LRimgs[4]}/>
            </div>

            <Outcome text={proj.outcome} color={proj.color1} />

            <Spacer h="80px" />

        </div>
      <Footer />
    </>
  )
}

{/*


            <div className="reg-w">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5" fill={proj.color1}/>
                </svg>
                <h4 className="h4p"> More work </h4>
            </div>

            <div className="full-width case-study-more">
                <div className="more-grid">
                    <WorkCard name="Infaque" tags="tags tags tags"/>
                    <WorkCard name="Infaque" tags="tags tags tags"/>
                    <WorkCard name="Infaque" tags="tags tags tags"/>
                </div>

            </div>

            <Spacer h="170px" />



export async function getStaticProps() {
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

export default Infaque
