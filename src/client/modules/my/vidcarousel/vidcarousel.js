import { api, LightningElement } from 'lwc';

export default class CarouselImages extends LightningElement {

    @api width 
    @api height = 'auto'
    @api files = [
        {
            title: 'Streamer1',
            url: 'https://player.twitch.tv/?channel=disguisedtoast&parent=localhost&autoplay=false&muted=true',
            url2 :'https://www.twitch.tv/embed/disguisedtoast/chat?parent=localhost'
        },
        {
            title: 'Streamer2',
            url: 'https://player.twitch.tv/?channel=Xqcow&parent=localhost&autoplay=false&muted=true',
            url2 :'https://www.twitch.tv/embed/Xqcow/chat?parent=localhost'
        },

    ]

    active = 0

    get indicators(){
        return Array.from(Array(this.files.length).keys()).map(index => {
            return {
                index,
                key: `panel_${index}_indicator`,
                classes: `panel_${index}_indicator slds-carousel__indicator`
            }
        })
    }
    get value(){
        return this.data
    }
    get max(){ return this.files.length }

    get count(){
        return `${this.active+1} of ${this.max}`
    }
    get button_next_disabled(){
        return (this.active + 1) === this.max
    }
    get button_prev_disabled(){
        return this.active=== 0
    }

    get container(){ return this.template.querySelector('.slds-carousel__panels') }
    get panels(){ return this.template.querySelectorAll('.slds-carousel__panel') }
    get selects(){ return this.template.querySelectorAll('select') }

    previous(){
        
        if(this.active - 1 < 0){ return console.log('at start') }
        
        this.active--

        this.switchPanels()
    }

    switchPanels(){

        let index = 0;
        this.panels.forEach(el => {
        
            if(el.classList.contains(`panel_${this.active}`)){
                el.classList.add('active');
                el.classList.remove('hidden');
                console.log(el.querySelector('iframe'));
                el.querySelector('iframe').setAttribute("src",this.files[index]['url']);
                el.querySelector('iframe').setAttribute("height",300);
                el.querySelector('iframe').setAttribute("width",700);
                el.querySelector('iframe').setAttribute("frameborder",0);          
            }
            else {
                el.classList.remove('active');
                el.classList.add('hidden');
                el.querySelector('iframe').setAttribute("src","");
                el.querySelector('iframe').setAttribute("height",0);
                el.querySelector('iframe').setAttribute("width",0);
                el.querySelector('iframe').setAttribute("frameborder",0);    
            }
            index += 1;
        })
    }
    
    next(){
        if(this.active + 1 === this.max){ 

            const detail = this.getDetails()
            console.log('this.getDetails()')
            console.log(detail)
            return this.dispatchEvent(new CustomEvent('save', { detail }))
        }
        this.active++
        this.switchPanels()
    }
    activate(el){ 
        el.classList.add('active')
        el.classList.remove('hidden')
    }
    deactivate(el){ 
        el.classList.remove('active')
        el.classList.add('hidden')
    }
    

    getDetails(){
        return Array.from(this.selects).map(el => {
            return {
                documentId: el.name,
                category: el.value,
            }
        })
    }

    renderedCallback(){

        if(this.init){ return console.log('has ran')}
        
        this.files.map((file, index) => {

            const div = document.createElement('div')
            div.classList.add(`slds-carousel__panel`, `panel_${index}`)

            if(index === 0){
                this.activate(div)
            }
            else {
                this.deactivate(div)
            }
            
            let iframe = document.createElement('iframe')
            iframe.src = file.url
            iframe.frameBorder = "0";
            iframe.allowFullscreen="true";
            iframe.scrolling="no";
            iframe.height="300";
            iframe.width="700";
            iframe.classList.add("video_player");
            div.appendChild( iframe )


            iframe = document.createElement('iframe')
            iframe.src = file.url2
            iframe.height="300";
            iframe.width="200";
            iframe.classList.add("video_chat");
            div.appendChild( iframe )
            this.container.appendChild( div )
        })

        this.init = true
    }
}