function finishLesson(lesson) {

	alert("恭喜，你已经完成HBuilder入门课程。你可以用其它开发工具试试写这几十行代码，至少比HBuilder慢5倍！更重要的是，你很难找到这么爽的编码体验。");
}
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var arraystr = ["喜，你已经完","以用其它开发工具","Builder慢5倍！更重要的是，你很难找到这","发工具试试写这几十行代码"];
function getQuote() {
	var str = "aaa";
	
	
	time = rnd(0,arraystr.length);
	str = arraystr[time];
	
	
	 var color = Math.floor(Math.random() * colors.length);
       
	 $(".popWindowText").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
        $('#text').html(str);
        });
}
var time = 0;

function rnd(min,max){
  var tmp=min;
  if(max<min){min=max;max=tmp;}
  return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function() {
	getQuote();
//	document.getElementById("new_quote").addEventListener("click", getQuote, true);
	$('#new_quote').click(function(){
			getQuote();
  });
  
	//	$('#new_quote').addEventListener('click',getQuote(),false)
});