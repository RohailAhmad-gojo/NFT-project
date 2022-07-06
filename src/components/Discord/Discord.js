import { Grid } from '@material-ui/core'
import React from 'react'
import './Discord.css'

function Discord() {
  return (
    <div id='community'>

        <Grid>
        <Grid className='discordLink'>
            <a href=''>
            <div className='discord'>
                <h1>DISCORD</h1>
            </div>
            </a>
            <div className='discordImg'>
              <img src="./Assets/comm.png"/>
            </div>

           
        </Grid>
        </Grid>
    </div>
  )
}

export default Discord