import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	let values: [string, string, number];
	values = [tofrom.value,details.value,amount.valueAsNumber]

	let doc: HasFormatter;

	if(type.value==='invoice'){
		doc = new Invoice(...values)
	}else{
		doc = new Payment(...values)
	}

	list.render(doc,type.value,'end');
});

const addUID = <T extends {name: string}>(obj: T) => {
	let uid = Math.floor(Math.random()*100);
	return {...obj,uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne.name);

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
	uid: number;
	resourceType: ResourceType;
	data: T;
}

const docThree: Resource<object> = {
	uid: 1,
	resourceType: ResourceType.BOOK,
	data: { title: 'name of the wind' }
}

const docFour: Resource<object> = {
	uid: 10,
	resourceType: ResourceType.PERSON,
	data: { name: 'yoshi' }
}

console.log(docThree,docFour);

let student: [string, number];
student = ['lee',223423];
