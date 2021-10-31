import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import {Grid} from '@material-ui/core';
import youtube,{baseParams} from './apis/youtube';
import {SearchBar,VideoDetail,VideoList} from './components';

 
class App extends React.Component {
  state = {
        videos: [],
        setvideo: null,
      }
  componentDidMount() {
    this.handleSubmit('generate passive income')
  }
  onvidselect =(video) =>{
       this.setState({setvideo: video});
    }
    handleSubmit = async(searchTerm) =>  {
      
     
      const response = await   axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}`, {  
        params: { 
      part:"snippet",
      maxResults: 5,
      key : "AIzaSyBiqZCUo8fseKqhnrSdHBe4qXic72zyhOE"
      
 }
}
); console.log(response);

    this.setState({videos:response.data.items, setvideo: response.data.items[0]});
 
    }
     render() {
       const { setvideo,videos} = this.state;
         return ( 
             <Grid   container spacing ={2}  >
                
                    
                      <Grid item xs ={12}>
                          <SearchBar  onFormSubmit ={this.handleSubmit} />
                      </Grid>
                      <Grid item xs ={7}>
                        <VideoDetail videos = {setvideo}/>
                      </Grid>
                      <Grid item xs ={5}>
                          <VideoList videos ={videos} onvidselect={this.onvidselect} />
                      </Grid>
                    
                
                  
            </Grid>
         )
     }
 }
 
 export default  App;
 

