
function light()
{
    h = new Date().getHours();
    if(h >= 7)
    {
         document.body.style.backgroundColor = "rgb(250, 229, 229)";
         document.body.style.backgroundImage = "url('h.png')";
         document.getElementById('webh').style.color = "lightblue";
        console.log("Hour is greater than "+ h)
    }
     if(h >= 18)
    {
        document.body.style.backgroundImage = "url('img/images.png')";
        console.log("Hour is greater than 18")
    }

}
light();
