import React from 'react';
import './footer.css';
import Grid from "@material-ui/core/Grid";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Footer() {
  return (
    <div>
        <section className="bg-container">
        <Grid container justify-content="space-evenly" className="footer">
            <Grid item xs={12}>
                <div className='baked'>
                <h2>GECKO GANG</h2>
                </div>
                <div className='baked-1' >
                <Link activeClass="active"

to="about"
spy={true}
smooth={true}
hashSpy={true}
offset={50}
duration={500}
delay={100}
isDynamic={true}
ignoreCancelEvents={false}
spyThrottle={500}
>
ABOUT
</Link>
<Link activeClass="active"

    to="nfts"
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
  NFTS
</Link>
<Link activeClass="active"

    to="roadmap"
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
  ROADMAP
</Link>


                <Link activeClass="active"
    to="team"
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
  TEAM
</Link>
<Link activeClass="active"

    to="mission"
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
  MISSION
</Link>




<Link activeClass="active"

    to="community"
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={50}
    duration={500}
    delay={100}
    isDynamic={true}
    ignoreCancelEvents={false}
    spyThrottle={500}
>
  COMMUNITY
</Link>


                   
   
                </div>
                <div className='based-2'>
                    <h1> © 2022 GECKO GANG.</h1>
                    <TwitterIcon  className='twitter-icon'/>
                    <FacebookIcon className='twitter-icon' />
                </div>
            </Grid>
        </Grid>
        </section>
    </div>
  )
}

export default Footer