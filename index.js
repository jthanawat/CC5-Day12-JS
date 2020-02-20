// Exercise 
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

// let ask = (question, yes,no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );


// function thanawat() {
//     console.log('thanawat');
//     return 0;
// }

// setTimeout(thanawat, 3000);
// setTimeout(callback, millisecond);

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }
// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) { 
//         result *= x; 
//     }

//     return result;
// }

// let x = prompt("x?", ''); 
// let n = prompt("n?", '');

// if (n <= 0) {
//     alert(`Power ${n} is not supported, 
//     please enter an integer number greater than zero`);
// } else {
//     alert(pow(x, n))
// }

// Exercise 1
// function user(name1, BMI1, name2, BMI2) {
//     if (BMI1 > BMI2) {
//         alert(`${name1}, ${BMI1}`);
//     } else {
//         alert(`${name2}, ${BMI2}`);
//     }
// }

// let name1 = prompt("Input your name1");
// let BMI1 = prompt("Input your BMI1");
// let name2 = prompt("Input your name2");
// let BMI2 = prompt("Input your BMI2");

// user(name1, BMI1, name2, BMI2);


// Exercise 2
// let name1 = prompt("Input your name1");
// let w1 = prompt("Input your weight (kg)")
// let h1 = prompt("input your height (m)")
// let BMI1;
// BMI1 = w1 / (h1 ** 2)

// let name2 = prompt("Input your name2");
// let w2 = prompt("input your weight (kg)")
// let h2 = prompt("input your height (m)")
// let BMI2;
// BMI2 = w2 / (h2 ** 2)

// function user(name1, BMI1, name2, BMI2) {
//     if (BMI1 > BMI2) {
//         alert(`${name1}, ${BMI1}`);
//     } else {
//         alert(`${name2}, ${BMI2}`);
//     }
// }

// user(name1, BMI1, name2, BMI2);

//Exercise 3
// let A, B;
// B = 0;
// while (true) {
//   A = prompt("a number");
//   if (+A > B) {
//     B = A
//     console.log(A);
//   } else if (!A || A == null) {
//     console.log(B);
//     alert(B)
//     break;
//   }
// }

//Exercise 4
// let A, B, C;
// B = 0;
// C = 1;
// while (true) {
//   A = prompt("a number");
//   console.log(A);
//   if (+A > C) {
//     C = A
//     console.log(C);
//   } else if (+A < C && C > B) {
//     B = A
//     console.log(B);
//   } else if (!A || A == null) {
//     alert(`second max : ${B}, max : ${C}`)
//     break;
//   }
// }