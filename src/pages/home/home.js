import Btn from "./../../component/ui/button/button";
import Category from "./../../component/ui/category/category";

import profile from "./../../assets/images/profile.jpg";
// import background from "./../../assets/images/background.jpg";
import file from "./../../assets/resume/resume.pdf";

import cuaca from "./../../assets/images/cuaca.jpg";
import bloodcell from "./../../assets/images/blood.png";
import psu from "./../../assets/images/psu.jpg";

import basicWeb from "./../../assets/images/basicwp.jpg";
import kotlin from "./../../assets/images/basickotlin.jpg";
import fundamental from "./../../assets/images/fefundamental.jpg";
import basic from "./../../assets/images/febeginner.jpg";
import "./home.css";

const home = () => {
  return (
    <>
      <div className="jumbotron content-box">
        <div className="intro-box">
          <div className="profile-box" data-aos="fade-down">
            <img src={profile} alt="" />
          </div>
          <div>
            <h1 data-aos="fade-left" data-aos-delay="200">
              Hello, I am Jonathan Alphabert
            </h1>
            <p data-aos="fade-right" data-aos-delay="400">
              I am a junior website developer who is passionate about website technology. I started to learn website programming in 2017 until now. I also can work either individually or in a group.
            </p>

            <Btn cta={true} url="#myproject" delay={"900"} animation={"fade-up"}>
              See Project
            </Btn>
            <Btn cta={true} url={file} action="download" delay={"1200"} animation={"fade-up"}>
              Download Resume
            </Btn>
          </div>
        </div>
      </div>

      <div className="content-box project" id="myproject">
        <h1 className="title-content">Portfolio</h1>
        <p className="subtitle-content">Let's see some project that I have made.</p>
        <div className="project-list">
          <div className="project-img-box two-col" data-aos="zoom-in-right">
            <img className="project-img" src={bloodcell} alt="" />
          </div>
          <div className="project-info two-col" data-aos="zoom-out-left">
            <h2>Blood Cell Simulation</h2>
            <p>Website application built with ThreeJS. This website visualize and give small information about blood cell in human system.</p>
            <div className="category-list">
              <Category>Javascript</Category>
              <Category>ThreeJS</Category>
              <Category>WebGL</Category>
            </div>
            <Btn url="https://johnforjc.github.io/final-project-yolo/">See Website</Btn>
          </div>
        </div>
        <div className="project-list">
          <div className="project-img-box two-col" data-aos="zoom-in-left">
            <img className="project-img" src={cuaca} alt="" />
          </div>
          <div className="project-info two-col" data-aos="zoom-out-right">
            <h2>Cek Cuaca</h2>
            <p>Website application built with NPM, Javascript and using Open Weather API to fecth the weather on any location in Indonesia.</p>
            <div className="category-list">
              <Category>Javascript</Category>
              <Category>NPM</Category>
              <Category>API Usage</Category>
              <Category>Web Storage</Category>
            </div>
            <Btn url="https://johnforjc.github.io/final-project-yolo/">See Website</Btn>
          </div>
        </div>
        <div className="project-list">
          <div className="project-img-box two-col" data-aos="zoom-in-right">
            <img className="project-img" src={psu} alt="" />
          </div>
          <div className="project-info two-col" data-aos="zoom-out-left">
            <h2>E-PSU Sidoarjo</h2>
            <p>Website that built with Django Framework. This website for Sidoarjo goverment to digitalize the data that they have.</p>
            <div className="category-list">
              <Category>Django</Category>
              <Category>Bootstrap</Category>
            </div>
          </div>
        </div>
      </div>

      <div className="content-box certificate" id="myproject">
        <h1>Certificate</h1>
        <div className="certificate-list">
          <div className="cert-img-box two-col" data-aos="zoom-in">
            <img className="cert-img" src={kotlin} alt="" />
          </div>
          <div className="cert-info two-col">
            <h2>Memulai Pemrograman Dengan Kotlin</h2>
            <p>An online course that provided by Dicoding Indonesia. In this course, I learned how to code in Kotlin language.</p>
            <Btn url="https://www.dicoding.com/certificates/2RVZKV014XD5">See Certificate</Btn>
          </div>
        </div>
        <div className="certificate-list">
          <div className="cert-img-box two-col" data-aos="zoom-in">
            <img className="cert-img" src={basicWeb} alt="" />
          </div>
          <div className="cert-info two-col">
            <h2>Belajar Dasar Pemrograman Web</h2>
            <p>An online course that provided by Dicoding Indonesia. In this course, I learned basic HTML, CSS and Javascript.</p>
            <Btn url="https://www.dicoding.com/certificates/2VX32KN2QPYQ">See Certificate</Btn>
          </div>
        </div>
        <div className="certificate-list">
          <div className="cert-img-box two-col" data-aos="zoom-in">
            <img className="cert-img" src={basic} alt="" />
          </div>
          <div className="cert-info two-col">
            <h2>Belajar Membuat Front-End Web untuk Pemula</h2>
            <p>An online course that provided by Dicoding Indonesia. In this course, I learned more advance Javascript like webStorage.</p>
            <Btn url="https://www.dicoding.com/certificates/QLZ91381EP5D">See Certificate</Btn>
          </div>
        </div>
        <div className="certificate-list">
          <div className="cert-img-box two-col" data-aos="zoom-in">
            <img className="cert-img" src={fundamental} alt="" />
          </div>
          <div className="cert-info two-col">
            <h2>Belajar Fundamental Front-End Web Development</h2>
            <p>An online course that provided by Dicoding Indonesia. In this course, I learned more advance Javascript like ES 6, NPM, and Async Javascript.</p>
            <Btn url="https://www.dicoding.com/certificates/L4PQ38O2VPO1">See Certificate</Btn>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
