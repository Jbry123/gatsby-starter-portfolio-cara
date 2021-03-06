import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer'
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import '../styles/global';
import rocket from './giphy.gif';
import homeicon from './homeicon.png';
import './JonathanBryResume.pdf';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};

`;

const Content1 = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
  margin-top: 90%;

`;

const Content2 = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};

`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};

`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const InnerCenter = styled.div`
${tw('w-2/3 justify-center xxl:w-2/3 item-center text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-sans-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);

  @media (min-width: 280px) and (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (min-width: 1201px) and (max-width: 1280px) {
    font-size: 3.8rem;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
    font-size: 3.8rem;
  }
  @media (min-width: 1441px) and (max-width: 2599px) {
    font-size: 4rem !important;
  }
  @media (min-width: 2600px) and (max-width: 3000px) {
    font-size: 6rem !important;
  }
  @media (min-width: 3001px) and (max-width: 4000px) {
    font-size: 8rem !important;
  }
  @media (min-width: 3001px) and (max-width: 6000px) {
    font-size: 10rem !important;
  }

`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: inherit;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }

  @media (min-width: 280px) and (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (min-width: 1201px) and (max-width: 1280px) {
    font-size: 3.8rem;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
    font-size: 3.8rem;
  }
  @media (min-width: 1441px) and (max-width: 2599px) {
    font-size: 4rem !important;
  }
  @media (min-width: 2600px) and (max-width: 3000px) {
    font-size: 6rem !important;
  }
  @media (min-width: 3001px) and (max-width: 4000px) {
    font-size: 8rem !important;
  }
  @media (min-width: 3001px) and (max-width: 6000px) {
    font-size: 8rem !important;
  }
`;

const Button1= styled.button`
${tw('font-sans w-full justify-center text-white xxl:w-3/4')};
height: 125px;
background: linear-gradient(to right, #D4145A 0%, #FBB03B 100%);
font-size: 20px;
align-content: center;
justify-content: center;
display: inline-flex;
flex-direction: inherent;
margin: 0px;
border-radius: 15px;
border: none;

`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  width: 700px;
  @media (min-width: 531px) and (max-width: 730px) {
    width: 505px;
  }
  @media (min-width: 371px) and (max-width: 530px) {
    width: 305px;
  }
  @media (min-width: 300px) and (max-width: 370px) {
    width: 285px;
  }
  @media (min-width: 280px) and (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media (min-width: 801px) and (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (min-width: 1441px) and (max-width: 2599px) {
    font-size: 3rem !important;
  }
  @media (min-width: 2600px) and (max-width: 3000px) {
    font-size: 5rem !important;
  }
  @media (min-width: 3001px) and (max-width: 4000px) {
    font-size: 6rem !important;
  }
  @media (min-width: 4001px) and (max-width: 6000px) {
    font-size: 7rem !important;
  }

`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const Bullet = styled.img`
${tw('rounded-full w-12 shadow-lg')};
  height: 28px;
  width: 28px;
  margin-top: 5px;
  @media (min-width: 280px) and (max-width: 800px) {
    height: 18px;
    width: 18px;
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    height: 25px;
    width: 25px;
  }
  @media (min-width: 1201px) and (max-width: 5000px) {
    height: 28px;
    width: 28px;
  }
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-white text-lg md:text-xl lg:text-2xl font-sans')};
  p {
    @media only screen 
  and (max-width : 5120px)
  and (min-width : 4150px) {
    font-size: 4rem;
}

@media only screen 
and (max-width : 4149px)
and (min-width : 4000px) {
  font-size: 3rem;
}

@media only screen 
and (max-width : 3999px)
and (min-width : 2400px) {
  font-size: 2.3rem;
}

@media only screen 
and (max-width : 2399px)
and (min-width : 1000px) {
  font-size: 1.2rem;
}


@media only screen 
and (max-width : 999px)
and (min-width : 200px) {
  font-size: .8rem;
} 
  }
  h2 {
    @media only screen 
  and (max-width : 5120px)
  and (min-width : 4150px) {
    font-size: 6rem;
}

@media only screen 
and (max-width : 4149px)
and (min-width : 4000px) {
  font-size: 5rem;
}

@media only screen 
and (max-width : 3999px)
and (min-width : 2400px) {
  font-size: 3rem;
}

@media only screen 
and (max-width : 2399px)
and (min-width : 1000px) {
  font-size: 2rem;
}

@media only screen 
and (max-width : 999px)
and (min-width : 200px) {
  font-size: 1rem;
}
  }
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;


const Babelbark = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
        <SVG icon="triangle" className={hidden} width={48} stroke={'#87546B'} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={'#87546B'} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={'#F799C3'} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={'#E18CB2'} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={'#F9B4D3'} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={'#E18CB2'} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey']} left="95%" top="90%" />
        <SVG icon="triangle" width={8} stroke={'#F799C3'} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors['grey-darkest']} left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill={'#FBD0E3'} left="-5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={'#F9B4D3'} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={'#F799C3'} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={'#F799C3'} left="80%" top="70%" />
      </Divider>
      <Content1 speed={0.4} offset={0}>
        <Hero >
          <BigTitle>
            BabelBark - Petcare Reimagined
          </BigTitle>
          <Title>
            <strong>Questions:</strong> <br />
          </Title>
          <Subtitle className="subtitles">
          <Bullet className="bullet" src={rocket} alt="Website Development, freelance designer" />How can users better connect with their Vets?<br />

          <Bullet src={rocket} alt="marketing, interactive" />What info do users care most about, when it comes to their pets?<br />

          <Bullet src={rocket} alt="John Doe" />What design style is expected when it comes to healthcare in general, how can we make the interactions accessible for all? 
          <br /> <br />
          </Subtitle>
          <AboutDesc className="bodyText">
            <Gallery></Gallery>
            <h2><strong>Project Overview:</strong></h2>
            <p>
            The percent of pet ownership is split 3 ways amongst millennials, baby boomers, and the other generation classifications. This means that we have to create an interface that plays 
            to the senses of younger people, who use many apps and grow into patterns of modern design, while keeping in mind: structure, contrast, and guidance for people who don't interact with many interfaces. 
            Sadly UI/UX roles come with heavy NDA's, so I cant reveal much, but lets go over my process, keeping in mind that every project is special and complicated, so this is an overview!
            </p>
            <h2><strong>Problem Statement:</strong></h2>
            <p>
            Healthcare, or in this case, petcare, is notoriously clunky and outdated when it comes to design; this is usually due 
            to the leadership, HIPA guidelines, or the overall cost when it comes to this field. Thankfully Babelbark is a forward 
            thinking company that allowed me the artistic freedom to design something that didnt look like it was from 2010. As i was researching and talking to users of the beta, 
            I quickly realized that the problem statement could be boiled down to a few points: We have to design with all age ranges in mind, and create interactions, notifications, 
            and content that would inspire people to log on at least weekly. Lastly, with the latest ADA requirements directed towards public facing apps and websites, we had to start 
            the development with ARIA attributes in mind for blind users, contrast/typography customization rules for the visual impared, and ease of use for anyone with impaired motor functions.
            </p>
            <h2><strong>My Role:</strong></h2>
            <p>
            Throughout the process I surveyed current customers to get 3 takeaways across 100 surveys. I developed 15 short, open-ended answer questions, harshly making sure they werent leading the customer to an opinion in any way, and that they fell within the five take-aways we wanted. 
            From this initial survey I quickly got what I hypothesized; older users expect a hamburger menu and some teaching on how to use the app, they dont use 3D touch, and they like simple and elegant interfaces. Younger people below 40 were across the board for conventions,
            depending on what apps they use. I researched the top apps of this year, and came back with examples that were typical to every demographic, and tailored for our platform. My role went from: researching and interviewing, to designing, to testing my findings and reiterating through prototypes, 
            ultimately working with the development team to bring my low fidelity, coded prototypes, to life. I worked for 6 months past the product release to see how our users reacted; this role lasted 2 years.
            </p>
            

            <h2><strong>The User:</strong></h2>
            <p>
            Typically an app has one or two demographics, closely related, whether it be an auto parts distributor, or a music festival focused product; Babelbark was 
            different in the sense that I had to focus on many vantage points and experience levels when it came to technology, and UI/UX norms.
            </p>

            <h2><strong>What I Did:</strong></h2>
            <p>
            Surveys and beta testers were key in my heuristic evaluation after I made high fidelity mockups; we got a total of 100 surveys, and 20 beta testers, with a mix of both inside and outside of our company. 
            One thing I think is vital to any app is a guided tour through the app, that the user can not skip. When it comes to tutorials the drop off of information retention drops off at the 5th instruction. 
            This clearly means the shorter the better, but we had to provide enough to give all our users a solid starting point no matter what they're used to when it comes to app/website design. <br /> <br />
            When it comes to information heirarchy, our surveys revealed that they would prioritize about pet's shots, appointments, and preferred products. We made a banner at the top of the application with this info, 
            with a specialized feed of articles from brands, blogs, and their vet. </p>


            <h2><strong>Outcomes and Lessons:</strong></h2>
            <p>
            Making an accessible product is a strenuous, but neccessary task when you take into account demographics like: Baby Boomers, Millenials, Gen X, Y, Z, and everyone in between; as well as differently abled poplations such as: visual, cognitive, and motor functions. 
            It is a task I strive to keep on the forefront, because my job as a UI/UX professional is to make the web not only accessible for <strong>ALL,</strong> but easy and intuitive for <strong>ALL.</strong> 
            </p>
</AboutDesc>
        </Hero>
      </Content1>

      <DividerMiddle
        bg="linear-gradient(to right, #161719 0%, #161719 20%, #23262B 30%, #F799C3 90%)"
        speed={-0.4}
        offset={1.1}
        factor={2}
      />

      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
        <SVG icon="box" width={6} fill={'#FBD0E3'} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={'#87546B'} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={'#87546B'} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={'#E18CB2'} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={'#F799C3'} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={'#F799C3'} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={'#F9B4D3'} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={'#F9B4D3'} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={'#FBD0E3'} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={'#F9B4D3'} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={'#FBD0E3'} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={'#F799C3'} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={'#F799C3'} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={'#F9B4D3'} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={'#E18CB2'} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={'#F9B4D3'} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={'#E18CB2'} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={'#87546B'} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={'#87546B'} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={'#FBD0E3'} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={'#FBD0E3'} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={'#E18CB2'} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={'#FBD0E3'} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={'#F9B4D3'} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={'#F9B4D3'} left="80%" top="70%" />
      </Divider>
      <Content2 speed={0.4} offset={3}>
        <Inner>
          <AboutHero>
            
            <AboutSub>

            </AboutSub>
          </AboutHero>
        </Inner>
      </Content2>
      <Divider fill="#23262b" speed={0.4} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          
        </Inner>
        <a className="homeIcon" href="https://www.prideiscalifornia.com"><img src={homeicon} style={{position: 'absolute', bottom: '75px', right: '45vw'}} width="30px" height="30px" alt="bob"></img></a>

      </Content>
      <Divider speed={0.4} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Footer>
        </Footer>
    </Parallax>
  </React.Fragment>

);

export default Babelbark;
