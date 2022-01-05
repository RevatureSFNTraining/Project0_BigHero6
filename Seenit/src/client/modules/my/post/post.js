import { LightningElement, api } from 'lwc';
export default class Post extends LightningElement {
    // {community} by {author} on {date}.</span></div>
    //         <div class="content"><span class="title">{Title}</span><br>{preview}
    //@api post_score = 1010;
    @api community = 'Vanquish';
    @api author = 'Trevor';
    @api publishDateTime = new Date();
    @api title = '100 ways to get rich off Salesforce';
    @api preview = `1. work with Revature
    2. cure cancer
    3. ????
    4. Profit`;
    comment_count = 100;
}
