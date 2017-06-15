function finishLesson(lesson) {

	alert("恭喜，你已经完成HBuilder入门课程。你可以用其它开发工具试试写这几十行代码，至少比HBuilder慢5倍！更重要的是，你很难找到这么爽的编码体验。");
}

function getInfo() {

	$.ajax({
		url: "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=719eb318cac14d55e0a3b20204646700",
		type: 'GET',
		dataType: 'JSONP', //here
		success: function(data) {
			console.log(data);

			var line = $("#row_list").clone();
			var result = data.result.today;

			line.find("#row_city").text(result.city);
			line.find('#row_date_y').text(result.date_y);
			line.find('#row_week').text(result.week);
			line.find('#row_temperature').text(result.temperature);
			line.find('#row_weather').text(result.weather);
			line.find('#row_wind').text(result.wind);
			line.find('#row_dressing_index').text(result.dressing_index);
			line.find('#row_dressing_advice').text(result.dressing_advice);
			line.appendTo("#row_box");
		}
	});
}
$(document).ready(function() {
	//	getInfo();
	$('#request_weather').click(function() {
		getInfo();
	});
});