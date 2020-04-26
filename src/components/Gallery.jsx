/* global tw */
import React from 'react';
import Babelbark from '../images/babelbark.jpg';
import Babelbark2 from '../images/babelbark2.jpg';
import Babelbark3 from '../images/babelbark3.jpg';



const Gallery = () => (

  <div className="gallery-container">


<div style={{height: '50vh', width:'60vw', minWidth: '327px'}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: '50vh', width:'60vw', borderRadius: '20px', minWidth: '327px'}}>
    <div class="carousel-item active">
      <img style={{height: '50vh', width:'60vw', minWidth: '327px'}} class="d-block w-70" src={Babelbark} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img style={{height: '50vh', width:'60vw', minWidth: '327px'}} class="d-block w-70" src={Babelbark2} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img style={{height: '50vh', width:'60vw', minWidth: '327px'}} class="d-block w-70" src={Babelbark3} alt="Third slide" />
    </div>
  </div>
  <a  class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


</div>

);

export default Gallery;
