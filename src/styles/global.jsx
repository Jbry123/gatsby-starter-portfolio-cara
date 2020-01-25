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
  #new-tab-sidebar {display: none;}

  .css-6v7ury-AboutDesc {
    h2{
      font-size: 40px !important;
      text-shadow: 3px 0px black;
    }
    p{font-size: 12.5px;}
    }


  @media only screen and (min-width: 1701px) and (max-width: 4000px) {
    .css-sd50ea-Subtitle, .css-142vdkh, .subtitles{
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
        font-size: 50px !important;
      }
      p{
        font-size: 40px !important;
      }
      }

    }
  }

  @media only screen and (min-width: 1701px) and (max-width: 2500px) {
    .css-sd50ea-Subtitle, .css-142vdkh, .subtitles{
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
        font-size: 50px !important;
      }
      p{
        font-size: 30px !important;
      }
      }

    }
  }
  @media only screen and (min-width: 1500px) and (max-width: 1720px) {
    .css-sd50ea-Subtitle, .css-142vdkh, .subtitles{
      img{
        height:45px;
        width:45px;
      }
      font-size: 45px;
      width: 1200px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: -36% !important;
    }
    .css-6v7ury-AboutDesc, .css-ugwx4i {
      h2{
        font-size: 50px !important;
      }
      p{
        font-size: 20px !important;
      }
      }

    }
  }
  @media only screen and (min-width: 1321px) and (max-width: 1499px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 800px !important;
    }
    .css-6v7ury-AboutDesc, .css-ugwx4i {
      h2{
        font-size: 50px !important;
      }
      }

    }
  }
  
  @media only screen and (min-width: 1201px) and (max-width: 1320px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 900px !important;
    }
  }

  @media only screen and (min-width: 899px) and (max-width: 1200px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: -49px !important;
    }
  }
  @media only screen and (min-width: 520px) and (max-width: 898px) {
    .css-11ptdj9-BigTitle, .css-142vdkh {
      margin-top: 498px !important;
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 510px) {
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh, .subtitles{

      width: 320px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 1797px !important;
    }
  }

  @media only screen and (min-width: 386px) and (max-width: 425px) {
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh, .subtitles{

      width: 300px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 2173px !important;
    }
  }

  @media only screen and (min-width: 366px) and (max-width: 385px) {
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh, .subtitles{

      width: 300px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 2522px !important;
    }
  }

  @media only screen and (min-width: 331px) and (max-width: 365px) {
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh, .subtitles{

      width: 300px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 2304px !important;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 330px) {
    
    .css-ugwx4i, .subtitles {
 font-size: 12px !important;
    }
    
    .css-m6odof-Inner {
      margin-top: 245px;
    }
    .css-sd50ea-Subtitle, .css-5yc6i9-Subtitle, .css-142vdkh, .css-tzys1p, .subtitles{

      width: 285px !important;
    }
    .css-11ptdj9-BigTitle, .css-142vdkh {
      
      margin-top: 1366px !important;
    }
  }
`;
