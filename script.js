
  AOS.init();


document.querySelector("#btn-header-menu").addEventListener("click" , (e) =>{
   // alert("menu")
   window.open("http://127.0.0.1:5500/index2.html")
})

document.querySelector("#btn-header-services").addEventListener("click" , (e) =>{
   //  alert("services")

   document.querySelector(".service").style.display = "block"
   e.preventDefault()
   document.querySelector(".img-right-header").style.display = "none"
    
})

document.querySelector(".close-btn-service").addEventListener("click" , (c)=>{
      
   document.querySelector(".service").style.display = "none"
   document.querySelector(".img-right-header").style.display = "block"
})

document.querySelector("#btn-header-product").addEventListener("click" , (e) =>{
   // alert("product")

   e.preventDefault()
   const targetElement2 = document.querySelector(".part4");
   targetElement2.scrollIntoView({
      behavior: 'smooth'
   });
})

 let scroll = document.querySelector("#btn-header-blog").addEventListener("click" , (e) =>{
    // alert("blog")
   e.preventDefault()
   const targetElement = document.querySelector(".part2");
   targetElement.scrollIntoView({
      behavior: 'smooth'
   });
});


document.querySelector("#reserve-btn-header").addEventListener("click" , (e)=>{
// alert("reserve")

const targetElement1 = document.querySelector(".part3");
targetElement1.scrollIntoView({
   behavior: 'smooth'
});
})

// shop // 

document.querySelector(".more-shop").addEventListener("click" , (e)=>{
   open("http://127.0.0.1:5500/prof.html")
})

document.querySelector(".delete-icon-shop").addEventListener("click" , (e)=>{
   localStorage.removeItem("item1");
   document.querySelector(".product11").innerHTML = "";
   document.querySelector(".delete-icon-shop").style.display = "none"
})

document.querySelector(".delete-icon-shop2").addEventListener("click" , (e)=>{
   localStorage.removeItem("item2");
   document.querySelector(".product22").innerHTML = "";
   document.querySelector(".delete-icon-shop2").style.display = "none"
})

document.querySelector(".delete-icon-shop3").addEventListener("click" , (e)=>{
   localStorage.removeItem("item3");
   document.querySelector(".product33").innerHTML = "";
   document.querySelector(".delete-icon-shop3").style.display = "none"
})


document.querySelector(".logo-shop").addEventListener("click" , (e)=>{
   // alert("shop")

   document.querySelector(".shop").style.display = "block"
   document.querySelector(".title-header").style.display = "none"
})

document.querySelector(".btn-shop").addEventListener("click" , (e)=>{
   document.querySelector(".shop").style.display = "none"
   document.querySelector(".title-header").style.display = "block"
})



function setDatainLocal2 (){

   let product2 = "Nescoffee";

   localStorage.setItem("item2" , product2);
   
   setDatainLocal2()
}

function setDatainLocal2price (){
   let product2Price = 25000;

   localStorage.setItem("item2P" , product2Price);

   setDatainLocal2()
}

function getData2(){
 let nameItem2 =   localStorage.getItem("item2");
 let priceItem2 = localStorage.getItem("item2P");

 document.querySelector(".product22").innerHTML = nameItem2;
}

getData2();
   
   document.querySelector(".shop-logo-product2").addEventListener("click" , setDatainLocal2);
   document.querySelector(".shop-logo-product2").addEventListener("click" , setDatainLocal2price);


   function setDatainLocal1 (){

      let product1 = "coffee";
   
      localStorage.setItem("item1" , product1);
      
      setDatainLocal1()
   }

   function setDatainLocal1price (){
      let product1Price = 15000;

      localStorage.setItem("item1P" , product1Price);

      setDatainLocal1()
   }

   function getData1(){
    let nameItem1 =   localStorage.getItem("item1");
    let priceItem1 = localStorage.getItem("item1P");

    document.querySelector(".product11").innerHTML = nameItem1;
   }

   getData1();
      
      document.querySelector(".shop-logo-product").addEventListener("click" , setDatainLocal1);
      document.querySelector(".shop-logo-product").addEventListener("click" , setDatainLocal1price);

   function setDatainLocal3 (){

      let product3 = "chapochino";
   
      localStorage.setItem("item3" , product3);
      
      setDatainLocal3()
   }

   function setDatainLocal3price (){
      let product3Price = 35000;

      localStorage.setItem("item3P" , product3Price);

      setDatainLocal3()
   }

   function getData3(){
    let nameItem3 =   localStorage.getItem("item3");
    let priceItem3 = localStorage.getItem("item3P");

    document.querySelector(".product33").innerHTML = nameItem3;
   }

   getData3();
      
      document.querySelector(".shop-logo-product3").addEventListener("click" , setDatainLocal3);
      document.querySelector(".shop-logo-product3").addEventListener("click" , setDatainLocal3price);
// shop // 

document.querySelector(".btnleft-header").addEventListener("click" , (e)=>{
   const targetElement2 = document.querySelector(".part4");
   targetElement2.scrollIntoView({
      behavior: 'smooth'
   });
})

document.querySelector(".logo-prof").addEventListener("click" , (e)=>{
   let Isloggin = localStorage.getItem("username")

   if (Isloggin){
      open(" https://goldnima.github.io/prof-for-cooffeeweb/")
   }else{
      open("https://goldnima.github.io/log-in-for-websitecoffee/")
   }

   
})

document.querySelector(".btn-reserve").addEventListener("click" , (e)=>{
   let date = document.querySelector("#date-input").value;
   let time = document.querySelector("#time-input").value;
   let name = document.querySelector("#name-input").value;
   let phone = document.querySelector("#phone-input").value;
   let email = document.querySelector("#email-input").value;

   localStorage.setItem("date of reserve" , date);
   localStorage.setItem("time of reserve" , time);
   localStorage.setItem("name of reserve" , name);
   localStorage.setItem("phone of reserve" , phone);
   localStorage.setItem("email of reserve" , email);

   Swal.fire({
      icon: "success",
      title: "success ...",
      text: "میز شما رزرو شد ( برای دیدن اطلاعات میز به قسمت حساب کاربری در بالای صفحه بروید ..."
  });
});

