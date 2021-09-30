let leftArrow=document.getElementById("la");
let rightArrow=document.getElementById("ra");
// leftArrow.style.ma

leftArrow.onclick=function(){
    document.getElementById("sc").animate([
        {     marginLeft: "-190vw"  },
        {     marginLeft: "-95vw"      }
    ],{
        duration: 400,
        iterations: 1,
        easing: "ease-in-out"
    });
    document.getElementById("sc").style.marginLeft="-95vw";
    console.log("animaton don");
}
rightArrow.onclick=function(){
    document.getElementById("sc").animate([
        {     marginLeft: "-95vw"  },
        {     marginLeft: "-190vw"      }
    ],{
        duration: 400,
        iterations: 1,
        easing: "ease-in-out"
    });
    document.getElementById("sc").style.marginLeft="-95vw";
    console.log("animaton don");
}
