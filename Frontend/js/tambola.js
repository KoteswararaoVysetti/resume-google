
var numbers = [],br=0,marked=[];
for(let i=1;i<=90;i++)numbers.push(i);

function display(){


    var t = "<tr>", x = "";

    for(let i=1;i<=90;i++){
        if(i%10==0){
            x += "<td align='center' id='"+i+"' >"+i+"</td>";
            t+=x;
            t+="</tr>"
            if(i!=90)t +="<tr>";
            x = "";
        }
        else x += "<td align='center' id='"+i+"'  >"+i+"</td>";
    }
    
    $("#board").css({
        "background-color" : "white",
    })
    $('td').css('border','2px solid black')
    $("#board").html(t);

}


function addNum(n){
    marked.push(n);
    var b="";
    for(let i=0;i<marked.length;i++){
        b+=marked[i]+' ,';
    }
     $("#order").html("<p>ORDER : " + b +" </p>");
    $('#'+n).css({
        "background-color" : "rgb(102, 213, 247)"
    });
}



$(document).ready(()=>{

    display();
  
    $("#start").click(()=>{
        br=0;

        var time = setInterval(()=>{
            if(br) {
                clearInterval(time);
            }
            if(numbers.length==0){
                alert("Game is Completed !!");
                alert("Press Clear Board, to start a New Game")
                clearInterval(time);
            }
            if(br) {
                clearInterval(time);
            }
            var n = numbers[ Math.floor(Math.random()*numbers.length) ]
            if(numbers.includes(n)){
                $('#pp').html(n);
                var ind = numbers.indexOf(n);
                numbers.splice(ind,1);
                
                addNum(n.toString());
    
            }
            if(br) {
                clearInterval(time);
            }
        }, 2500);
if(br) return;

    })


    $("#clear").click(()=>{

        for(let i=1;i<=90;i++)numbers.push(i);
        $('#pp').html('');
        $('td').css({
            "background-color" : "white"
        });
        br=1;
$('#order').html('');
marked=[];
    })
    $("#stop").click(()=>{
        br=1;
    })


})