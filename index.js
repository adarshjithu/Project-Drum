function w(){
    var audio=new Audio('sounds/crash.mp3')
    audio.play()
    document.getElementById('w').style.background='blue'
    setTimeout(function(){
        document.getElementById('w').style.background='white'
     
    },100)
  
    
}
function a(){
    var audio=new Audio('sounds/kick-bass.mp3')
    audio.play()
    document.getElementById('a').style.background='blue'
    setTimeout(function(){
        document.getElementById('a').style.background='white'
     
    },100)
}

function s(){
    var audio=new Audio('sounds/tom-1.mp3')
    audio.play()
    document.getElementById('s').style.background='blue'
    setTimeout(function(){
        document.getElementById('s').style.background='white'
     
    },100)
}

function d(){
    var audio=new Audio('sounds/tom-1.mp3')
    audio.play()
    document.getElementById('d').style.background='blue'
    setTimeout(function(){
        document.getElementById('d').style.background='white'
     
    },100)
}



function j(){
    var audio=new Audio('sounds/tom-2.mp3')
    audio.play()
    document.getElementById('j').style.background='blue'
    setTimeout(function(){
        document.getElementById('j').style.background='white'
     
    },100)
}
function k(){
    var audio=new Audio('sounds/tom-3.mp3')
    audio.play()
    document.getElementById('k').style.background='blue'
    setTimeout(function(){
        document.getElementById('k').style.background='white'
     
    },100)
}
function l(){
    var audio=new Audio('sounds/tom-4.mp3')
    audio.play()
    document.getElementById('l').style.background='blue'
    setTimeout(function(){
        document.getElementById('l').style.background='white'
     
    },100)
}



 
document.addEventListener('keypress',(e)=>{
if(e.key==='w'){
    var audio=new Audio('sounds/crash.mp3')
    audio.play()

}
if(e.key==='a'){
    var audio=new Audio('sounds/kick-bass.mp3')
    audio.play()   
}
if(e.key==='s'){
    var audio=new Audio('sounds/snare.mp3')
    audio.play()   
}
if(e.key==='d'){
    var audio=new Audio('sounds/tom-1.mp3')
    audio.play()   
}
if(e.key==='j'){
    var audio=new Audio('sounds/tom-2.mp3')
    audio.play()   
}
if(e.key==='k'){
    var audio=new Audio('sounds/tom-3.mp3')
    audio.play()   
}
if(e.key==='l'){
    var audio=new Audio('sounds/tom-4.mp3')
    audio.play()   
}
})