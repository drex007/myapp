import React from 'react';
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';

const VideoList =({videos, onvidselect}) =>{
    const listofvids = videos.map((video,id)=>
      <VideoItem  key ={id} video ={video} onvidselect = {onvidselect} />
    )
    return (
      <Grid >
         {listofvids}
      </Grid>
    );
    
}

export default VideoList;