// * Object methods *
// let obj1 = {
//     name: 'nat',
//     sayHi() {
//         alert('Hello'//this.name)
//     },
//     sayGoodbye() {
//         alert("Goodbye")
//     }
// }

// obj1.sayHi();

//Exercise 1
// ans. Error ให้ใส่ semi-colon
let user = {
  name: "John",
  go: function () { alert(this.name) }
};

(user.go)()

//Exercise 2
function makeUser() {
  return {
    name: "John",
  }    //function ถ้า call this เปล่าๆไม่มี obj.function ตัว this จะไม่มีค่า undefined
    ref: function () {
      return this
  };
};

let user = makeUser();

alert(user.ref().name); // What's the result?

//Exercise 3
let calculator = {
  read() {
    this.x = +prompt("Insert x number");
    this.y = +prompt("insert y number");
  },

  sum() {
    return this.x + this.y;
  },

  mul() {
    return this.x * this.y;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Exercise 4
let ladder = {
  step: 0,
  up() {
    this.step++
    return this;
  },
  down() {
    this.step--
    return this;
  },
  showStep() { 
    alert( this.step )
    return this;
  }
};

ladder.up().up().down().showStep(); // 1

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); 

//



// * Constructor
//Lab 1
// let user = {
//   name: 'Nat',
//   isAdmin: false
// }

// let user1 = {
//   name: 'Tle',
//   isAdmin: false
// }


// function User(firstname, isAdmin) {
//   this.name = firstname;
//   this.isAdmin = isAdmin;
// }

// let user = new User('Nat', true);
// let user1 = new User('Tle', false);

// console.log(user);
// console.log(user1);

//Lab 2
// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert("my name is: " + this.name)
//   }
// }

// let kla = new User("kla");

// kla.sayHi();

//Exercise 1
function Calculator() {

  this.read = function() {
    this.x = Number(prompt("Insert x number"));
    this.y = Number(prompt("Insert y number"));
  }

  this.sum = function() {
    return this.x + this.y;
  }

  this.mul = function() {
    return this.x * this.y;
  }
}

let calculator = new Calculator();
calculator.read();

alert("sum=" + calculator.sum());
alert("mul=" + calculator.mul());


//Exercise2
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += Number(prompt("Insert number"));
  }
}

let accumulator = new Accumulator(4);

console.log(accumulator.value);
accumulator.read();
accumulator.read();
alert(accumulator.value);
