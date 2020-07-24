
var BudgetController = (function(){
var x=14;
function add(a){
  return a+x;
}
return {
  publicTest1:function(b){
    console.log(add(b));
  },
  publicTest2:function(c){
    console.log(add(c));
  }
}

})()

var UIController = (function(){

var DomString = {
  input_type:'.add__type',
  input_description:'.add__description',
  input_value:'.add__value',
  input_btn:'.add__btn'
}

  return{
    getInput:function(){
    return{
        type:document.querySelector(DomString.input_type).value,
        description:document.querySelector(DomString.input_description).value,
        value:document.querySelector(DomString.input_value).value
    };
  },
  getDomString:function(){
    return DomString;
  }
}

})();

var AppController = (function(budgetCtrl ,UICtrl ){


 var setupEventListeners = function(){
   var Dom = UICtrl.getDomString();

   document.querySelector(Dom.input_btn).addEventListener('click',addItem);
   document.addEventListener('keypress',function(e){
     if(e.keyCode===13 || e.which===13){
       addItem();
     }
   });
 }

 var addItem = function(){
   var add_Item = UICtrl.getInput();
   console.log(add_Item);
 }

return{
  init:function(){
    console.log('Application has started.');
    setupEventListeners();
  }
}

})(BudgetController,UIController);

AppController.init();
