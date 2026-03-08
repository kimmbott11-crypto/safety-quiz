let questions=[]
let current=null

fetch("questions.json")
.then(res=>res.json())
.then(data=>{
questions=data
nextQuestion()
})

function nextQuestion(){

let index=Math.floor(Math.random()*questions.length)

current=questions[index]

document.getElementById("question").innerText=current.question
document.getElementById("answer").innerText=current.answer
document.getElementById("answer").style.display="none"

}

function showAnswer(){
document.getElementById("answer").style.display="block"
}

function wrong(){

let wrongList=JSON.parse(localStorage.getItem("wrong")||"[]")

wrongList.push(current)

localStorage.setItem("wrong",JSON.stringify(wrongList))

alert("오답 저장됨")
}