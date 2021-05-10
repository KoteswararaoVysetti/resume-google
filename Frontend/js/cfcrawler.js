var API="https://codeforces.com/api/";

$(document).ready(function(){
$("#main").show();
$("#crawler").hide();
$("#but").click(function(){
    var h=$("#handle").val();
    if(!h){
        alert("Enter a Value");
        return;
    }
    $("#main").hide();
    $("#crawler").show();
    var api=API+"user.info?handles="+h;
    console.log(api);
    $.get(api,function(data,status){
    var x="<h1>Hello "+h+"</h1>";
    $("#hello").html(x);
    api=API+"user.status?handle="+h;
    console.log(api);
    $.get(api,function(data,status){
        var verdicts={};
        for(var i = 0 ; i < data.result.length ; i++)
        {
            if(verdicts[data.result[i].verdict] === undefined)
            verdicts[data.result[i].verdict] = 0 ;
            verdicts[data.result[i].verdict]++ ;
        }
        x = "The Verdicts of " + h + "<br> &nbsp &nbsp";
        x += "<table width = 25%>" ;
        x += "<tr><th>Verdict</th><th>Count</th></tr>" ;
        var inword = false, innum = false ;
        var ver = "" ;
        var cnt = "" ;
        var vr=[];
        var k=[];
        var JSN = JSON.stringify(verdicts);
        for(var i = 0 ; i < JSN.length ; i++)
        {
            if(JSN[i] == "\"")
            {
                if(!inword)
                x += "<tr>" ; 
                inword ^= true ;
                if(ver != "")
                {
                    x += "<td class = \"bor\" >" + ver + "</td>" ;
                    k.push(ver);
                    ver = "" ;
                }
            }
            else if(JSN[i] == ":") innum = true ;
            else if(JSN[i] == "," || JSN[i] == "}")
            {
                innum = false ;
                x += "<td class = \"bor\" >" + cnt + "</td></tr>" ;
                k.push(cnt);
                vr.push(k);
                delete k;
                cnt = "" ;
            }
            else if(innum) cnt += JSN[i] ;
            else if(inword) ver += JSN[i] ;
        }
        x += "</table>" ;
        $("#table").html(x);
        // chart begining
        

        //
    });

    }).fail(function(xhr,status){
        alert("Error Occured !!!");
        $("#main").show();
        $("#crawler").hide();
        return;
    });    
});

});