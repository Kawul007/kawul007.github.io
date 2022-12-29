gsap.registerPlugin(Flip);

//Nav
const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");
links.forEach((link) =>{
    link.addEventListener("click",() =>{//循环了，不需要e
        //使得导航变蓝
        gsap.to(links,{color:"#252525"});
        if(document.activeElement === link){
            gsap.to(link,{color:"#385ae0"});
        }

        //下划特效
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);//传当前activeNav给下一个元素
        Flip.from(state,{
            duration:1.25,
            absolute:true,
            ease:"elastic.out(1,0.5)",
        })
    });
});

//cards
const cards = document.querySelectorAll(".card") ;
cards.forEach((card,index) =>{
    card.addEventListener("click",() =>{
       //get state
       const state = Flip.getState(cards);
       //替换active状态
       const isCardActive = card.classList.contains("active");
       cards.forEach((otherCard,otherIdx) =>{
        otherCard.classList.remove("active");
        otherCard.classList.remove("is-inactive");
        if(!isCardActive && index !== otherIdx){
            otherCard.classList.add("is-inactive");
        }
       });
       //若当前卡片未active，使得状态变成active
       if(!isCardActive) card.classList.add("active");

       Flip.from(state,{
        duration:1,
        ease:"expo.out",
        absolute:true,
       });
    });
});