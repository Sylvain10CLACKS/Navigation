document.addEventListener("DOMContentLoaded", () =>{

const navElement=document.querySelector("nav");

navElement.innerHTML=`
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqiUq3VIRD-7MWIkPjndQbyBE5HNsGyA96Q&s" id="logo">
        <ul>
            <li><a id="home" href="index.html">Home</a></li>
            <li><a  id="about" href="Abaut.html">About</a></li>
            <li><a id="contact" href="contact.html">Contact</a></li>
        </ul>
`
const homeElement=document.getElementById("home");
const aboutElement=document.getElementById("about");
const contactElement=document.getElementById("contact");

if(window.location.pathname ==='/index.html'){
    homeElement.classList.add("active");
} else if(window.location.pathname==='/Abaut.html'){
    aboutElement.classList.add("active")
}else  {
    contactElement.classList.add("active");
}

})



