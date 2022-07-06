import { Grid } from '@material-ui/core'
import './Nftcollection.css'
// import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade';

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'
//  import images from '../image'

function Nftcollection() {
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  
  
  
  return (
    <div id='nfts'>
      <Grid container justifyContent='space-evenly'>
      <Grid item xs={11} md={10} lg={10}>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
       <div className='nft'>
        <h1>NFT COLLECTION</h1>
        <p>
       

        The Baked Beavers Holders consist of 8400 one-of-a-kind, creative, and
         passionate community members. Acquiring one of these Beavers represents 
         your choice and compassion to support an initiative that goes beyond the 
         typical perspective of embracing a change. As a Baked Beaver holder, you will 
         become a part of a narrative meant to shed light on the injustice and contradictions 
         that flow throughout the Cannabis world. We've been called to innovation, humility, growth
         , education, unity, and the desire to be builders in the space for years to come. Help us be the
          change you want to see.
        
        </p>
        
       </div>
       </div>
      </Grid>
      </Grid>
    </div>
  )
}

export default Nftcollection;