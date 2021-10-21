import { Car } from './car.js';
import { Wishlist } from './wishlist';

export function generateTestData(count) {
    let myWishlist = new Wishlist([]);
    for (let i=0; i < count; i++) {
        let myCar;
        if(i < 10) {
            myCar = new Car(`make${i+1}`, `model${i+1}`, `year200${i+1}`);
        }
        else if(i+1 > 99) {
            myCar = new Car(`make${i+1}`, `model${i+1}`, `year2${i+1}`);
        }
        else {
            myCar = new Car(`make${i+1}`, `model${i+1}`, `year20${i+1}`);
        }
        myWishlist.add(myCar);
        myWishlist.display(myCar);
    }
    return myWishlist;
}