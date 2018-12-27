
/* 7: При клике на значок "вниз" медлено прокручить страницу вниз до конца след блока. 
    Затем через 3 секунды возвращать к кликнотому элементу. addEventListenr не использовать
 */
     
/* 8: При клике на любой элемент из любой навигационной панели, цвет текста этого пункта станвится случайным. 
 Этим же цветом выделяется черта под элементами, причём на всех панелях. При клике на другой элемент с предыдущего цвет спадает. Используйте addEventListener
*/

let a=document.querySelectorAll('a'); 
let paintTrigger=false; 

function paint (e){ 
    let  color=randomColor(); 
    // if (paintTrigger){ 
    //     a.forEach(element => { 
    //     element.addEventListener('click',paint,false)
    //     element.color='white'; 
    //     }); 
    // } 
    let dataName=e.target.getAttribute('data-Name'); 
    console.log(dataName);
    let changeColor = document.querySelectorAll("a[data-Name='"+dataName+"']");
    if (!paintTrigger){ 
           paintTrigger=true; 
      }
      else{
        a.forEach(element => { 
          element.color='white'; 
        });
    changeColor.forEach(element => { 
      element.style.color='+color+'; 
      console.log(color); 
    });        
      }
} 

let link = document.querySelectorAll('a');
link.forEach (element=>{
    element.addEventListener('click', paint, false);
});


function randomColor() { 

    let r = Math.round( Math.random() * 255 ); 
    let g = Math.round( Math.random() * 255 ); 
    let b = Math.round( Math.random() * 255 ); 
    return   ":rgb("+r+", "+g+", "+b+"); ";

};

// 9:  Если ширина экрана < 300px, то картинка елочки уменшается на 50% и 
// заполняет собой (клонами) весь 1й блок. Иначе всё возвращается в исходное состояние
// window.addEventListener('resize', function(event){
//     let resizeImg = document.querySelector('.resizeIMG');
//     let sectionAbout = document.querySelector('#About');
//     console.log(window.innerWidth);
//   if( (window.innerWidth) >= 300)
//     resizeImg.width="50%";
//     console.log(sectionAbout);
//     sectionAbout.style.background
//   });



//10: В зависимости от цветов логотипа браузера (O:red, Moz:orange, Ch:green)
//  менятьч цвет шрифта в блоке About ME на соот. лого.
let changeText = document.querySelector('.changeColor');
let viewer = navigator.userAgent;
let reg1 = /Firefox/i; // ff8c00
let reg2 = /Chrome/i; // #228b22
let reg3 = /OPR/i; // #ff0000

if (viewer.search(reg2) != 0){
    changeText.style.color = '#228b22';
}else if (viewer.search(reg1) != 0){
    changeText.style.color = '#ff8c00';
}else if (viewer.search(reg3) != 0){
    changeText.style.color = '#ff0000';
}