function loaderpage(){var tl = gsap.timeline()
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
        ease:Power4,
        duration:1,
    })
    tl.from("#page1",{
     y:1600,
    })
    tl.to("#loader",{
        // duration:0.5,
        display:"none",
    })

    tl.from("#nav",{
        opacity:0,
    })
    
    tl.from("#hero1 h1, #hero2 h1, #hero3 h1, #hero4 h1",{
        y:120,
        stagger:0.2
    })
tl.from("#hero h3",{
    y:120,
    stagger:0.2
})
}
function crsranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to('#crsr',{
    left:dets.x,
    top:dets.y,
        })
    })
    Shery.makeMagnet("#nav-part2 h4");
}
loaderpage();
crsranimation();

