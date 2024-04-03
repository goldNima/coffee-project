
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



function setDatainLocal1 (){

let product1 = "COFFEE";

let jsonContent1 =  JSON.stringify(product1);
localStorage.setItem("item1" , jsonContent1);


setDatainLocal1()
}

function getData1 (){
   
let savedContent = localStorage.getItem("item1");


document.querySelector(".product11").innerHTML = savedContent;


}
getData1()

document.querySelector(".shop-logo-product").addEventListener("click" , setDatainLocal1);



function setDatainLocal2 (){

   let product2 = "Nescaffee";
   
   let jsonContent2 =  JSON.stringify(product2);
   localStorage.setItem("item2" , jsonContent2);
   
   
   setDatainLocal2()
   }
   
   function getData2 (){
      
   let savedContent2 = localStorage.getItem("item2");
   
   
   document.querySelector(".product22").innerHTML = savedContent2;
   
   
   }
   getData2()
   
   document.querySelector(".shop-logo-product2").addEventListener("click" , setDatainLocal2);



   function setDatainLocal3 (){

      let product3 = "chapochino";
      
      let jsonContent3 =  JSON.stringify(product3);
      localStorage.setItem("item3" , jsonContent3);
      
      
      setDatainLocal3()
      }
      
      function getData3 (){
         
      let savedContent3 = localStorage.getItem("item3");
      
      
      document.querySelector(".product33").innerHTML = savedContent3;
      
      
      }
      getData3()
      
      document.querySelector(".shop-logo-product3").addEventListener("click" , setDatainLocal3);


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
      open("http://127.0.0.1:5500/prof.html")
   }else{
      open("http://127.0.0.1:5500/content.html")
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

