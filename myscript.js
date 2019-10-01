/* 
 *  Created on : 30-Sep-2019
 *  Author: Jacob Wenger
 */

 var x=0;
 var y=0;
    
function setup(){
    var canvas = createCanvas(150,150);
    //move the canvas to sketch-holder
    canvas.parent('sketch-holder');
   //set framerate
   
}

function draw(){
    
    //lets set the background to white (255)
    background(255);
    //as a test I'll use the color red
    fill(255,0,0);
    //as a test I want to draw a rectangle
    rect(x,y,10,10);
    
    
    fill(255,255,0);
    rect(x-10,y+10,10,10);
    
    fill(255,255,255);
    rect(x-20,y+20,10,10);
    
    if(x !== 240){
         x=x+1;
        
    } else {
        
        x=-20;
    }
    
}

