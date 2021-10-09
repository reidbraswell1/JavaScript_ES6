class wishlist {
    list = [];

    constructor(car) {
        console.log("---Begin wishlist constructor---");
        console.log(`Constructor Parameters:\n1. ${car.make}\n2. ${car.model}\n3. ${car.year}`);
        this.car = car;
    }
    add(car) {
        this.list.push(car);
    }
    remove(idx,car) {

    }
}
export { wishlist };