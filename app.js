const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id:1,
        tittel:"AIR FORCE",
        price: 199,
        colors: [
            {
             code: "black",
             img: "img/air.png"
            },
            {
             code: "darkblue",
             img: "img/air2.png"
            },
        ],
    },
    {
        id:2,
        tittel:"AIR JORDAN",
        price: 149,
        colors:[
            {
                code:"lightgray",
                img: "img/jordan.png",
            },
            {
                code:"lightgreen",
                img:"img/jordan2.png",
            },

        ],
    },
    {
        id:3,
        tittel:"Blazzer",
        price:109,
        colors:[
            {
                code:"white",
                img:"img/blazer.png",
            },
            {
                code:"green",
                img:"img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        tittel:"Creator",
        price:129,
        colors:[
            {
            code:"black",
            img: "img/crater.png",
            },
            {
                code:"lightgray",
                img:"img/crater2.png",
            },
        ],
    },
    {
        id:5,
        tittel:"Hippie",
        price:99,
        colors:[
            {
            code:"gray",
            img: "img/hippie.png",
            },
            {
                code:"black",
                img:"img/hippie2.png",
            },
        ],

    },
];

let choosenProduct = products[0];

const currentProductImg    =document.querySelector(".productImg");
const currentProductTittel =document.querySelector(".productTittle");
const currentProductPrice  =document.querySelector(".productPrice");
const currentProductColors =document.querySelectorAll(".color");
const currentProductSizes  =document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        // const trans= (-100 * index);
        // console.log(trans);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // console.log(item,index);
        //change the choosen product
        choosenProduct = products[index]
        //change text of current product
       // console.log("id 102",currentProductTittel.textContent);
        currentProductTittel.textContent= choosenProduct.tittel;
        currentProductPrice.textContent="$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
     // assign new colors  
    // console.log("id 107",currentProductColors[0]);
        currentProductColors.forEach((color,index) =>{
           
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

// ----------------------------------------my edits---------------------------
const toNav =document.querySelectorAll(".tonav");
// console.log(toNav)
toNav.forEach((item, index) => {
    item.addEventListener("click", () => {
        var elem = document.getElementById("slider");
                elem.scrollIntoView();
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        choosenProduct = products[index]
        currentProductTittel.textContent= choosenProduct.tittel;
        currentProductPrice.textContent="$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
     // assign new colors  
     
        currentProductColors.forEach((color,index) =>{
           
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

// -------------------show image based on selected product colors-----------------

currentProductColors.forEach((color,index) => {
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
    })
})
// -----------------sizes events-------------------

currentProductSizes.forEach((size,index) =>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black";    
        })
        size.style.backgroundColor="black"
        size.style.color="white";
    })
})
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() =>{
    payment.style.display="flex";
})

close.addEventListener("click",() =>{
    payment.style.display="none";
})
