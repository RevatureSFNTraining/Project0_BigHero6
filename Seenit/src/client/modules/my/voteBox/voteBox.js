import { LightningElement, api } from 'lwc';
export default class VoteBox extends LightningElement {
    base_score = 1000;
    @api score = this.base_score;
    user_score = 0;
    upvoted = false;
    downvoted = false;
    upVote() {
        this.downvoted = false;
        this.upvoted = true;
        this.user_score = 1;
        this.score = this.base_score + this.user_score;
    }
    downVote () {
        this.downvoted = true;
        this.upvoted = false;
        this.user_score = -1;
        this.score = this.base_score + this.user_score;
    }
    resetVote () {
        this.downvoted = false;
        this.upvoted = false;
        this.user_score = 0;
        this.score = this.base_score + this.user_score;
    }
    handleUpVote(e) {
        if (this.upvoted) {
            this.resetVote();
            this.template.querySelector('#up').src =  '../../../resources/arrow-up-empty.png'
        } else {
            this.upVote();
            this.template.querySelector('#up').src =  '../../../resources/arrow-up-green.png';
            this.template.querySelector('#down').src =  '../../../resources/arrow-down-empty.png';
        }
        console.log(this.user_score);
    }
    handleDownVote(e) {
        if (this.downvoted) {
            this.resetVote();
            this.template.querySelector('#down').src =  '../../../resources/arrow-down-empty.png'
        } else {
            this.downVote();
            this.template.querySelector('#down').src =  '../../../resources/arrow-down-red.png';            
            this.template.querySelector('#up').src =  '../../../resources/arrow-up-empty.png';
        }
        console.log(this.user_score);
    }
}
