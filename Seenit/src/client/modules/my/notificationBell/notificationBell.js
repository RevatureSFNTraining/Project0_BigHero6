import { LightningElement, track } from 'lwc';
export default class NotificationBell extends LightningElement {
    @track hasNotification = true;
    // @track bellSwitch = {
    //     empty_path: '../../../resources/bell-ring-empty.png',
    //     filled_path: '../../../resources/bell-ring-filled.png'
    // };
    handleBellClick(e) {
        if (this.template.hasNotification) {
            this.template.hasNotification = false;
            this.template.querySelector('img').src =  '../../../resources/bell-ring-empty.png';
        } else {
            this.template.hasNotification = true;
            this.template.querySelector('img').src =  '../../../resources/bell-ring-filled.png';
        }
        console.log(this.template.hasNotification);
    }
}
