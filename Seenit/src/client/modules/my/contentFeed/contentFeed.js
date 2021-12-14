import { LightningElement } from 'lwc';
/**   Posts:    key: ordered ints
                score: between 0 and 10k
                author: 'trevor',
                publishDateTime: 2020 some date
                title: 'title + i'
                preview: this.lorem.slice(ls, rs) */

export default class ContentFeed extends LightningElement {
    lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit tortor nec nunc pulvinar efficitur. Phasellus condimentum lobortis lobortis. Vestibulum mattis lectus eros, interdum lobortis purus sagittis vitae. Suspendisse ut sapien non elit ultrices ornare. Sed ut tempor dui, sed euismod dolor. Nam a felis quis nunc dapibus iaculis vel sed erat. Donec fringilla sagittis lorem, quis rutrum mi fringilla et.

    Quisque ut diam ut tellus rhoncus ornare et eget libero. Vivamus eu lectus nibh. Duis gravida, mauris rhoncus auctor tincidunt, enim augue consequat sem, vitae porta tellus sem eu quam. Sed semper leo eget feugiat bibendum. Vestibulum sed ultrices lacus. Integer porttitor velit vel urna porttitor volutpat. Maecenas ornare velit orci, in cursus sem porta nec. Nulla tempor urna erat. Proin quis condimentum velit, luctus bibendum metus.
    
    Integer convallis vestibulum scelerisque. Etiam ante sapien, consectetur facilisis euismod ut, vulputate vitae quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a fermentum sem, ac viverra magna. Nunc sollicitudin risus quis lacus suscipit, id consectetur urna porttitor. Ut placerat consequat mauris et vestibulum. Ut hendrerit eget nisl id ornare. Cras nisl orci, pulvinar sed nisl sit amet, dictum scelerisque magna.
    
    Morbi non porta purus. Donec est elit, egestas vel rutrum id, ullamcorper et nunc. Donec vitae felis vitae mauris fermentum sagittis id non lectus. Donec molestie sollicitudin imperdiet. Praesent vel tempus tellus. Maecenas id pretium ex, non elementum quam. Donec id erat accumsan justo congue rutrum eu at quam. Aenean scelerisque erat ac felis molestie, non efficitur enim dapibus. Pellentesque egestas nisl vitae sodales finibus. Duis a venenatis sem. In hac habitasse platea dictumst. Integer ipsum tellus, sollicitudin eu vehicula nec, rutrum sed diam. Vivamus volutpat tempus nunc vitae consequat. Nam mollis pharetra placerat. Fusce nec erat neque. Sed sollicitudin tempus massa, sit amet tempus purus eleifend at.
    
    Phasellus imperdiet, sapien quis imperdiet pulvinar, libero tellus rhoncus metus, quis volutpat urna lectus eu dui. Praesent eget tristique arcu. Cras a porttitor risus. Praesent congue orci lorem, ut semper quam maximus vulputate. Quisque lorem eros, ornare facilisis enim at, laoreet sodales felis. Pellentesque rhoncus arcu dolor, ut faucibus justo consequat id. Fusce porta sed erat faucibus interdum. Vestibulum aliquet tristique viverra. Suspendisse eu porttitor turpis, ut rhoncus dui. Aliquam eleifend ex dolor, id iaculis nulla rhoncus accumsan. Cras pulvinar tortor eget malesuada tempus. Vivamus posuere, urna facilisis varius feugiat, risus diam tincidunt velit, imperdiet aliquet augue dui et est. In hac habitasse platea dictumst.`;
    posts = [];
    l = this.lorem.length;
    randomDate(start, end, startHour, endHour) {
        let date = new Date(+start + Math.random() * (end - start));
        let hour = startHour + Math.random() * (endHour - startHour) | 0;
        date.setHours(hour);
        date.setFullYear(2020);
        return date;
      } 
      // written Jul 13 '15 at 8:51 by Peter Olson, accessed at https://stackoverflow.com/questions/31378526/generate-random-date-between-two-dates-and-times-in-javascript
    buildPosts() {
        let j = this.posts.length;
        for (let i = 0; i < 16; i++) {
            // console.log(i);
            let ls = i + Math.round((Math.random()*this.l));
            let rs = i + Math.round((Math.random()*this.l));
            if (ls>rs) {
                let c = rs;
                rs = ls;
                ls = c;
            } else while (ls == rs) {
                ls = i + Math.round((Math.random()*ls))
            }
            // console.log('ls = ' + ls.toString());
            // console.log('rs = ' + rs.toString());
            
            this.posts.push({
                key: j+i,
                score: Math.round(Math.random()*10000),
                author: 'trevor',
                publishDateTime: this.randomDate(ls, rs, ls, rs),
                title: 'title ' + i.toString(),
                preview: this.lorem.slice(ls, rs)
            });
            console.log(this.posts);
        }
    }
    connectedCallback() {
        this.buildPosts();
    }
}
