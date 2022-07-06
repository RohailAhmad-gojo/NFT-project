import React from "react";
import "./Mission.css";
import Grid from "@material-ui/core/Grid";
const imageData = [
  {
    imageSrc: "./assets/head2.png",
  },
  {
    imageSrc: "./assets/head3.png",
  },
  {
    imageSrc: "./assets/head4.png",
  },
  {
    imageSrc: "./assets/head.png",
  },
];
function Mission() {
  return (
    <div id="mission">
    <div className="first_root">
      
      <Grid container justifyContent="space-evenly">
    <Grid item={9} xs={10}>
    <section className="qqqq">

      <Grid item lg={8} xs={11}>
              <div className="content">
               <h1> GO ON  MISSIONS</h1>
                
                <p className="para">
                <div data-aos="fade-up"
                    data-aos-duration="3000"
     data-aos-anchor-placement="top-bottom">
                Welcome to the Doja Dam, where you can le
                the Dam like never before. You'll be able
                 exotic missions where the Beaver and/or
                 their way there. Once they return, their
                 with tons of $WERK. This $WERK will play
                 Doja Dam Ecosystem; without $WERK, your
                 fantastic rewards that $WERK helps you
                 much to explain via this page, so click
                 work-up and breakdown of our $WERK tokenomics.
                </div>

                </p>
                </div>
              </Grid>
        <Grid container justifyContent="space-evenly">
          <Grid item >
            {/* NESTED GRID */}
            <Grid container justifyContent="space-evenly">
              <Grid item lg={7}>
                {/* Image nested items  */}
                <Grid container justifyContent="space-between">
                  {imageData.map((e) => {
                    return (
                      
                      <Grid item lg={5}>
                        <div className="box">
                          <span className="span_border"></span>
                          <span className="span_border"></span>
                          <span className="span_border"></span>
                          <span className="span_border"></span>
                          <img
                            src={e.imageSrc}
                            className="char_img"
                            alt=""
                            srcset=""
                          />
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </section>

        </Grid>
    </Grid>
    </div>
    </div>
    
  );
}
export default Mission;