var url = "http://api.openweathermap.org/data/2.5/weather?lat=",url2="&lon=",url3="&units=metric&appid=68a1f7c6163e80f1500bbdaf45f7be9d";
 function changetext() {
                 var tempButton = document.getElementById("tempButton");
                if (tempButton.value=="°C")
                    { 
                      
                        tempButton.value = "°F";
                    }
                else
                 {
                     tempButton.value = "°C";
                 }
            }
$(document).ready(function(){
$.getJSON("http://ip-api.com/json",function(geo){
 var lat = geo.lat;
 var long= geo.lon;
  var city= geo.city;
  
  $("#locat").html(city);
  $.getJSON(url+lat+url2+long+url3).then(function(data){
    var temp=data.main.temp;
    var tempC = data.main.temp;
    var tempF = temp * 9/5+32
 $("#tempButton").on("click", function(){
    if(tempButton.value=="°C"){
     $("#boxForTemp").html("<p>Temp: "+tempC+ "</p>")}
   else{
     $("#boxForTemp").html("<p>Temp: "+tempF+ "</p>")
   }
 })
 
   
   
   

    // I get the url and pass all those variables. It works for lat and lon but not zipcodes. No clue.
    $("#boxForTemp").html("<p>Temp: "+temp+ "</p>")
     $("#boxForConditions").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
})    
    
    // the image blocker I'm using to keep bandwidth low broke bits. Shitty interenet makes this a lot harder.
   
    });

})