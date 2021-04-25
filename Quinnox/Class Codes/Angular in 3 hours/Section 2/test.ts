import {Greeter, Setting} from './greeter'
let greeter = new Greeter();
let msg:Setting = {title:"hello", name:"world"};
greeter.title = msg;
console.log(greeter.title);