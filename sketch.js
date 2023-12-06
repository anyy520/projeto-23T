const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// 3
var btn2;
//5  Vamos criar uma variável de ângulo e defini-la com um valor aleatório de 60
var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    // usada para fazer um corpo quicar no chão +=+
    restitution: 0.95,
    // atrito de ar + = -
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  // 3 Crie um botão na tela e anexe essas funções ao botão
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
// 4. Verifique a instrução abaixo no arquivo sketch.js e altere os valores do retângulo.
  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  // 6 Adicione o código para girar o objeto dentro da função draw(). 
  Matter.Body.rotate(ground1,angle);
  //8  Gire o solo adicionando as funções push() e pop() dentro da função draw():

  push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  // 7 . Aumente o ângulo da rotação em 0.1 graus dentro da função draw.
  angle +=0.1;

 
// Exibe a bola passando sua posição na função elipse.
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
 
console.log(ground.position.y);

  
  
}
// 1. Crie uma função chamada vForce(), pois esta função aplicará força na direção vertical.
function vForce()
{
// 2. Use a função em Matter.js para aplicar força ao corpo
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

