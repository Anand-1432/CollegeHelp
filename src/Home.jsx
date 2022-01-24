import React from 'react';
import Navbar from './Navbar';
import homeimage from './images/home.png'
import team from './images/team.png';
import learn from './images/learn.png';
import background from './images/background.png';
import Group from "./images/Group 41.png";
import notes from "./images/class note icon.png";
import material from "./images/study material icon.png";
import udated from "./images/stay updated icon.png";

const Home = () =>{
    return(
        <>
            <Navbar/>

            <img src={background} alt="..." id="bgmig"/>

{/* middle/////////////////////////////////////////////////////////////////////// */}
<div className="container-fluid">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 content">
                <p id="p1">CollegeHelp Provides</p>
                <h1>Education</h1>
                <h1>Solutions</h1>
                <p id="p2">We are here to help you and working to make your study more easier and comfortable.</p>
                <div className="imgl"><img src={learn} alt="" id="learn"/></div>
                <div className="imgc">
                    <img src={team} alt="..."/>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 imgContainer">
                <img src={homeimage} alt="..." id="img"/>
            </div>
        </div>
    </div>
{/* middle/////////////////////////////////////////////////////////////////////////// */}

<div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <img src={Group} alt="..." id="img1"/>
            </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 content2">
               
                <div className="caption">
                    <p className="para1">Take Your</p>
                    <p className="para2">Academ<span style={{color: 'rgb(240, 198, 14)'}}>i</span>cs</p>
                    <p className="para1">To The Next Level</p>
                  </div> 
            
                <div className="jaadu">   
                    <div className="imgA"><img src={notes} alt="..."/></div>
                    <div className="con">
                      <p id="pA1">Class Notes</p>
                      <p id="pA2">Get exclusive notes written by students while sitting in classroom IITs nand NITs</p>
                    </div>
            
                    <div className="imgB"><img src={material} alt="..."/></div>
                    <div className="conB">
                      <p id="pB1">Study Materials</p>
                      <p id="pB2">Ace your exam with previous years papers set by your college professors.</p>
                    </div>
            
                    <div className="imgC"><img src={udated} alt="..."/></div>
                    <div className="conC">
                      <p id="pC1">Stay Updated</p>
                      <p id="pC2">be updated with all notifications of your college at one place.</p>
                    </div>
                </div>
            
            </div> 
        </div> 
    </div>

  <div className="learnMore"><img src={learn} alt="..."/></div>

    {/* <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --> */}
        </>
    );
}

export default Home;