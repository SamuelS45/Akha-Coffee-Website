
let toTop = document.getElementById('toTop');

window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop> 20||document.documentElement.scrollTop > 20){
        toTop.style.display="block"
    }else{
        toTop.style.display="none"
    }
}

toTop.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let ham = document.querySelector('.hamburger')
let hamMenu = document.querySelector('.ham-menu')

let active = false
ham.addEventListener('click', ()=>{
    active = !active
    if(active == true){

        ham.setAttribute('class', 'hamburger-rotated')
        // ham.setAttribute('id', 'active')
        
        hamMenu.style.width = '20rem'
        // hamMenu.style.display = 'flex'
    }else if(active == false){
        
        ham.setAttribute('class', 'hamburger')
        // ham.setAttribute('id', 'not')
        // hamMenu.style.display = 'none'
        hamMenu.style.width = '0px'
        
    }
})
// if(ham)

