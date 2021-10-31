import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem =({video, onvidselect}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ cursor:'pointer'}} onClick={()=>onvidselect(video)}> <br />
               <img style={{marginRight:'10px' , width:'100%'}} src={video.snippet.thumbnails.medium.url} alt="thumbnail" /> <br />
                <b>{video.snippet.title}</b>

               
            </Paper>
          

        </Grid>
        
    )
};

export default VideoItem ;