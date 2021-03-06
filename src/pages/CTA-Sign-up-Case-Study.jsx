import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
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
  margin-top: 100%;
  
  
  @media (min-width: 1700px) {
    margin-top: -90%;
  }

  @media (min-width: 2000px) {
    margin-top: -150%;
  }

  media (min--moz-device-pixel-ratio: 1.5) and
       (-o-min-device-pixel-ratio: 3/2) and
       (-webkit-min-device-pixel-ratio: 1.5) and
       (min-device-pixel-ratio: 1.5) and
       (min-resolution: 144dpi) and
       (min-resolution: 1.5dppx) and 
       (min-width: 1300px) and (max-width : 2000px) and
       @-ms-viewport {
{
 margin-top: 200%;
}

  @media (min-width: 1000px) and (max-width: 1400px) {
    margin-top: -58%;
  }

  
  @media (min-width: 350px) and (max-width: 800px) {
    margin-top: 460%;
  }

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

`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: 280px) and (max-width: 800px) {
    font-size: 1rem;
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1201px) and (max-width: 5000px) {
    font-size: 2rem;
  }
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
  @media (max-width: 450px) {
    width: 280px;
    margin-right: 5%;
    margin-left: 1%;
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
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-white text-lg md:text-xl lg:text-2xl font-sans')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const CtaStudy = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      <Content1 speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            CTA Sign Up CRO Strategies
          </BigTitle>
          <Title>
            <strong>3 Things To Focus On When Optimizing Your CTA's UX, To Boost Conversions.</strong> <br />
          </Title>
          <Subtitle>
          <Bullet className="bullet" src={rocket} alt="Website Development, freelance designer" />Good UX starts from the moment your customer interacts with your brand.<br />

          <Bullet src={rocket} alt="marketing, interactive" />How can we focus conversions on the right demographic?<br />

          <Bullet src={rocket} alt="John Doe" />How does psychology play into the whole experience?
          <br /> <br />
          </Subtitle>
          <AboutDesc>
            <strong>Case Study Overview:</strong>
            <br /><br />
            For this case study, I focused on the use of CTAs in landing page sign ups.
            <br />
            <br />
            This is an overview of certain trends and takeaways for CTA conversion optimization , lets go over my process of: researching a targeted demographic, looking at well curated copy examples and deciding on
             a voice, and tying that into the whole Call to Action


            <br />
            <br />
            <strong>Researching Demographics:</strong>
            <br />
            <br />
            You probably have some sort of idea as to what your target demographics are, now you need to realize where they are at in their buying journey, what info will help convert, and what's valuable to them in order for them
             to give you their email. 
             <br />
             1. Segment your data based off of the traffic that brought the user to the site
             <br />
             2. Establish key parts of the sign up design, offering, and copy
             <br />
             3. Connect the solution you're offering to a customer model, based off of: Age, Traffic Type, Needs, and Career.
             <br />
             4. Extract the elements of what was working, the needs you solved, the design, and the overall ad delivery.
            <br /><br />
            <strong>CTA Design:</strong>
            <br />
            <br />
            If you're designing a new concept/style for your sign up landing page, you can tie the information I discussed above, in with reviewing examples of either competition or other websites with interesting and functional designs. Use these design concepts to 
            formulate something that you think will hold true to the message, branding, and information it's working with.
            <br />
            Using a brand style guide? Easy, use the data of past campaigns, and evaluate whether it was a good demographic to target, a good ad delivery combines multimedia value propositions, and industry specific, sleek design.
            <br /><br />
            <strong>The User:</strong>
            <br />
            <br />
            Typically an app has one or two demographics, closely related, whether it be an auto parts distributor, or a music festival focused product; Babelbark was 
            different in the sense that I had to focus on many vantage points and experience levels when it came to technology, and UI/UX norms.
            <br /><br />
            <strong>What I Did:</strong>
            <br />
            <br />
            Surveys and beta testers were key in my heuristic evaluation after I- made high fidelity mockups; we got a total of 100 surveys, and 20 beta testers, with a mix of both inside and outside of our company. 
            One thing I think is vital to any app is a guided tour through the app, that the user can not skip. When it comes to tutorials the drop off of information retention drops off at the 5th instruction. 
            This clearly means the shorter the better, but we had to provide enough to give all our users a solid starting point no matter what they're used to when it comes to app/website design. <br /> <br />
            When it comes to information heirarchy, our surveys revealed that they would prioritize about pet's shots, appointments, and preferred products. We made a banner at the top of the application with this info, 
            with a specialized feed of articles from brands, blogs, and their vet. 
            <br /><br />
            <strong>Outcomes and Lessons:</strong>
            <br />
            <br />
            Making an accessible product is a strenuous, but neccessary task when you take into account demographics like: Baby Boomers, Millenials, Gen X, Y, Z, and everyone in between; as well as differently abled poplations such as: visual, cognitive, and motor functions. 
            It is a task I strive to keep on the forefront, because my job as a UI/UX professional is to make the web not only accessible for <strong>ALL,</strong> but easy and intuitive for <strong>ALL.</strong> 
</AboutDesc>
        </Hero>
      </Content1>

      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />

      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.green} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Content2 speed={0.4} offset={3}>
        <Inner>
          <AboutHero>
            
            <AboutSub>

            </AboutSub>
          </AboutHero>
        </Inner>
      </Content2>
      <Divider fill="#23262b" speed={0.2} offset={4}>
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
        <Footer>
          
          <a href="https://www.prideiscalifornia.com"><img src={homeicon} width="50px" height="50px" alt="bob"></img></a>.
        </Footer>
      </Content>
      <Divider speed={0.2} offset={4}>
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
    </Parallax>
  </React.Fragment>
);

export default CtaStudy;
