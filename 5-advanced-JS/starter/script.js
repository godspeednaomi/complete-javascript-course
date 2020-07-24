// function test1(){
//   var a=10;
//   return function(b){
//     console.log(a+b);
//   }
//
// }
// var tt = test1();

// function reduct(){
//   var balance = 10000;
//   return function(a){
//     balance-= (a<=10?a:10);
//     console.log(balance);
//   }
// }
//
// var wallet = reduct();

// var years = [1982,2014,2017,1945];
//
// function arrCalc(arr,fn){
//   var resArr =[];
//   for(let i=0;i<arr.length;i++){
//     resArr.push(fn(arr[i]));
//   }
//   return resArr;
// }
// function calAge(el){
//   return 2020-el;
// }
//
// console.log(arrCalc(years,calAge));

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
//
// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('jane');
// designerQuestion('Mark');
// designerQuestion('Mike');
//
// interviewQuestion('teacher')('Mark');


// (function IIFET(a){
//   var res = Math.random()+a;
//   return function(b){
//   console.log(res+b);}
// })(4)(6);

//IIFET();

// function retirementCal(yearOfBirth){
//   var nowYear = 2020;
//   return function(retirementAge){
//     console.log(`you left ${retirementAge-nowYear+yearOfBirth} years to work.`);
//   }
// }
// var TW = retirementCal(1982);
// console.log(TW(65));
//
// console.log('-------');
// console.log(retirementCal(1982)(65));

// var godspeed = {
//   name : 'godspeed',
//   age : 38,
//   job : 'engineer',
//   presentaion : function(style,timeOfDay){
//     if(style==='friendly'){
//       console.log(`${this.name} , What's up, It's beautiful ${timeOfDay}. As a ${this.age} years old ${this.job},You are awesome. `);
//     }else{
//       console.log(`Hello , ${this.name} . Good ${timeOfDay}. How are you? ${this.age} years old ${this.job}. `);
//     }
//   }
// }
//
// godspeed.presentaion('formal','afternoon');
//
// var naomi = {
//   name:'naomi',
//   age:38,
//   job:'assistant'
// }
//
// godspeed.presentaion.call(naomi,'friendly','morning');
//
// var godspeedFriendly = godspeed.presentaion.bind(godspeed,'friendly');
// godspeedFriendly('evening');
// godspeedFriendly('morning');
// var naomiFormal = godspeed.presentaion.bind(naomi,'formal');
// naomiFormal('night');
// naomiFormal('afternoon');

//question constructor


(function(){
function Question(ques,options,ans){
    this.question = ques;
    this.options = options;
    this.ans = ans;
}

var q1 = new Question('Is godspeed will be promoted?', ['yes' , 'no'] , 0);
var q2 = new Question('Is Naomi will be include CHT?', ['yes' , 'no'] , 0);
var q3 = new Question('Who is godspeed\'s first son?', ['Ray' , 'Bruce' , 'John' , 'Tom'] , 1);
var questions = [q1,q2,q3];

Question.prototype.displayQuestion = function(){
  console.log(this.question);
  for(let i=0;i<this.options.length;i++){
    console.log(`${i} : ${this.options[i]}`);
  }
}
var n = Math.floor(Math.random()*questions.length);

Question.prototype.check = function(n){
   if(this.ans === n){
     console.log('correct!');
   }else{
     console.log('wrong.');
   }
}

questions[n].displayQuestion();
var answer = parseInt(prompt('answer the question:'));
questions[n].check(answer);
})();
