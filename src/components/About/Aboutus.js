import React from 'react'
import{ Grid }from '@material-ui/core'
// import Fade from 'react-reveal/Fade';

import './About-us.css'

function Aboutus() {
  return (
    <div id='about'>
      <Grid container justifyContent='space-evenly'>
      <Grid item xs={11} lg={10}>
     

        <div className='about-border'>
        
        <div className='about'>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <h1>ABOUT US</h1>
        <p>
        Doja Dam is a community bridge between Web 3 and cannabis culture.
         We will utilize our network between Web3, Cannabis, Fashion, and the Music industry to
          become a global brand. Baked Beavers are a collection of 8400 unique hand-drawn,
           meticulously crafted Beavers ready to make an impact on the stigma around NFTs and
            Marijuana use. You will find various nationalities and languages in the Dam, making
             it a place for everyone. Through streetwear merchandise, gamified tokenomics, and a 
             team full of pioneers, the sky is the limit for what we can bring to the Solana ecosystem.
        </p>
        <div className='about-end'>

        </div>
        </div>
        </div>
</div>
      
      </Grid>
      </Grid>
    </div>
  )
}

export default Aboutus