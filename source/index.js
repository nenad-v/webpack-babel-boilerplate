import Person from './Person';
import Car from './Car';

const car = new Car('BMW', 'x6')
const user = new Person('Nenad', car);

console.log(user);