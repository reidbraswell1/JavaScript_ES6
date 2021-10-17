import { car } from './car.js';
import { Wishlist } from './wishlist';

let myWishlist = new Wishlist([]);

export function generateTestData(count) {
    for (let i=0; i < count; i++) {
        let myCar;
        if(i < 10) {
            myCar = new car(`myMake${i+1}`, `myModel${i+1}`, `myYear200${i+1}`);
        }
        else if(i+1 > 99) {
            myCar = new car(`myMake${i+1}`, `myModel${i+1}`, `myYear2${i+1}`);
        }
        else {
            myCar = new car(`myMake${i+1}`, `myModel${i+1}`, `myYear20${i+1}`);
        }
        myCar.info();
        myWishlist.add(myCar);
    }
    return myWishlist;
}