var wall, bullet;
//Create var for thickness,speed & Weight


function setup() 
{
	//Canvas width 1600 & Height 400
  	createCanvas(    );
    //Assign range to thickness,speed & Weight as given in specific task
	

	bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
	//Give white color to bullet
    

    wall=createSprite(1200, 200, thickness, height/2);  
    wall.shapeColor=color(230,230,230);
}


function draw() 
{
  background(0);  
  
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}
	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


