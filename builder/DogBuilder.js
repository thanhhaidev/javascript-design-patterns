import { Dog } from './Dog';

export class DogBuilder {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    setWeight(weight) {
        this.weight = weight;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }

    builder() {
        if (!('weight' in this)) {
            throw new Error('weight is missing');
        }
        if (!('height' in this)) {
            throw new Error('height is missing');
        }
        return new Dog(this.name, this.weight, this.height, this.gender);
    }
}
