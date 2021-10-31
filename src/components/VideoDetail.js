import React from 'react'; 
import {Paper,Typography} from '@material-ui/core';

const VideoDetail = ({videos}) =>{
  if (!videos) return <div><h2> Video Loading.....</h2></div>
  console.log(videos.id.videoId);
  const videosrc = `https://www.youtube.com/embed/${videos.id.videoId}`;
  return(
      <React.Fragment>
        <Paper elevation={6} style={{height:'70%'}}>
          <iframe frameBorder='0' height='100%' width='100%' title="Video Player" src={videosrc} />
        </Paper>
        <Paper elevation={6} style={{padding:'15px'}}>
          <Typography variant="h4">{videos.snippet.title} - {videos.snippet.channelTitle}</Typography>
          <Typography variant="Subtitle1"></Typography>
          <Typography variant="Subtitle2">{videos.snippet.description}</Typography>
          
        </Paper>
      </React.Fragment>
  );
}
export default  VideoDetail;