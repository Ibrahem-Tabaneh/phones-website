
var img0=document.getElementById('img0');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img5=document.getElementById('img5');

//var container=document.getElementsByClassName('container');
var container=document.getElementById('cc');

img0.onclick=()=>{
  
    phone(img0.src)
    colors('#000');
   
    
}

img1.onclick=()=>{

    phone(img1.src)
    colors('#247ec8');
   

}


img2.onclick=()=>{

    phone(img2.src)
    colors('#1e1e1e');

}

img3.onclick=()=>{
    phone(img3.src);
    colors('#c79b53');

}
img4.onclick=()=>{
    phone(img4.src);
    colors('#c82525');
}

function phone(phonee)
{
    img5.src=phonee;
    
}

function colors(color)
{
    container.style.background=color;
}
