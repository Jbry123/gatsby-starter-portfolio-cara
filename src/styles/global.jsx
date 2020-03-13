/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "avenir";
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .babelbark1, .babelbark4 {
    width: 54vw;
    height: 54vh;
    min-width: 245px;
    max-width: 800px;
    border-radius: 20px;
  }


  .projectCard1{ 
   box-shadow: 2px -2px 10px #d4145a80, -2px 2px 10px #fbb03b, .5px .5px 1.5px #ffffff30 !important;
  }
  .babelbark2, .babelbark3{
    width: 60vw;
    height: 54vh;
    min-width: 245px;
    max-width: 800px;
    border-radius: 20px;
  }
  .babelbark1{
    width: 60vh;
    height: 25vh;

  }
  .babelbark2{
    width: 60vw;
    height: 25vh;

  }
  .babelbark3{
    width: 60vw;
    height: 25vh;

  }
  .babelbark4{
    width: 60vw;
    height: 25vh;

  }
  #new-tab-sidebar {display: none;}

  .css-6v7ury-AboutDesc, .bodyText {
    h2{
      font-size: 30px;
      text-shadow: 3px 0px black;
    }

    }


  @media only screen and (min-width: 2501px) and (max-width: 4000px) {
    .css-sd50ea-Subtitle, .css-142vdkh{
      img{
        height:45px;
        width:45px;
      }
      font-size: 45px;
      width: 1200px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: -156% !important;
    }
    .css-6v7ury-AboutDesc, .css-ugwx4i {
      h2{
        font-size: 40px !important;
      }
      p{
        font-size: 30px !important;
      }
      }

    }
  }

  @media only screen and (min-width: 1701px) and (max-width: 2500px) {
    .css-sd50ea-Subtitle, .css-142vdkh{
      img{
        height:45px;
        width:45px;
      }
      font-size: 45px;
      width: 1200px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 1556px !important;
    }
    .css-6v7ury-AboutDesc, .css-ugwx4i {
      h2{
        font-size: 40px !important;
      }
      p{
        font-size: 30px !important;
      }
      }

    }
  }
  @media only screen and (min-width: 1500px) and (max-width: 1720px) {
    .css-sd50ea-Subtitle, .css-142vdkh{
      img{
        height:45px;
        width:45px;
      }
      font-size: 45px;
      width: 1200px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 1340px !important;
    }
    .css-6v7ury-AboutDesc, .css-ugwx4i {
      h2{
        font-size: 40px !important;
      }
      p{
        font-size: 20px !important;
      }
      }

    }
  }
  @media only screen and (min-width: 1321px) and (max-width: 1499px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 2200px !important;
    }
    .css-6v7ury-AboutDesc, .css-ugwx4i {
      h2{
        font-size: 40px !important;
      }
      p {
        font-size: 20px !important;
      }
      }

    }
  }
  
  @media only screen and (min-width: 1201px) and (max-width: 1320px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 2900px !important;
    }
  }

  @media only screen and (min-width: 899px) and (max-width: 1200px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 2949px !important;
    }
  }
  @media only screen and (min-width: 520px) and (max-width: 898px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 2595px  !important;
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 510px) {
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh{
      .bodyText {
        h2{
          font-size: 30px !important;
        }
        p {
          font-size: 15px !important;
        }
      }
  

      width: 320px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 1797px !important;
    }
  }

  @media only screen and (min-width: 386px) and (max-width: 425px) {
    .bodyText {
      h2{
        font-size: 30px !important;
      }
      p {
        font-size: 15px !important;
      }
    }

    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh{

      width: 300px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 2657px  !important;
    }
  }

  @media only screen and (min-width: 366px) and (max-width: 385px) {
    .bodyText {
      h2{
        font-size: 30px !important;
      }
      p {
        font-size: 15px !important;
      }
    }
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle{
      font-size: 15px !important;
      width: 300px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 3027px  !important;
    }
  }

  @media only screen and (min-width: 331px) and (max-width: 365px) {
    .bodyText {
      h2{
        font-size: 30px !important;
      }
      p {
        font-size: 13px !important;
      }
    }
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle{
      font-size: 13px !important;
      width: 300px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 2522px !important;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 330px) {
    .bodyText {
      h2{
        font-size: 30px !important;
      }
      p {
        font-size: 13px !important;
      }
    }
    .css-ugwx4i {
 font-size: 12px !important;
    }
    
    .css-m6odof-Inner {
      margin-top: 245px;
    }
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh, .css-tzys1p{

      width: 285px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 2966px !important;
    }
  }


  body .footer {
    z-index: 1;
    --footer-background:#fff;
    display: grid;
    position: absolute;
    grid-area: footer;
    min-height: 12rem;
    bottom: -129px;
    width: 100vw;
  }
  body .footer .bubbles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background: var(--footer-background);
    -webkit-filter: url("#blob");
            filter: url("#blob");
  }
  body .footer .bubbles .bubble {
    position: absolute;
    left: var(--position, 50%);
    background: var(--footer-background);
    border-radius: 100%;
    -webkit-animation: bubble-size 4s ease-in infinite 3s, bubble-move 4s ease-in infinite 0s;
            animation: bubble-size 4s ease-in infinite 0s, bubble-move 4s ease-in infinite 0s;
    -webkit-transform: translate(-50%, 100%);
            transform: translate(-50%, 100%);
  }
  body .footer .content {
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 4rem;
    padding: 2rem;
    background: var(--footer-background);
  }
  body .footer .content a, body .footer .content p {
    color: #F5F7FA;
    text-decoration: none;
  }
  body .footer .content b {
    color: white;
  }
  body .footer .content p {
    margin: 0;
    font-size: .75rem;
  }
  body .footer .content > div {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
    -webkit-box-pack: center;
            justify-content: center;
  }
  body .footer .content > div > div {
    margin: 0.25rem 0;
  }
  body .footer .content > div > div > * {
    margin-right: .5rem;
  }
  body .footer .content > div .image {
    align-self: center;
    width: 4rem;
    height: 4rem;
    margin: 0.25rem 0;
    background-size: cover;
    background-position: center;
  }
  
  @-webkit-keyframes bubble-size {
    0%, 75% {
      width: 4rem;
      height: 4rem;
    }
    100% {
      width: 0rem;
      height: 0rem;
    }
  }
  
  @keyframes bubble-size {
    0%, 75% {
      width: 4rem;
      height: 4rem;
    }
    100% {
      width: 0rem;
      height: 0rem;
    }
  }
  @-webkit-keyframes bubble-move {
    0% {
      bottom: -4rem;
    }
    100% {
      bottom: 10rem;
    }
  }
  @keyframes bubble-move {
    0% {
      bottom: -4rem;
    }
    100% {
      bottom: 10rem;
    }
  }

  

.thumbnail {
  max-width: 40%;
}

.italic { font-style: italic; }
.small { font-size: 0.8em; }

/** LIGHTBOX MARKUP **/

.lightbox {
	/** Default lightbox to hidden */
	display: none;

	/** Position and style */
	position: absolute;
	z-index: 999;
	width: 91vw;
	height: 100vh;
	text-align: center;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
}

.lightbox img {
	/** Pad the lightbox image */
	max-width: 90vh;
	max-height: 80vh;
	margin-top: 2%;
}

.lightbox:target {
	/** Remove default browser outline */
	outline: none;

	/** Unhide lightbox **/
	display: block;
}
  

  .homeIcon img {
    @media only screen and (min-width: 800px) and (max-width: 6330px) {
      width: 125px !important;
      height: 125px !important;
    }
  }
`;
