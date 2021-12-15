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
        //fetch(API_FETCH)
       // .then(res => res.json())
       // .then(data => console.log(data))
       // .catch(error => {
      //      console.error(`Error: ${error}`);
       // });
       
   
       // fetch example using async/await
        let fetchWeather = await fetch(API_FETCH);
        let parsedRes = await fetchWeather.json();
        this.numArray = parsedRes.length;
        parsedRes.forEach(obj => {
           Object.entries(obj).forEach(([key, value]) => {
               console.log(`${key} ${value}`);
           });
           console.log('-------------------');
       });

        this.users =  parsedRes;
        console.log(this.numArray);
        //this.dupeCard(this.numArray);

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


