var color=""
var width=0
var radius=0
var draw=getContext("2d")
var mouseEvent=""
var canvas=document.getElementById("myCanvas")
var current_touch_x, current_touch_y, last_touch_x, last_touch_y
current_touch_x=0
current_touch_y=0
last_touch_x=0
last_touch_y=0
var last_position_of_x, last_position_of_y;
var current_position_of_mouse_y=0
var current_position_of_mouse_x=0

canvas.addEventListener=("mousedown", my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value
    width=document.getElementById("width").value
    radius=document.getElementById("radius").value
    var mouseEvent="mousedown"
}
canvas.addEventListener=("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}    
canvas.addEventListener=("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener=("mousemove", my_mousemove)
function my_mousemove(e){
      current_position_of_mouse_x =e.clientX-canvas.offsetLeft
      current_position_of_mouse_y=e.clientY-canvas.offsetTop
      if (mouseEvent == "mousedown") {
       draw.beginPath()
       draw.strokeStyle-color
       draw.lineWidth=width
       draw.moveTo(last_position_of_x,last_position_of_y)
       draw.lineTo(current_position_of_mouse_y,current_position_of_mouse_x)
       draw.stroke()
      }
      
    last_position_of_x=current_position_of_mouse_x
    last_position_of_y=current_position_of_mouse_y
} 

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
    last_touch_x=e.touches[0].clientX-canvas.offsetLeft
    last_touch_y=e.touches[0].clientY-canvas.offsetTop
}
    

canvas.addEventListener("touchmove", "my_touchmove")
function my_touchmove(e){
    current_touch_x=e.touches[0].clientX - canvas.offsetLeft
    current_touch_y=e.touches[0].clientY - canvas.offsetTop
    draw.beginPath()
    draw.strokeStyle-color
    draw.lineWidth=width
    draw.moveTo(last_touch_x,last_touch_y)
    draw.lineTo(current_touch_y,current_touch_x)
    draw.stroke()
    
    last_touch_x=current_touch_x
    last_touch_y=current_touch_y
}


function clear(){
    canvas.clearRect(0, 0, canvas.width, canvas.height)
}