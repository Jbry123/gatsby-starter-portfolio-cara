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
import Gallery from '../components/Gallery.jsx';
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
  line-height: 130%;

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
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  width: 500px;
  @media (max-width: 500px) {
    width: 350px;
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

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
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
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Welcome, I'm<br />Jonathan Bry!
            <br /> I excel at <mark style={{backgroundColor: '#F799C3'}}>UI/UX research</mark>,<br /> and <mark style={{backgroundColor: '#e8e8e8'}}>design</mark> on many levels!
          </BigTitle>
          <Subtitle>

          <Bullet className="bullet" src={rocket} alt="Website Development, freelance designer" />Multi-disciplined UI/UX professional, always learning!<br />

          <Bullet src={rocket} alt="marketing, interactive" />Targeted website and app development.<br />

          <Bullet src={rocket} alt="John Doe" />User-centric research and design.
      
          </Subtitle>
        </Hero>
      </Content>

      <DividerMiddle
        bg="linear-gradient(to right, #E8E8E8 0%, #F5B3C1 40%, #F799C3 90%)"
        speed={-0.4}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Babelbark - UI/UX contract"
              link="https://www.prideiscalifornia.com/project1/"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
            How can we optimize healthcare apps for all user ages, and what is most important?
            75% Mobile, 25% Website contract, focusing on accesibility and 
            </ProjectCard>

            <ProjectCard
              title="Graphic Design Portfolio"
              link="https://www.prideiscalifornia.com/project2"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
            CTA/sign up case study, what makes a person convert, more over, the right one?
            </ProjectCard>

            <ProjectCard
              title="Insanity.shop - Wild Personified."
              link="https://www.insanity.shop/project2"
              bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            >
            Custom desktop first site website targeting niche demographics, and grabbing from the client's style.
            </ProjectCard>

            <ProjectCard
              title="The Festival Voice"
              link="https://www.thefestivalvoice.com/"
              bg="linear-gradient(to right, #000047 0%, #009245 100%)"
            >
            Wordpress/Vue project, TFV is a blog for festivals and music in general.
            </ProjectCard>
            
          </ProjectsWrapper>
        </Inner>
      </Content>
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
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About Me</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              <strong>
              <br /><br />“Better to have a short life that is full of what you like doing than a long life spent in a miserable way. And after all, if you do really like what you’re doing, it doesn’t matter what it is—somebody is interested in everything—anything you can be interested in, you will find others who are...” - Alan Watts
              </strong>
            </AboutSub>
          </AboutHero>
          <AboutDesc>
          <br />
            
          <strong>At my core is design, through start up environments I developed a love for user research, and I am constantly learning to make apps more human centered!<br />
                  I'm a modern day Stoic with a love of collaboration, sports, and hackathons. Traveling designer/business owner by 30 is the goal, hopefully working remotely and creating dreams!
            I started out in E-Commerce, and quickly started getting involved with healthcare on multiple levels. I love business development, open source software, and I'm always looking for new technologies and avenues of learning.
            Agile work environments are king, working on one goal with two/three minds, especially at the start, then splitting into specialty work.
          </strong>
          </AboutDesc>
          <InnerCenter>
          </InnerCenter>
        </Inner>
      </Content>
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
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:jonathanbry18@gmail.com"><mark>Hi with an e-mail!</mark></a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/jonathanbry">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/postravedepression/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; Feel free to call or text me at 9167157867 💛🖤💛🖤
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

export default Index;
