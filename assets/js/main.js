
var menuIcon = document.getElementById("menu_icon");
var navDropDown = document.getElementById("navdropdown");
var nav2 = document.getElementById("nav2");
var body = document.getElementById("body")
var navbar = document.getElementById("navbar")
var line1 = document.getElementById("line1")
var line2 = document.getElementById("line2")
var line3 = document.getElementById("line3")
var agentButton = document.getElementById("agent-button")
var modal = document.getElementById("modal")
var closeModal = document.getElementById("close")
var account = document.getElementById("account")
var item1 = document.getElementById("item1")
var item2 = document.getElementById("item2")
var item3 = document.getElementById("item3")
var item4 = document.getElementById("item4")
var item5 = document.getElementById("item5")



// navbar
var open = false;
menuIcon.addEventListener("click", function(){

    if(open == false){
        navDropDown.style.display = "block"
        nav2.style.display = "block"
        navDropDown.style.backgroundColor = "#fef9e6"
        item1.style.border = "1px solid #333"
        item2.style.border = "1px solid #333"
        item3.style.border = "1px solid #333"
        item4.style.border = "1px solid #333"
        // item5.style.border = "1px solid #333"
        // item5.style.marginBottom = "50px"


        // dropDown.style.transition = "all 4s ease-in"
        body.style.opacity = "0.85"
        navbar.style.backgroundColor = "#fef9e6"
        line1.style.transform = "translateY(2px) rotate(-45deg)"
        line2.style.display = "none"
        line3.style.transform = "translateY(-5px) rotate(45deg)"
        // account.style.display = "none"
        open = true
    }else{
        navDropDown.style.display = "none"
        nav2.style.display = "none"
        body.style.opacity = "1"
        navbar.style.backgroundColor = "#fef9e6"
        line1.style.transform = "translateY(0px) rotate(0deg)"
        line2.style.display = "block"
        line3.style.transform = "translateY(0px) rotate(0deg)"
        open = false
        
    }


})


// agentbutton modal

agentButton.addEventListener("click", function(){
    modal.style.display = "block"

})

closeModal.addEventListener("click", function(){
    modal.style.display = "none"
})



// dropdown select

var button = document.getElementById("button")
var dropDown = document.getElementById("dropdown")
var options = document.querySelectorAll(".option")
var selectLabel = document.querySelector("#select-label")

button.addEventListener("click", function(e){
    e.preventDefault();
    toggleHidden();
})

function toggleHidden() {
    dropDown.classList.toggle("hidden")
    
}

options.forEach(function(option) {
    option.addEventListener("click", function(e){
        setSelectTitle(e);
    })
    
});

function setSelectTitle(e){
    const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    selectLabel.innerText = labelElement;
    // console.log(labelEleme-nt)
    toggleHidden();
}




// windows.onClick = function(e){
//     if(e.target == modal){
//         modal.style.display = "none"
//     }
// }


// var modalBox = document.getElementById("modal-box")
// document.addEventListener('click', function(event) {
//     // const modal = document.getElementById('modal');
  
//     if (event.target.closest("modal")) return
      
//     modal.classList.add("hidden")
//   });
  

// window.onload = function()
// {
//     var hideview = document.getElementById("modal")
//     document.onclick = function(modal)
//     {
//         if(div.target.id !=="modal")
//         {
//             hideview.style.display = "none"
//         }
//     }
// }