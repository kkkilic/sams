const main = document.querySelector(".main");
const samsung = document.querySelector(".left")
const apple = document.querySelector(".right");

//burada sol kısmın mause üzerinden hareket salıyoruz
samsung.addEventListener("mouseenter", function(){
    main.classList.add("active-left")
})
// burada sağ kısmını içinde aktif kılas eklenior
apple.addEventListener("mouseenter", ()=>{
    main.classList.add("active-right")
})

samsung.addEventListener("mouseleave",()=>{
    main.classList.remove("active-left")
})

//burada sağ kısımdan mouse ayyrılınca active-right classı kaldırılıyor
apple.addEventListener("mouseleave",()=>{
    main.classList.remove("active-right")
})