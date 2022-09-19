
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