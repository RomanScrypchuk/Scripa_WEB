$(function() {
    $.ajax({
        type: "Get",
        url : "/js/data.json",
        dataType : "json",
        success : function(data){
            var d = [];
            for(var i = 0; i < data.pos.length; i++){
                d.push(data.pos[i]);
            }
        $.plot("#myplot", 
        [{
            data: d,
            color: "#2ecc71",
            lines : {show: true},
            points : {show: true},
        }],
        {
            yaxis: {
                show: false,
            },
            xaxis: {
                tickSize: 1,
                tickLength: 0,
                show: false,
            },
            grid: {
                margin: 0,
                borderWidth : 0,
                minBorderMargin: 5,
            },
        });
    }})
});
