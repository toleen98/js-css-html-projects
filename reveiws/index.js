// the reveveiws
var persons =[
    {
      name: "Susan Smith",
      job: "WEB DEVELOPER",
      caption:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"  
    },
    {
        name: "Anna Johnson",
        job: "WEB DESIGNER",
        caption: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        name: "Peter Jones",
        job:"INTERN",
        caption: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
        name: "Bill Anderson",
        job: "THE BOSS",
        caption: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    }
];

//to be used with next and prev btns
var curentRev = 0;
var next = document.getElementById("right");
var prev = document.getElementById("left");
var random = document.getElementById("surprise");

next.addEventListener("click", function () {
    if (curentRev === persons.length - 1) {
        curentRev = 0;
    }
    else {
        curentRev++;
    }

    revChanger();
});

prev.addEventListener("click", function () {
    if (curentRev === 0) {
        curentRev = persons.length - 1;
    }
    else {
        curentRev--;
    }

    revChanger();
});

random.addEventListener("click", function () {
    curentRev = Math.floor(Math.random() * persons.length);

    revChanger();
})


function revChanger () {
    document.querySelector("img").src = persons[curentRev].img;
    document.getElementById("h4").innerHTML = persons[curentRev].name;
    document.getElementById("h5").innerHTML = persons[curentRev].job;
    document.querySelector("p").innerHTML = persons[curentRev].caption;
}