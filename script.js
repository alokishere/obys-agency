var tl = gsap.timeline()
tl.from(".line1-part1, #line h2",{
    opacity:0,
    onStrart:function(){
        var timer = document.querySelector(".line1-part1 h5")
        var grow=0;
        setInterval(function(){
            if(grow<100){
            timer.innerHTML= grow++;
        }else{
            timer.innerHTML= grow;
        
        }
        }, 30);
    }
})
tl.from(" #line h1,h2",{
    y:150,
stagger:0.25,
duration:0.6,
delay:0.5,
})
// tl.from(" #line h2",{
//     y:150,
// stagger:0.25,
// duration:0.6,
// })
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2,
})
tl.to("#page1",{
    delay:0.2,
    duration:0.5 ,
    y:-1600,
    opacity:0,
    ease:Power4,
})
tl.to("#loader",{
    display:"none",
})