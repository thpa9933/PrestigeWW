
// function main(){
//
// }
  $('.P1').hide();
  $('.P2').hide();
  $('.P3').hide();
  $('.P4').hide();
  $('.P5').hide();
  $('.P6').hide();
  $('.P7').hide();
  $('.P7').hide();
  $('.P8').hide();
  $('.P9').hide();
  $('.P10').hide();
  $('.P11').hide();
  $('.P12').hide();
  $('.P13').hide();
  $('.P14').hide();
  $('.P15').hide();
  $('.P16').hide();

var Pchange = new Array();
  Pchange[0] = ".P1";
  Pchange[1] = ".P2";
  Pchange[2] = ".P3";
  Pchange[3] = ".P4";
  Pchange[4] = 5;
  Pchange[5] = 6;

var i = 0;
function change(x){
  if(x == 1){
    console.log(i);
    console.log('forward');
    $(Pchange[i]).hide();
    i++;
    $(Pchange[i]).slideToggle();
  }
  if(x == 2){
    console.log(i);
    console.log('back');
    i--;
  }
}

// var current = 0;
// function change(x){
//   switch(x){
//     case 1:
//       if(current == 1){
//         current = 0;
//
//
//       }
//       else{
//         current = 1;
//
//       }
//       break;
//
//     case 2:
//       if(current == 2){
//         current = 0;
//
//       }
//       else{
//         current = 2;
//
//       }
//       break;
//
//   }
// }

// $(document).ready(main);
