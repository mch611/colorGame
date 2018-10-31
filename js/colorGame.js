
// 保存ID为colorDisplay的标签对象
var colorDisplay = document.getElementById("colorDisplay");
// 保存ID为message的标签对象
var messageDisplay = document.getElementById("message");
// 保存ID为reset的标签对象
var resetButton =document.getElementById("reset");
// 保存第一个h1标签对象
var h1 =document.getElementsByTagName("h1").firstChild;
// 保存id为square的标签对象
var squares = document.getElementsByClassName("square");
// 保存被猜的颜色
var pickedColor;
// 颜色square的数目
var colorNumber = 6;
// 保存颜色（rgb表示字符串）的数组
var colors = [];
var n=document.getElementById("container").getElementsByTagName('div');

// 游戏初始化
reset();

// 改变6个square的颜色（rgb表示字符串）
function changeColors() {
	"use strict";
	for(var i=0 ; i<n.length ; i++){
		squares[i].style.backgroundColor = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
	}
	pickedColor=squares[parseInt(Math.random()*n.length)];
	//alert(pickedColor.style.backgroundColor);
}

//用户单击颜色square的响应函数
function squareClicked(obj) {
	"use strict";
	for(var i=0;i<n.length;i++){
		squares[i].index=i;
		squares[i].onclick=function(){
			var k=this.index;
			messageDisplay.style.display="inline-block";
			//resetButton.style.position="relative";
				resetButton.style.right=0+"px";
			//alert(k);
			if(colors[k]==pickedColor.style.backgroundColor){
				//alert("true");
				messageDisplay.innerHTML="Correct!";
				resetButton.innerHTML="Play Again?";
				for(var j=0;j<n.length;j++){
					squares[j].style.backgroundColor=pickedColor.style.backgroundColor;
					colors[j]=pickedColor.style.backgroundColor;
				}
			}
				
			else{
				//alert("false");
				
				squares[k].style.backgroundColor="black";
			}
		};
	}
	

}

// 对游戏进行初始化
function reset() {
	"use strict";
	changeColors();
	pickColor();
	randomColor();
	messageDisplay.style.display="none";
	messageDisplay.innerHTML="Try again!";
	resetButton.innerHTML="New Colors";
	resetButton.style.left=0+"px";
}

// 返回本次游戏的被猜的颜色（rgb表示字符串）
function pickColor() {
	"use strict";
	colorDisplay.innerHTML = pickedColor.style.backgroundColor;
}

// 返回随机颜色的rgb表示字符串
function randomColor() {
	"use strict";
	for(var i=0 ; i<n.length ; i++){
		colors[i] = squares[i].style.backgroundColor;
	}
	//alert(colors);
}
/*
// 产生num个颜色（rgb表示字符串）元素的数组
function generateColors(num) {
	"use strict";
}
*/