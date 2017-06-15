var minFunction = {
	Bind: function(){
		$('#request_weather').click(function() {
			minFunction.getData($(this).attr("class"));
		});
	},
	getData: function(fromName){
		CallAjax("http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=719eb318cac14d55e0a3b20204646700",function(data){
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
			
			
//			console.log(fromName);
//			console.log(result.data.abc[0]);
//			$("." + fromName).html("" + result.data.abc[0].huan + "");
		});
	},
	iniTiation: function(){
		this.Bind();
	}
}

$(function(){
	minFunction.iniTiation();
});
//
function CallAjax(url,callBack) {
	$.ajax({
		type:"get",
		dataType: 'JSONP', //here
		url:url,
		success:function(result){
			console.log("success:" +result);
			return callBack(result);
		},
		error:function(e){
			console.log(e);
		}
	});
}
//