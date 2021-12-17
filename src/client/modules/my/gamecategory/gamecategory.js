import { LightningElement } from 'lwc';
const user_id = '43556934';
const accesstoken = 'galdqw6axk2eu9us8hej10qudw0il5';
const apptoken = '9kw33h5pdw0ik1y2scu7dro2memiki';
const Url = 'https://id.twitch.tv/oauth2/authorize';

export default class App extends LightningElement {
    keyword;
    x;
  // gets the 10 top game categories
  getTopGames(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/games/top?first=5');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
      console.log(data);
    };
      
    xhr.onerror = function(error){
      console.log(error.target.status);
    };
      
    xhr.send();

    let game_cats = this.template.querySelector('.game_lists').children;
    let index_game = 0;
    xhr.onload = function () {
        let res = JSON.parse(xhr.response);
        Object.entries(res['data']).forEach((entry) => {
          const [key, value] = entry;
          this.x = value;

          let game = game_cats[index_game];
  
          let game_image_element = game.querySelector('.game_img .img_pic');
          let game_art_url = this.x['box_art_url'];
          let result = this.x['box_art_url'].indexOf('{');
          let box_url_str = game_art_url.slice(0,result);
          let size_str = '80x125.jpg';
          game_art_url = box_url_str + size_str;
          game_image_element.setAttribute("src", game_art_url);
          game_image_element.classList.remove("no-events");
          let game_title_element = game.querySelector('.game_title .game_text');
          game_title_element.textContent = this.x['name'];
          index_game += 1;
        });

      }    
  }

  renderedCallback(){
    this.getTopGames();
  }

  handleClick(){

    let index_game = 0;
    let game_cats = this.template.querySelector('.game_lists').children;
    let game = game_cats[0]; 
    let game_image_element = game.querySelector('.game_title .game_text');
    console.log(game_image_element);
    this.keyword = game_image_element.textContent;

    // gets channel that are live
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/search/channels?query=' + this.keyword + '&live_only=true&first=5');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
        console.log(data);
    };
    xhr.onerror = function(error){
        console.log(error.target.status);
    };   
    xhr.send();
    xhr.onload = function ()
     {
        let res = JSON.parse(xhr.response);
        console.log(res);
        Object.entries(res['data']).forEach((entry) => {
            const [key, value] = entry;
            this.x = value;
            game = game_cats[index_game];
            game_image_element = game.querySelector('.game_img .img_pic');
            game_image_element.setAttribute("src", this.x['thumbnail_url']);
            game_image_element.classList.add("broadcast_stream");
            let game_title_element = game.querySelector('.game_title .game_text');
            game_title_element.textContent = this.x['display_name'];
            game_image_element.classList.add("no-events");
            index_game += 1;
          });
      }
    
      let test =this.template.querySelector('.cate_title');
      console.log(test);
    }
    handleClick2(){

    let index_game = 0;
    let game_cats = this.template.querySelector('.game_lists').children;
    let game = game_cats[1]; 
    let game_image_element = game.querySelector('.game_title .game_text');
    console.log(game_image_element);
    this.keyword = game_image_element.textContent;

    // gets channel that are live
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/search/channels?query=' + this.keyword + '&live_only=true&first=5');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
    console.log(data);
    };
    xhr.onerror = function(error){
    console.log(error.target.status);
    };   
    xhr.send();
    xhr.onload = function ()
    {
    let res = JSON.parse(xhr.response);
    Object.entries(res['data']).forEach((entry) => {
    const [key, value] = entry;
    this.x = value;
    game = game_cats[index_game];
    console.log(game)
    game_image_element = game.querySelector('.game_img .img_pic');
    game_image_element.setAttribute("src", this.x['thumbnail_url']);
    game_image_element.classList.add("broadcast_stream");
    let game_title_element = game.querySelector('.game_title .game_text');
    game_title_element.textContent = this.x['display_name'];
    game_image_element.classList.add("no-events");
    index_game += 1;
    });
    }    
    }
    handleClick3(){

    let index_game = 0;
    let game_cats = this.template.querySelector('.game_lists').children;
    let game = game_cats[2]; 
    let game_image_element = game.querySelector('.game_title .game_text');
    console.log(game_image_element);
    this.keyword = game_image_element.textContent;

    // gets channel that are live
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/search/channels?query=' + this.keyword + '&live_only=true&first=5');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
    console.log(data);
    };
    xhr.onerror = function(error){
    console.log(error.target.status);
    };   
    xhr.send();
    xhr.onload = function ()
    {
    let res = JSON.parse(xhr.response);
    Object.entries(res['data']).forEach((entry) => {
    const [key, value] = entry;
    this.x = value;
    game = game_cats[index_game];
    game_image_element = game.querySelector('.game_img .img_pic');
    game_image_element.setAttribute("src", this.x['thumbnail_url']);
    game_image_element.classList.add("broadcast_stream");
    let game_title_element = game.querySelector('.game_title .game_text');
    game_title_element.textContent = this.x['display_name'];
    game_image_element.classList.add("no-events");
    index_game += 1;
    });
    }    
    }
    handleClick4(){

    let index_game = 0;
    let game_cats = this.template.querySelector('.game_lists').children;
    let game = game_cats[3]; 
    let game_image_element = game.querySelector('.game_title .game_text');
    console.log(game_image_element);
    this.keyword = game_image_element.textContent;

    // gets channel that are live
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/search/channels?query=' + this.keyword + '&live_only=true&first=5');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
    console.log(data);
    };
    xhr.onerror = function(error){
    console.log(error.target.status);
    };   
    xhr.send();
    xhr.onload = function ()
    {
    let res = JSON.parse(xhr.response);
    Object.entries(res['data']).forEach((entry) => {
        const [key, value] = entry;
        this.x = value;
        game = game_cats[index_game];
        game_image_element = game.querySelector('.game_img .img_pic');
        game_image_element.setAttribute("src", this.x['thumbnail_url']);
        game_image_element.classList.add("broadcast_stream");
        let game_title_element = game.querySelector('.game_title .game_text');
        game_title_element.textContent = this.x['display_name'];
        game_image_element.classList.add("no-events");
        index_game += 1;
    });
    }    
    }
    handleClick5(){

    let index_game = 0;
    let game_cats = this.template.querySelector('.game_lists').children;
    let game = game_cats[4]; 
    let game_image_element = game.querySelector('.game_title .game_text');
    console.log(game_image_element);
    this.keyword = game_image_element.textContent;

    // gets channel that are live
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.twitch.tv/helix/search/channels?query=' + this.keyword + '&live_only=true&first=5');
    xhr.setRequestHeader('Authorization',  "Bearer " + accesstoken);
    xhr.setRequestHeader('Client-Id', 'tzv7536kq7b8kt55wbtmm9lvmcizwa');    
    xhr.onload = function(data){
        console.log(data);
    };
    xhr.onerror = function(error){
        console.log(error.target.status);
    };   
    xhr.send();
    xhr.onload = function ()
        {
        let res = JSON.parse(xhr.response);
        Object.entries(res['data']).forEach((entry) => {
            const [key, value] = entry;
            this.x = value;
            game = game_cats[index_game];
            game_image_element = game.querySelector('.game_img .img_pic');
            game_image_element.setAttribute("src", this.x['thumbnail_url']);
            game_image_element.classList.add("broadcast_stream");
            let game_title_element = game.querySelector('.game_title .game_text');
            game_title_element.textContent = this.x['display_name'];
            game_image_element.classList.add("no-events");
            index_game += 1;
        });
        }    
    }
}





