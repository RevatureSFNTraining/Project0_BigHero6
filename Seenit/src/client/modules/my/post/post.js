import{LightningElement,api}from'lwc';
export default class Post extends LightningElement {
    // {community} by {author} on {date}.</span></div>
    //         <div class="content"><span class="title">{Title}</span><br>{preview}
    @api community;
    @api author;
    @api date;
    @api Title;
    @api preview;
    @api comment_count;
    community = 'Vanquish';
    author = 'Trevor';
    date = new Date();
    Title = "100 ways to get rich off Salesforce";
    preview = `1. work with Revature
    2. cure cancer
    3. ????
    4. Profit`;
    comment_count = 100;
}