export class Dog {
    constructor(name, weight, height, gender) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
    }

    eat(target) {
        console.log(`Eating target: ${target.name}`);
    }
}
