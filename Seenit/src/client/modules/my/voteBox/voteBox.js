import { LightningElement, api } from 'lwc';
export default class VoteBox extends LightningElement {
    @api score;
    score = 1000;
}
