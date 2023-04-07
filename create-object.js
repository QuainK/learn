// 1. Object构造函数
const person1 = new Object()
person1.name = 'Jason'
person1.age = 24
console.log('person1', person1)

// 2. 对象字面量
let person2 = {}
person2.name = 'Jason'
person2.age = 24
person2 = {
  name: 'Jason', age: 24
}
console.log('person2', person2)

// 3. 工厂模式
function personFactory(name, age, job) {
  const o = {}
  o.name = name
  o.age = age
  o.job = () => {
    return job
  }
  return o
}

const person3 = personFactory('Alice', 24, 'teacher')
const person4 = personFactory('Bob', 24, 'teacher')
console.log('person3', person3.name, person3.age, person3.job(), person3)
console.log('person4', person4.name, person4.age, person4.job(), person4)

// 4. 构造函数
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = () => {
    return job
  }
}

const person5 = new Person('Alice', 24, 'teacher')
const person6 = new Person('Bob', 24, 'student')
console.log('person5', person5.name, person5.age, person5.job(), person5)
console.log('person6', person6.name, person6.age, person6.job(), person6)

// 构造函数这种方法创建出来的对象能用instanceof识别对象的具体类型
console.log('person5 instanceof Person', person5 instanceof Person)
console.log('person5 instanceof Object', person5 instanceof Object)
console.log('person5 instanceof Array', person5 instanceof Array)
console.log('person5 instanceof Number', person5 instanceof Number)

// 5. 原型创建对象
function PersonB() {
  PersonB.prototype.name = 'Alice'
  PersonB.prototype.age = 24
  PersonB.prototype.job = 'teacher'
  PersonB.prototype.say = () => {
    return 'My name is ' + this.name
  }
}

const person7 = new PersonB
const person8 = new PersonB
person7.name = 'Bob'
person8.name = 'Charlie'
console.log('person7', person7.name, person7.age, person7.say())
console.log('person8', person8.name, person8.age, person8.say())

// 封装原型
function PersonC() {
}

PersonC.prototype = {
  name: 'Alice',
  age: 24,
  job: 'teacher',
  say: function () {
    return 'My name is ' + this.name
  }
}
const person9 = new PersonC
person9.name = 'Daniel'
console.log('person9', person9.name, person9.age, person9.say())
console.log('job' in person9, 'address' in person9)
console.log(person9.hasOwnProperty('name'), person9.hasOwnProperty('age'))

// 6. 构造函数和原型创建对象两种模式组合使用
function PersonD(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
}

PersonD.prototype = {
  constructor: PersonD,
  say: function () {
    return this.job
  }
}

const person10 = new PersonD('Eric', 26, 'student')
console.log('person10', person10.name, person10.age, person10.say())
