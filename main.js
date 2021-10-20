canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["https://scx2.b-cdn.net/gfx/news/hires/2020/1-curiositymar.jpg","https://www.bing.com/images/search?view=detailV2&ccid=oMHhknEc&id=E3F5A45D5513CE8046B3832455621ECCA2DE0510&thid=OIP.oMHhknEcDNmBXRlEYlq7HwHaEK&mediaurl=https%3a%2f%2fmars.nasa.gov%2fsystem%2fnews_items%2fmain_images%2f8371_PIA22486_1280x.jpg&exph=720&expw=1280&q=nasa+mars+pictures&simid=608053698672355286&FORM=IRPRST&ck=EAD9EFB4BE05DBD654E92F767B70078F&selectedIndex=5", "https://th.bing.com/th/id/OIP.lJneKLHbacLUukyfoLJNvgHaDL?w=277&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://www.bing.com/images/search?view=detailV2&ccid=cJzEP%2f5S&id=BB169DB2E646FAC14FEDCB48EAAF525F7EB81CEE&thid=OIP.cJzEP_5SjB_c6W7PdPWeuAHaF8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.709cc43ffe528c1fdce96ecf74f59eb8%3frik%3d7hy4fl9Sr%252bpIyw%26riu%3dhttp%253a%252f%252fcdn.sci-news.com%252fimages%252fenlarge6%252fimage_7388_1e-Curiosity.jpg%26ehk%3ddEXlZhARMTgRxP%252fmVzblbtKUrJdVaU0DhaSS%252fazWRSA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1542&expw=1920&q=nasa+mars+pictures&simid=608028362658900204&FORM=IRPRST&ck=32697AAF0D76E275AF199C975A6DB7BE&selectedIndex=2"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	