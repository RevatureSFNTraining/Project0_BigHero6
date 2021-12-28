import { LightningElement } from 'lwc';

export default class home extends LightningElement {

    IsSeen = false;
    

    handleClick(e){
            this.IsSeen = e.target.checked;
        }

        contents = [
            {
               Number:'1',
               
               Name:'MacBook Air 13 Inch - M1 Chip, 8GB RAM, 256GB SSD',     
               
               Price:'$999.00'
            },
            {
               Number:'2',
             
               Name:'Surface Laptop 4 - 13.5 inch, Platinum, AMD Ryzen 5, 8 GB RAM, 256 SSD',    
             
               Price:'$999.00'
            },
            {
               Number: '3',
               
               Name:'27-inch iMac with Retina 5K display, 3.1GHz 6-core 10th gen Intel Core i5 processor, turbo boost up to 4.5Ghz, 8GB 2666MHz DDR4 memory, Radeon Pro5300 w/ 4GB GDDR6 Memory, 256GB SSD',       
               
               Price: '$1799.00'
              
            },
            {
               Number: '4',
               
               Name: 'HP 24-inch All-in-One Desktop Computer, AMD Athlon Silver 3050U Processor, 8GB RAM, 256 GB SSD, Windows 10 Home',      
               
               Price: '$524.99'
               
            }
         ];
    
}

