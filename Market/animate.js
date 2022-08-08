var arr = new Array("usdt.png","tron.png","ngn.png","core.png");
var i =1;
var ref;
const images = () =>
{
    document.images['img'].src = arr[i];
    i++;
    if(i>3)
    i=0;
}
const start = () =>
{
    ref =  setInterval('images()',1000);
}

start();