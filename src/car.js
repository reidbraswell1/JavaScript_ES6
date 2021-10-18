class Car {
    constructor (make, model, year) {
        console.log("---Begin car constructor---");
        console.log(`Constructor Parameters:\n1. make=${make}\n2. model=${model}\n3. year=${year} `)
        this.make = make;
        this.model = model;
        this.year = year;
    }
    info() { 
        console.log("---Begin info()---");
        console.log(`Parameters:\n1. make=${this.make}\n2. model=${this.model} \n3. year=${this.year}`);
    }
}
export { Car };