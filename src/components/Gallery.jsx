/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import babelbark1 from '../pages/babelbark.jpg';
import babelbark2 from '../pages/babelbark2.jpg';
import babelbark3 from '../pages/babelbark3.jpg';
import babelbark4 from '../pages/babelbark4.jpg';

const Wrapper = styled.a`
  ${tw(' relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  width: 100%;
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
${tw(' relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
width: 75px;
height 75px;

`
const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Gallery = ({ title, link, children, bg }) => (
  <div style={{display: 'flex', flexDirection: 'inline'}}>
<div class="perfundo">
  <a class="perfundo__link" href="#perfundo-img1">
    <img src={babelbark1} style={{height: '200px', width: '200px', margin: '2vw'}} alt="Demo image" />
  </a>
  <div id="perfundo-img1" class="perfundo__overlay fadeIn">
    <figure class="perfundo__content perfundo__figure">
      <img src={babelbark1} alt="Demo image" />
      <div class="perfundo__image" style={{width: '800px', paddingTop: '66.25%', backgroundImage: 'url(/static/babelbark-f693e09e9a4ff1bca8241f1a57e9209b.jpg)'}} ></div>
    </figure>
    <a href="#perfundo-untarget" class="perfundo__close perfundo__control">Close</a>
    <a class="perfundo__next perfundo__control" href="#perfundo-img2">Next</a>
  </div>
</div>

<div class="perfundo">
  <a class="perfundo__link" href="#perfundo-img2">
    <img style={{height: '200px', width: '200px', margin: '2vw'}} src={babelbark2} alt="Demo image" />
  </a>
  <div id="perfundo-img2" class="perfundo__overlay fadeIn">
    <figure class="perfundo__content perfundo__figure">
      <img src={babelbark2} alt="Demo image" />
      <div class="perfundo__image" style={{ width: '800px', paddingTop: '66.25%', backgroundImage: 'url(/static/babelbark2-0d89d68cb32e5effb5a7f39dc76fe9f1.jpg)'}}></div>
    </figure>
    <a href="#perfundo-untarget" class="perfundo__close perfundo__control">Close</a>
    <a class="perfundo__next perfundo__control" href="#perfundo-img3">Next</a>
    <a class="perfundo__prev perfundo__control" href="#perfundo-img1">Prev</a>
  </div>
</div>

<div class="perfundo">
  <a class="perfundo__link" href="#perfundo-img3">
    <img style={{height: '200px', width: '200px', margin: '2vw'}} src={babelbark3} alt="Demo image" />
  </a>
  <div id="perfundo-img3" class="perfundo__overlay fadeIn">
    <figure class="perfundo__content perfundo__figure">
      <img src={babelbark3} alt="Demo image" />
      <div class="perfundo__image" style={{ width: '800px', paddingTop: '66.25%', backgroundImage: 'url(/static/babelbark3-55dee05937e038da3d31db7dffc6e1d5.jpg)'}}></div>
    </figure>
    <a href="#perfundo-untarget" class="perfundo__close perfundo__control">Close</a>
    <a class="perfundo__next perfundo__control" href="#perfundo-img1">Next</a>
    <a class="perfundo__prev perfundo__control" href="#perfundo-img2">Prev</a>
  </div>
</div>

<div class="perfundo">
  <a class="perfundo__link" href="#perfundo-img4">
    <img style={{height: '200px', width: '200px', margin: '2vw'}} src={babelbark4} alt="Demo image" />
  </a>
  <div id="perfundo-img4" class="perfundo__overlay fadeIn">
    <figure class="perfundo__content perfundo__figure">
      <img src={babelbark4} alt="Demo image" />
      <div class="perfundo__image" style={{ width: '800px', paddingTop: '66.25%', backgroundImage: 'url(/static/babelbark4-99cdf14cec8083639a01763206ea0370.jpg)'}}></div>
    </figure>
    <a href="#perfundo-untarget" class="perfundo__close perfundo__control">Close</a>
    <a class="perfundo__prev perfundo__control" href="#perfundo-img3">Prev</a>
  </div>
</div>

  </div>
);

export default Gallery;
