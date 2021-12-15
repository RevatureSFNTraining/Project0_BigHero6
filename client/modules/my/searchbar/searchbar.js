import { LightningElement } from 'lwc';
export default class SearchBar extends LightningElement {
    queryTerm;
    inputFieldValue = "";
    handleKeyUp(evt){
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey){
            this.queryTerm = evt.target.value;
        }
    } 

    handleInputChange(evt){
        this.inputFieldValue = evt.target.value;
    }


}