/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw(' relative no-underline rounded-lg md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  min-width: 275px;
  padding-top: 8% !important;
  padding-bottom: 8% !important;
  padding-left: 5%;
  padding-right: 5%;
  &:hover {
    transform: translateY(-5px);
  }
  @media only screen 
  and (max-width : 5120px)
  and (min-width : 2480px) {
  /*  27 inch 4k IMAC Styles here */
  height: 30vh;
  width: 100%;
}
  @media only screen 
  and (max-width : 3120px) 
  and (min-width : 3080px) {
  /*  27 inch 4k IMAC Styles here */
  width: 100% !important;
}


`;

const Text = styled.div`
  ${tw('opacity-80 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
  color: #ffffff99;
  font-size: 1rem;
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
`;

const Title = styled.div`
  ${tw('text-white uppercase tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  @media only screen 
  and (max-width : 5120px)
  and (min-width : 4150px) {
    font-size: 5rem;
}

@media only screen 
and (max-width : 4149px)
and (min-width : 4000px) {
  font-size: 4rem;
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
  font-size: 1.2rem;
}

`;

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Text>{children}</Text>
    <Title>{title}</Title>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
};
