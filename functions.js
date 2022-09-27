
let toTop = document.querySelector('#toTop');

window.onscroll = function(){scrollFunction()}

function scrollFunction(){
    if(document.body.scrollTop> 20||document.documentElement.scrollTop > 20){
        toTop.style.display="block"
        // toTop.style.width="20rem"
    }else{
        toTop.style.display="none"
        // toTop.style.width="0px"
    }
}

toTop.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}