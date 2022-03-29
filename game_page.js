player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question").innerHTML="Question Turn : "+ player1_name;
document.getElementById("answer").innerHTML="Answer Turn : "+ player2_name;
Answer_Turn="player2";
Question_Turn="player1";
function check(){
get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
console.log("answer lowercase is" + answer);
if(answer==word){
    if(Answer_Turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    }
if(Question_Turn=="player1"){
    Question_Turn="player2";
    document.getElementById("question").innerHTML="Question Turn : "+ player2_name;
    }
    else{
        Question_Turn=="player1"
        document.getElementById("question").innerHTML="Question Turn : "+ player1_name;
    }
    if(Answer_Turn=="player1"){
        Answer_Turn="player2";
        document.getElementById("answer").innerHTML="Answer Turn : "+ player2_name;
        }
        else{
            Answer_Turn="player1";
            document.getElementById("answer").innerHTML="Answer Turn : "+ player1_name;
        }
        document.getElementById("output").innerHTML="";
}
