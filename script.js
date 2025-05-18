let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload=()=>{
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};
function orderRecord(){
    var name = document.getElementById("inputName").value;
    var dish = document.getElementById("inputDish").value;
    var choice = document.getElementById("inputChoice").value;
    var phone = document.getElementById("inputPhone").value;
    var message = document.getElementById("inputMessage").value;

    if(name == "" && dish == "" && phone == ""){
        alert("Please Give Basic Details.");
    }else{
        alert("Your details has been Ordered." + "\n-----Bill-----" + "\nName: " + name + "\nDish: " + dish + "\nchoice(Veg / Non): " + choice + "\nPhone number: " + phone + "\nMessage: " + message).reset;
        return;
    }
}

