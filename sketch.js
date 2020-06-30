var fp;
var database;
var tp;

function setup() {


  createCanvas(400,400);
  
  database=firebase.database();
  fp=new firstpage ();
  var tp = new thirdpage();
  tp.myFunction();

}

function draw() {
  background(255,255,255);
  
  fp.display();
 
}