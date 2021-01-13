var b1, b2;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=4;
  b1.floors=23;
  
  b2=new Building();
  b2.position=1;
  b2.floors=12;
  
  b3=new Building
  b3.position=3;
  b3.floors=20;

  b4=new Building
  b4.position=5;
  b4.floors=27;
 
  b5=new Building
  b5.position=6;
  b5.floors=30;
  
  b6=new Building
  b6.position=2;
  b6.floors=15;
  
  b7=new Building
  b7.position=7;
  b7.floors=35;
  
  b8=new Building
  b8.position=8
  b8.floors=39
  
  b9=new Building
  b9.position=9;
  b9.floors=42;
  
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
}