/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from './JonathanBry.png';
import '../styles/global';
import rocket from './giphy.gif';
import './JonathanBryResume.pdf';
import Footer from '../components/Footer';
import homeicon from './homeicon.png';
// import $ from 'jquery';

//JQUERY EDITS
// $( 'document' ).ready(function() {
  // $(window).resize(function(){

  //   if ($(window).width() <= 1000) {  
  
  //     $('.css-6v7ury-AboutDesc').attr('style','color: red !important');
  
  //   }     
  
  // });
  
// });



//JQUERY EDITS END


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
  margin-top: 400px;
  line-height: 150%;

  @media (min-width: 280px) and (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (min-width: 1201px) and (max-width: 5000px) {
    font-size: 4rem;
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
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 105px;
  }
`;

// const Button1= styled.button`
// ${tw('font-sans w-full justify-center text-white xxl:w-3/4')};
// height: 125px;
// background: linear-gradient(to right, #D4145A 0%, #FBB03B 100%);
// font-size: 20px;
// align-content: center;
// justify-content: center;
// display: inline-flex;
// flex-direction: inherent;
// margin: 0px;
// border-radius: 15px;
// border: none;

// `;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2),
              -1px 1px 0px rgba(0, 0, 0, 1);
  width: 500px;
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
  @media (min-width: 801px) and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (min-width: 1201px) and (max-width: 5000px) {
    font-size: 2.7rem;
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
  text-align: left;
`;

const AboutDesc = styled.p`
  ${tw('text-white text-lg md:text-xl lg:text-2xl font-sans')};
  text-align: left;
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer2 = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const CtaStudy1 = () => (
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
        <SVG icon="upDown" className={hidden} width={24} fill={'#F799C3'} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={'#F799C3'} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors['grey-darkest']} left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill={'#FBD0E3'} left="-5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={'#F9B4D3'} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={'#F799C3'} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={'#F799C3'} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
      <Hero>
          <BigTitle>
            CTA Sign Up CRO Strategies
          </BigTitle>
          <Title>
            <strong>3 Things To Focus On When Optimizing Your CTA UX, To Boost Conversions.</strong> <br />
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
            For this case study, I focused on the overall CTAs in landing page sign ups.
            <br />
            <br />
            This is an overview of certain trends and takeaways for CTA conversion optimization , lets go over my process of: researching a targeted demographic, looking at well curated copy examples and deciding on
             a voice, and tying that into the whole Call to Action.


            <br />
            <br />
            <strong>1. Focus On Researching Demographics</strong>
            <br />
            <br />
            You probably have some sort of idea as to what your target demographics are, now you need to realize where they are at in their buying journey, what info will help convert, and what's valuable to them in order for them
             to give you their email. 
             <br />
             <br />
             a. Segment your data based off of the traffic that brought the user to the site
             <br />
             b. Establish key parts of the sign up design, offering, and copy that was responsible for the largest source
             <br />
             c. Connect the solution you're offering to a customer model, based off of: Age, Traffic Type, Needs, and Career.
             <br />
             d. Extract the elements of what was working, the needs you solved, the design, the copy, any discounts, and the overall ad delivery.
            <br /><br />
            <strong>2. CTA Design</strong>
            <br />
            <br />
            If you're designing a new concept/style for your sign up landing page, you can tie the information I discussed above, in with reviewing examples of either competition or other websites with interesting and functional designs. Use these design concepts to 
            formulate something that you think will hold true to the message, branding, and information it's working with.
            <br />
            Using a brand style guide? Easy, use the data of past campaigns, and evaluate whether it was a good demographic to target, the right design, the right ad spend and ad hosting source. A good ad delivery combines multimedia value propositions, and industry specific, sleek design.
            <br /><br />
            <strong>3. Tying It All Together With Stats, and Tricks:</strong>
            <br />
            <br />
            a. People will leave your site even if they have the intention of considering you. Think of your website like a paid ad, especially if you're paying for digital media ads!
             If you set up facebook pixel, or google analytics, you can target users with information linked to their google or facebook accounts, Hubspot did a case study with more than 
             300,000 ads, arranged them into categories, and "Smart CTAs" converted at 3.7%, compared to "Multivariate CTAs" and "Default CTAs" just above 1%!
            Smart CTA's are ones that use retargeting to serve up any changes to your website or ad you can imagine. To increase your conversion rates, especially for email and website
             automated targeting, look at how <a href="https://blog.hubspot.com/marketing/personalized-calls-to-action-convert-better-data"><mark style={{background: '#F799C3'}}>personalized calls to action convert better data</mark></a>
            <br />
            b. It's all about the product, the value you're giving someone in exchange for the trust of not spamming you(some are too lazy to even unsubscribe, it's a weird purgatory!), 
            make sure your offering constitutes you getting a well qualified lead, and the customer getting free or highly discounted value.
            <br />
            c. If you're experiencing any bounce rates above 70%, i would take an objective look at your website, and try to get a person who 
            hasnt seen your website before, to test it in person and ask them to find things, if they cant find your: blog, pricing, some products, 
            a story about the company, in a quick and succinct way, you've lost users because of that indefinitely.
            <br /><br />
           </AboutDesc>
        </Hero>
      </Content>

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
        <a href="https://www.prideiscalifornia.com"><img src={homeicon} width="50px" height="50px" alt="Click to go to home page and learn about my website development freelance agency"></img></a>
        <Footer>
          
          
        </Footer>
      </Content>
      <Divider speed={0.2} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey']} left="80%" top="70%" />
      </Divider>
        <Footer className="test1"></Footer>
    </Parallax>
  </React.Fragment>
);

export default CtaStudy1;
