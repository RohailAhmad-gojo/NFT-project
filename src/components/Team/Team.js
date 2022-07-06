import { Grid } from '@material-ui/core'
import React from 'react'
import "./Team.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useSpring, animated, config } from 'react-spring'



const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function Team() {
  const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 10, tension: 200, friction: 50} }))
  return (
    <div id="team">
        <Grid container justifyContent='space-evenly'>
            <Grid item xs={8} className="teamHeader">
                <h1>TEAM MEMBER</h1>
            </Grid>
        </Grid>
        <Grid container justifyContent='space-evenly'>
            <Grid item xs={12}>
               <Grid container justifyContent='space-evenly' className='ourTeam'>
                   <Grid item lg={3} md={6} xs={8} className="teamMember">
                   <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
                       <div className='teamMemberImg'>
                         <img src="./Assets/head.png"/>
                       </div>
                       <div className='teamMemberPara'>
                          <h2>HEADING</h2>
                          <h5>SOMETHING</h5>
                          <p>
                          In publishing and graphic design, Lorem ipsum is a placeholder relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                          </p>
                          <div className='teamMemberIcon'>
                           <TwitterIcon className='teamMemberIcons'/>
                           <InstagramIcon className='teamMemberIcons'/>  
                          </div>
                       </div>
      </animated.div>

                   </Grid>
                   <Grid item lg={3} md={6} xs={8} className="teamMember">
                   <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
                       <div className='teamMemberImg'>
                         <img src="./Assets/head2.png"/>
                       </div>
                       <div className='teamMemberPara'>
                          <h2>TEXT</h2>
                          <h5>TEXT TWO</h5>
                          <p>
                          In publishing and graphic design, Lorem ipsum is a placeholder relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                          </p>
                          <div className='teamMemberIcon'>
                           <TwitterIcon className='teamMemberIcons'/>
                           <InstagramIcon className='teamMemberIcons'/>  
                          </div>
                       </div>
      </animated.div>

                   </Grid>
                   <Grid item lg={3} md={6} xs={8} className="teamMember">
                   <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
                       <div className='teamMemberImg'>
                         <img src="./Assets/head3.png"/>
                       </div>
                       <div className='teamMemberPara'>
                          <h2>ADD TEXT</h2>
                          <h5>WORK</h5>
                          <p>
                          In publishing and graphic design, Lorem ipsum is a placeholder relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                          </p>
                          <div className='teamMemberIcon'>
                           <TwitterIcon className='teamMemberIcons'/>
                           <InstagramIcon className='teamMemberIcons'/>  
                          </div>
                       </div>
      </animated.div>

                   </Grid>
                   <Grid item lg={3} md={6} xs={8} className="teamMember">
                   <animated.div className='div-1'
      onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
      onMouseLeave={() => set({xys:[0,0,1]})}
      style={{
          transform: props.xys.interpolate(trans)
      }}
      >
                       <div className='teamMemberImg'>
                         <img src="./Assets/head4.png"/>
                       </div>
                       <div className='teamMemberPara'>
                          <h2>LROEM</h2>
                          <h5>GOOGLE</h5>
                          <p>
                          In publishing and graphic design, Lorem ipsum is a placeholder relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                          </p>
                          <div className='teamMemberIcon'>
                           <TwitterIcon className='teamMemberIcons'/>
                           <InstagramIcon className='teamMemberIcons'/>  
                          </div>
                       </div>
      </animated.div>

                   </Grid>
               </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Team