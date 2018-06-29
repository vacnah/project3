$(document).ready(function () {



    var i = 0;
    var arr=['Без-имени-1.png','Без-имени-2.png','Без-имени-3.png'];

   setInterval(function () {
        $('#head').attr('src','img/' + arr[i]);


        i++;
        if(i === arr.length){
            i = 0;
        }
    },2500);




});



