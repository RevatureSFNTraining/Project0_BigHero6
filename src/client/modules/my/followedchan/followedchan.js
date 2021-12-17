import { LightningElement} from 'lwc';
   
const API_FETCH = 'https://retoolapi.dev/cpwBsi/followedlist';

export default class FollowedChan extends LightningElement {

    users;
    numArray;
    hasRendered = false;


    renderedCallback(){
        if (this.hasRendered){
            
        }
        else{
            this.hasRendered = true;
            this.getUsers();
           
        }
    }

    async getUsers(){

        let fetchWeather = await fetch(API_FETCH);
        let parsedRes = await fetchWeather.json();
        this.numArray = parsedRes.length;
        this.users =  parsedRes;

   }
   dupeCard(num) {
    var myDiv = this.template.querySelector('.bob');
    var cloneDiv;
    cloneDiv = myDiv.cloneNode(true);
        for (let i = 0; i < num; i++){    
            myDiv.appendChild(cloneDiv);
        }
    }
    

    
}


