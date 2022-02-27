import React from "react"
import { Layout, Spacer } from "../../components/meta"

import WorkCard      from "../../components/work/workcard.js"
import WorkHighlight from "../../components/work/workhighlight.js"

const Work = ({ }) => {

  const seo = {
    title: "Work",
    desc: ""
  }

  const projs = {
    mada: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638116/work/MADA_v1_bn37vi.png",
      link: "mada",
      blurb: <><h5>Raising $2 million to <br/>fight hunger with <em className="dorange">MADA.</em></h5></>
    },
    sh: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/SH_v1_bmrlpn.png",
      link: "sh",
      blurb: <><h5>Making innovation feel safe<br/> for young parents with the <br/><em className="dorange">Montreal Children’s Hospital.</em></h5></>
    },
    seize: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/SEIZE_v1_wazmkl.png",
      link: "seize",
      blurb: <><h5>Activating 4000+ students to <br/>fund a new economy with <em className="dorange">SEIZE.</em></h5></>
    },
    aisb: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/AisB_v1_naf9gb.png",
      link: "aisb",
      blurb: <><h5>Educating and mobilizing young<br/> voters with <em className="dorange">Apathy is Boring.</em></h5></>
    },
    infaque: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/Infaque_v1_rdysby.png",
      link: "infaque",
      blurb: <><h5>Bringing giving into the 21st<br/> century with <em className="dorange">Infāque.</em></h5></>
    },
    yic: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/YIC_v1_gy4chm.png",
      link: "yic",
      blurb:  <><h5>Getting 600+ young<br/> entrepreneurs to pitch their <br/>big idea with <em className="dorange">InvestEco</em> and<br/> <em className="dorange">Renewal Funds.</em></h5></>
    },
    cera: {
      name: "CERA",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733959/work/grid/CERA_Header_xyiid0.png",
      link: "cera",
      tag: "Video",
    },
    psystem: {
      name: "Psystem",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638142/work/grid/Psystem_Header_aiwhko.png",
      link: "psystem",
      tag: "Branding",
    },
    mcconnell: {
      name: "McConnell",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638141/work/grid/McConnell_Header_qe5lva.png",
      link: "mcconnell",
      tag: "Video",
    },
    chasm: {
      name: "CHASM",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638141/work/grid/CHASM_Header_ghro3j.png",
      link: "chasm",
      tag: "Website",
    },
    ECTHP: {
      name: "The Hunger Project",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/EthicalCoach_Header_ufw90l.png",
      link: "ECTHP",
      tag: "Graphic Design",
    },
    nofish: {
      name: "NoFish",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/NoFish_Header_umrpak.png",
      link: "nofish",
      tag: "Campaign Strategy",
    },
    pop: {
      name: "POP Montreal",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/POP_Header_qcj5gl.png",
      link: "pop",
      tag: "Video",
    },
    ippnwc: {
      name: "IPPNWC",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/IPPNWC_Header_fse62a.png",
      link: "ippnwc",
      tag: "Campaign Strategy",
    },
    indigirecruit: {
      name: "IndigIrecruit",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/IndigIrecruit_Header_pnxibt.png",
      link: "indigirecruit",
      tag: "Brand",
    },
  }
  return (
    <Layout navBlack={true} seo={seo} navActive="work">
        {/*<Seo seo={homepage.attributes.seo} />*/}
      <div className="work-head midline">
        <div className="midline-title">
            <svg className="circ" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#E26E4B"/>
            </svg>
            <h1>Our work is tied together with <em className="dorange">passion</em> and <em className="dorange">care.</em></h1>
        </div>
        <div className="midline-line"> </div>
        <div className="midline-subtitle">
          <h5>You put your heart into making your <br /> communities, and the world, better. <br /> You deserve to work with people who <br /> <span className="dorange"> do the same.</span></h5>
        </div>
      </div>

      <div className="work-highlight">
        <WorkHighlight img={projs.mada.img} ext={projs.mada.link} blurb={projs.mada.blurb}/>
        <WorkHighlight img={projs.sh.img} ext={projs.sh.link} blurb={projs.sh.blurb}/>
        <WorkHighlight img={projs.seize.img} ext={projs.seize.link} blurb={projs.seize.blurb}/>
        <WorkHighlight img={projs.aisb.img} ext={projs.aisb.link} blurb={projs.aisb.blurb}/>
        <WorkHighlight img={projs.infaque.img} ext={projs.infaque.link} blurb={projs.infaque.blurb}/>
        <WorkHighlight img={projs.yic.img} ext={projs.yic.link} blurb={projs.yic.blurb}/>
      </div>

      <div className="full-width">
        {/*<div className="work-filter">
            <ul>
              <li className="menu-active"><a>All</a></li>
              <li className=""><a>Project Type</a></li>
              <li className=""><a>Impact Areas</a></li>
              <li className=""><a>Client</a></li>
            </ul>
           </div>

        <div className="work-filter-submenu">
          <div className="work-filter-divider" />
            <ul>
              <li><a>Video</a></li>
              <li><a>UI/UX Design</a></li>
              <li><a>Web Design</a></li>
              <li><a>Web Development</a></li>
              <li><a>Other</a></li>
              <li><a>Other</a></li>
              <li><a>Other</a></li>
              <li><a>Other</a></li>
            </ul>
          <div className="work-filter-divider" />

        </div>*/}

        <div className="work-grid">
          <WorkCard proj={projs.cera} />
          <WorkCard proj={projs.psystem} />
          <WorkCard proj={projs.mcconnell} />
          <WorkCard proj={projs.chasm} />
          <WorkCard proj={projs.ECTHP} />
          <WorkCard proj={projs.nofish} />
          <WorkCard proj={projs.pop} />
          <WorkCard proj={projs.ippnwc} />
          <WorkCard proj={projs.indigirecruit} />
        </div>

        <Spacer h="80px" />
      </div>
    </Layout>
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

export default Work
