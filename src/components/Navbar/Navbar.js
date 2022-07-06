import React from 'react'
import "./Navbar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Button, Drawer, Grid } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from "react";
// import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Navbar() {
    const [isDrawerOpen ,setDeawerOpen] = useState(false)
  return (
    <div>
        <section className='navbarContainer'>
        <Grid container className='navBar' justifyContent='space-evenly'>
            <Grid item xs={11}> 
               <Grid container className='navbarContant' justifyContent='space-evenly'>
                  <Grid item className='navbarLogo'>
                    <img src='./Assets/logo2.png'/>
                  </Grid>
                  <Grid item className='navbarList' xs={10} md={7} lg={7}>
                    <ul>
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
<li><a href=''>About</a></li>

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
<li><a href=''>NFTs</a></li>
  
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
<li><a href=''>Roadmap</a></li>
  
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
<li><a href=''>Mission</a></li>
  
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
<li><a href=''>Team</a></li>
  
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
<li><a href=''>COMMUNITY</a></li>
  
</Link>

                    </ul>
                  </Grid>
                  <Grid item className='navbarIcons'>
                    <div className='navIcon'>
                    <a href=''><Button className='navBarBtn'><img src='./Assets/discord.svg'/>Discord</Button></a>
                    </div>
{/*=============================================sidebar===========================================  */}
                    <div className='DrawerIcon'>
                        <MenuIcon className='DrawerIcons' onClick={() => setDeawerOpen(true)}/>
                    </div>
                    <div>
                <Drawer className='sideBarDrawer' anchor='right' open={isDrawerOpen} onClose={() => setDeawerOpen(false)}>
                    <Box  p={2} width="250" textAlign="center" role="presentation">
                       <div className='sideBar'>
                       <ClearIcon className='closeIcon' onClick={() => setDeawerOpen(false)}/>
                       <div className='sideBarList'>
                          <ul className='sideBarLists'>
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
                                  <li><a href='' >ABOUT</a></li>

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
                                  <li><a href=''>NFTs</a></li>
                                    
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
                                  <li><a href=''>ROADMAP</a></li>
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
                                  <li><a href=''>MISSION</a></li>
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
                                  <li><a href=''>TEAM</a></li> 
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
                                  <li><a href=''>COMMUNITY</a></li>
                                    
                                  </Link>
                          </ul>
                       </div>
                       <div className='sideBarIcons'>
                           <li className='sideBarIcon'><a><img src='./Assets/discord.svg'/></a></li>
                           <li className='sideBarIcon'><a><img src='./Assets/twitter.png'/></a></li>
                           <li className='sideBarIcon'><a><img src='./Assets/instagram.svg'/></a></li>
                           <li className='sideBarIcon'><a><img src='./Assets/opensea.svg'/></a></li>
                       </div>
                       </div>
                    </Box>
                </Drawer>
                </div>
                  </Grid>
               </Grid>
            </Grid>
        </Grid>
        </section>
    </div>
  )
}

export default Navbar