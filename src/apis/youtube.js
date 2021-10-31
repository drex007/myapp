import axios from 'axios';

const KEY = "AIzaSyBiqZCUo8fseKqhnrSdHBe4qXic72zyhOE";
export const baseParams = {
  
      part:"snippet",
      maxResults: 5,
      key : "AIzaSyBiqZCUo8fseKqhnrSdHBe4qXic72zyhOE"
      
};

export default axios.create({
 baseUrl: "https://www.googleapis.com/youtube/v3/search?q=${seacrhTerm}",
   

});