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


const NoFish = ({ }) => {

    const proj = {
        seo: {
            title: "NoFish",
            desc: ""
        },
        color1: "#29B4BC",
        color2: "#EA5F66",
        name: "NoFish",
        title: <>Helping Montreal’s biggest vegan Sushi chef go sustainable.</>,
        foci: [
            "Sustainable Consumption",
        ],
        year: "2021",
        disciplines: [
            "Campaign Strategy",
            "Copywriting",
            "Graphic Design",
            "Brand Design",
        ],
        intro: <>Christian Ventura, owner and chef behind Sushi MoMo and Casa Kaizen, approached us with his new brand: NoFish. The brand was focused on being a quick, vegan, alternative to fish-based sushi for young Montrealers. We leaned into those brand principles for the campaign: Easy, Vegan, Delicious. It was simple—just like dinner should be. On top of that, we imagined a local QR-code based scavenger hunt called the ‘Golden Roll” which would activate people locally and on social media to get free sushi in exchange for shares.</>,
        challenge: <>Launch a new sushi brand in the pandemic. Cultivate brand loyalty to a casual sushi restaurant. Challenge existing beliefs about the quality and taste of vegan sushi alternatives. Create a high quality sushi brand that didn’t need to be eaten on a night out—but could be ordered at lunch, on a lazy evening, and in sweatpants. Use these to differentiate NoFish from Christian Ventura’s other brands.</>,
        dotstrip: <>Cultivate local brand <br/>loyalty for a casual <br/>vegan sushi project.</>,
        approach: <>Our approach was two-fold. One was a digital campaign—leveraging ad spending and organic growth tactics to cultivate a following on social media. For this, we focused on a simple set of value proposition-based messages: Easy. Vegan. Delicious. We also focused on building interest around NoFish’ unique brand voice. We did this to appeal to young sushi-eaters who wanted something casual, funny, and approachable in the Montreal market. The second approach was through a local campaign: “The Golden Roll”, which created a QR-code based scavenger hunt for people to engage in and share—in exchange for the chance at winning free sushi.</>,
        execution: <>For the digital campaign, we built out some messages that really reinforced the brand messages. The first were our “Easy. Vegan. Delicious.” GIFs. These simple, eye-catching GIFs quickly set the tone for NoFish’ brand got the value propositions out there quickly. The second set of ads were more playful, and irreverent—catching people’s attention with bold copy and slick design. We extended this brand campaign through to the packaging of the box—which we built for launch, and included games that you could play on the back. Finally, we built out a strategy and assets for our “Golden Roll” scavenger hunt.</>,
        LR: [
            ["Digital Campaign", <>This digital media campaign was focused on setting the tone and differentiating NoFish’ brand in a competitive market. We did this through bold copy and design.</>],
            [<>"Golden Roll" Campaign</>, <>Get local members of the Villeray Community engaged in a scavenger hunt where they could find stickers with QR codes, share that they had found them for the chance to win free sushi, and search for a “Golden Roll” which promised a sushi feast.</>],
            ["Packaging", <>The packaging was built to reinforced the irreverent and playful tenor of NoFish’ brand—being covered in cute sayings, characters, and games that you can play with your friends as you eat sushi together.</>],
        ],
        outcome: <>The launch of NoFish was a success on social media! NoFish’ Instagram grew 120% in just a couple weeks—from 474 followers to 1046. The brand was included in several media outlets after its launch—and the feedback from people who ordered it was great!</>,
        header: "https://res.cloudinary.com/mymediacreative/image/upload/v1645638530/case-studies/no%20fish/NF_Header_efvlam.png",
        main: "https://res.cloudinary.com/mymediacreative/video/upload/v1645641517/case-studies/no%20fish/NoFish_Flagship_nh8uaz.mp4",
        mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158845/case-studies/no%20fish/NoFish_Mobile_tnzrpd.png",
        mobilePosition: "center",
        gallery: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638531/case-studies/no%20fish/NF_Packaging_sgmr0q.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638531/case-studies/no%20fish/NF_Post1_kvlagi.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638531/case-studies/no%20fish/NF_Post3_jygpki.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638531/case-studies/no%20fish/NF_Post4_hrfzhv.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638531/case-studies/no%20fish/NF_Post2_vng2ui.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638530/case-studies/no%20fish/NF_Box2_yqns7r.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638530/case-studies/no%20fish/NF_Box_de5eqp.png"
        ],
        LRimgs: [
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638530/case-studies/no%20fish/NF_Campaign_okkvls.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638530/case-studies/no%20fish/NF_Gold_v9b5ot.png",
            "https://res.cloudinary.com/mymediacreative/image/upload/v1645638531/case-studies/no%20fish/NF_Packaging2_jz3xtc.png",
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
                <TwoImg
                    img1={proj.gallery[3]}
                    img2={proj.gallery[4]} />
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

export default NoFish
