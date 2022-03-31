function preload(){

}
function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,275);
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}
function draw() {
    image(video,0,0,640,480);
    tint(tint_color);

}
function take_snapshot() {
    save("iusedfilterapp.png")
}

function applyfilter() {
    tint_color=document.getElementById("color_name").value;
}