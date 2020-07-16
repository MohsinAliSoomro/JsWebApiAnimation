
var clouds=document.querySelector('.clouds');

var cloudAnimated=clouds.animate([
    {transform:'translate(-1600px,0)'},
    {transform:'translate(1600px,0)'}
],{
    duration:5000,
    iterations:Infinity,
})

var clouds=document.querySelector('.bird');

var cloudAnimated=clouds.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(100px,40px)'},
    {transform:'translate(200px,60px)'},
    {transform:'translate(300px,80px)'},
    {transform:'translate(400px,100px)'},
    {transform:'translate(500px,120px)'},
    {transform:'translate(600px,140px)'},
    {transform:'translate(700px,160px)'},
    {transform:'translate(800px,140px)'},
    {transform:'translate(900px,120px)'},
    {transform:'translate(1000px,100px)'},
    {transform:'translate(1100px,80px)'},
    {transform:'translate(1200px,60px)'},
    {transform:'translate(1300px,40px)'},
    {transform:'translate(1400px,20px)'},
    {transform:'translate(1500px,120px)'},
],{
    duration:5000,
    iterations:Infinity,
    playbackRate:10
})

var clouds=document.querySelector('.plane');

var cloudAnimated=clouds.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(100px,-40px)'},
    {transform:'translate(200px,-70px)'},
    {transform:'translate(300px,-100px)'},
    {transform:'translate(400px,-130px)'},
    {transform:'translate(500px,-160px)'},
    {transform:'translate(600px,-190px)'},
    {transform:'translate(700px,-220px)'},
    {transform:'translate(800px,-250px)'},
    {transform:'translate(900px,-280px)'},
    {transform:'translate(1000px,-310px)'},
    {transform:'translate(1100px,-340px)'},
    {transform:'translate(1200px,-370px)'},
    {transform:'translate(1300px,-400px)'},
    {transform:'translate(1400px,-430px)'},
    {transform:'translate(1500px,-470px)'},
],{
    duration:5000,
    iterations:Infinity,
    playbackRate:10
})
