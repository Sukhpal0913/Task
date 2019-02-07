
let data = {
    count:0,
    check: false,
    s: '2'
}   
   

// window.localStorage.setItem("count", 0);

// //In another page:
// function count(){
//     localStorage.setItem("count", parseInt(window.localStorage.getItem("count")) );
//     var c  = parseInt(window.localStorage.getItem("count")) + 1;
//     console.log("-----"+ c);
//     localStorage.setItem("count", parseInt(window.localStorage.getItem("count")) + 1);
// }


// //localStorage.setItem("count", 0);
// var questions = [
//     {
//         ques1: "What is JavaScript?",

//     }
// ]

 

// var u = document.getElementById("a").href;
// var ind = u.indexOf('.');
// data.s = u.charAt(ind - 1);

 function listener1(){

     document.querySelector('.parent').addEventListener('change', event=>{

         console.log(event.target);
        data.id =event.target.getAttribute('id');
        data.value = document.getElementById(`${data.id}`).value;
        console.log(data.value);
       

        quiz();
       
        
    });
  }

  function listener2(){

    document.querySelector('.parent').addEventListener('click', event=>{
event.preventDefault();
        console.log(event.target.parentNode);
       let cla = event.target.parentNode.getAttribute('id');
       console.log(cla);
       console.log(typeof(cla));
       let linkclass =event.target.getAttribute('class');
       if(linkclass === 'link'){
        document.getElementById(cla).style.display = 'none';
       }
       
        
    //    data.id =event.target.getAttribute('id');
    //    data.value = document.getElementById(`${data.id}`).value;
    //    console.log(data.value);
      

      
      
       
       
   });

 }


listener1();
listener2();



function quiz() {

    console.log("inside method"+ data.value);

    
    if( data.value==1) {
        console.log("Correct ans");
        data.count++;
        data.count++;
        
        //answer1.push(1);
        //count++;
        console.log(data.count);
    } else {
       // data.count++;
        //console.log(data.count);data.count++;
        
        //answer1.push(1);
        //count++; 
        data.count++;
        console.log(data.count);

        console.log('wrong ans');
      
    }
}

function quiz2() {
    
    if(data.value == 1) {
        console.log(parseInt(localStorage.getItem("count")));
        console.log("Correct ans");
        count();
        //answer1.push(1);
     //   count++;
       // console.log(count);
    } else {
        console.log('wrong ans');
    }
}

function quiz3(ans) {
    if(ans == 2) {
        console.log("Correct ans");
        //answer1.push(1);
        data.count++;
        console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}

function quiz4(ans) {
    if(ans == 2) {
        console.log("Correct ans");
        //answer1.push(1);
        data.count++;
        console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}

function quiz5(ans) {
    if(ans == 1) {
        console.log("Correct ans");
        //answer1.push(1);
        data.count++;
        console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}

function quiz6(ans) {
    if(ans == 2) {
        console.log("Correct ans");
       //answer1.push(1);
       data.count++;
       console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}

function quiz7(ans) {
    if(ans == 3) {
        console.log("Correct ans");
      //answer1.push(1);
      
      data.count++;
      console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}



function quiz8(ans) {
    if(ans == 3) {
        
        console.log("Correct ans");
        //answer1.push(1);
        data.count++;
        console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}

function quiz9(ans) {
    if(ans == 2) {
        console.log("Correct ans");
        //answer1.push(1);
        data.count++;
        console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}

function quiz10(ans) {
    if(ans == 3) {
        console.log("Correct ans");
      //answer1.push(1);
      data.count++;
      console.log(data.count);
    } else {
        console.log('wrong ans');
    }
}
// list();
/*
function result() {
    console.log("this is it");
    console.log("Total correct answers are: " + data.count);
}result();

*/




























// /*var answer = ['c','y','n','co','v','s','o','f','i'];
// var count=0;
// function quiz(id){
//     var correct=false;
//     answer.forEach(el=>{ 
//         if(el==id){
//         correct=true
//         }
//     });
//     console.log(id);
// if(correct)
// {
//     count++;
//     alert(count);
// }else{
//     alert("wrong answer");
// }