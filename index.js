const reviews = [
    {
        id : 1,
        name : "Sara Jones",
        job : "UX Dveloper",
        img : "images/person-1.jpeg",
        text : "lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas architecto explicabo, dolores provident libero magni a dicta delectus adipisci id.",
    },
    {
        id : 2,
        name : "John Dae",
        job : "Web Developer",
        img : "images/person-2.jpeg",
        text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id : 3,
        name : "Susan Smith",
        job : "Software Dveloper",
        img : "images/person-3.jpeg",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        id : 4,
        name : "Charlie Johnson",
        job : "UI Developer",
        img : "images/person-4.jpeg",
        text : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})

