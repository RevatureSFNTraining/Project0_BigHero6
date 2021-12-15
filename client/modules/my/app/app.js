import { LightningElement } from 'lwc';

const user_id = '43556934';
const accesstoken = 'galdqw6axk2eu9us8hej10qudw0il5';
const apptoken = '9kw33h5pdw0ik1y2scu7dro2memiki';
const Url = 'https://id.twitch.tv/oauth2/authorize';


export default class App extends LightningElement {

    x = document.defaultView.addEventListener("resize", this.resizeObjs);
    keyword = "";
    broadcast_id = "";
    custom_user_id = "";
    resizeObjs(){
        console.log("window has been resized");
    }


    runCode(){
        var XML = new XMLHttpRequest();
        XML.open("GET", "https://api.twitch.tv/helix/streams/?user_id=deathblok");
        XML.setRequestHeader('Client-ID', "tzv7536kq7b8kt55wbtmm9lvmcizwa");
        XML.send();
        XML.onload = function () {
          console.log(XML.response);
        }
    }
    runCode2(){
        this.template.querySelector('.authorize_public').setAttribute('href', 'https://id.twitch.tv/oauth2/authorize?client_id=' + 'tzv7536kq7b8kt55wbtmm9lvmcizwa' + '&redirect_uri=' + encodeURIComponent('http://localhost') + '&response_type=token');
    }

  // gets the 10 top game categories
  getTopGames(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/games/top?first=10');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
      console.log(data);
    };
      
    xhr.onerror = function(error){
      console.log(error.target.status);
    };
      
    xhr.send();
    xhr.onload = function () {
      console.log(xhr.response);
    }
  }
  
    // gets channel that are live
    getSearchChannel(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.twitch.tv/helix/search/channels?query=' + this.keyword + '&first=5&live_only=false');
      xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
      xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
      xhr.onload = function(data){
        console.log(data);
      };
        
      xhr.onerror = function(error){
        console.log(error.target.status);
      };
        
      xhr.send();
      xhr.onload = function () {
        console.log(xhr.response);
      }
    }

    getSearchCategory(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.twitch.tv/helix/search/categories?query=' + this.keyword + '&first=5');
      xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
      xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
      xhr.onload = function(data){
        console.log(data);
      };
        
      xhr.onerror = function(error){
        console.log(error.target.status);
      };
        
      xhr.send();
      xhr.onload = function () {
        console.log(xhr.response);
      }
    }

    getFollowedStreams(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.twitch.tv/helix/streams/followed?user_id=' + this.custom_user_id);
      xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
      xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
      xhr.onload = function(data){
        console.log(data);
      };
        
      xhr.onerror = function(error){
        console.log(error.target.status);
      };
        
      xhr.send();
      xhr.onload = function () {
        console.log(xhr.response);
      }
    }

    getClips(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.twitch.tv/helix/clips?broadcaster_id=' + this.broadcast_id + '&first=5');
      xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
      xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
      xhr.onload = function(data){
        console.log(data);
      };
        
      xhr.onerror = function(error){
        console.log(error.target.status);
      };
        
      xhr.send();
      xhr.onload = function () {
        console.log(xhr.response);
      }
    }



    // keeps track of the search box input value
    handleSearchChange(event){
      this.keyword = event.target.value;
    }

    renderedCallback(){
      this.getTopGames();
    }
    
}

