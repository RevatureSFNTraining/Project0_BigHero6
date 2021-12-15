import { LightningElement, api} from 'lwc';

export default class App extends LightningElement {
    @api directory = 'home';

    homeActive='active';
    aboutActive='';
    shopActive='';

    changeDir(e){
        switch(e.target.value){
            case 'Home':
                this.homeActive='active';
                this.aboutActive='';
                this.shopActive='';

                this.directory = 'home';
                break;
            case 'About':
                this.homeActive='';
                this.aboutActive='active';
                this.shopActive='';

                this.directory = 'about';
                break;
            case 'Shop':
                this.homeActive='';
                this.aboutActive='';
                this.shopActive='active';

                this.directory = 'shop';
                break;
        }

        this.dispatchEvent(new CustomEvent('changedir', {detail: this.directory}));
    }
}
