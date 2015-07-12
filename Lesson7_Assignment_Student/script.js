/*
    Program Name: Recipe Display Application
    Author: Alexia Gonzalez
    Date: July 12, 2015
    Filename: script.js
    -->
        /**
* Created with LIS2360_Lesson7_jQuery.
* User: FSUDiver21
* Date: 2015-07-12
* Time: 04:44 AM
* To change this template use Tools | Templates.
*/
function display(event){
    $(event.currentTarget).next().fadeIn("slow");
    
    
}// end of display

$("h3").click(display);

function display2(event){
    $(event.currentTarget).next().animate({height:'toggle'},"slow");
}
$("h3").click(display2);
/*
 $("h3").click(display);
 */

$("h3").hover(function(){
    $(this).css("background-color", "yellow");
}, function() {
    $(this).css("background-color","pink");
});
/*
 $("h3").click(display2);
 */
$("h3").hover(display2);



define(function() {
return {};
});

