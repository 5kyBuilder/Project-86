var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

blockimage_Obj = "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        blockimage_Obj = Img;

        blockimage_Obj.scaleToWidth(700);
        blockimage_Obj.scaleToHeight(510);
        blockimage_Obj.set({
            top:0,
            left:0
        });
        canvas.add(blockimage_Obj);
    });	
}

function playSound(){
    x.play();	
}
