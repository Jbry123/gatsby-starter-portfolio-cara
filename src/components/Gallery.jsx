/* global tw */
import React from 'react';

import '../../public/bootstrap.min.js';
import '../../public/bootstrap.min.css';



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
      <img style={{height: '50vh', width:'60vw', minWidth: '327px'}} class="d-block w-70" src="babelbark.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img style={{height: '50vh', width:'60vw', minWidth: '327px'}} class="d-block w-70" src="babelbark2.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img style={{height: '50vh', width:'60vw', minWidth: '327px'}} class="d-block w-70" src="babelbark3.jpg" alt="Third slide" />
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
