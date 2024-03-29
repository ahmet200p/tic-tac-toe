let kutu= document.querySelectorAll(".kutu")
let sira="X"
let isGameOver
kutu.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click", ()=> {
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML=sira;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    } )
})
function changeTurn(){
    if(sira==="X"){
        sira = "O";
        document.querySelector(".bg").style.left= "85px";

    }
    else{
        sira = "O";
        document.querySelector(".bg").style.left= "0";
    }
    
}
function cheakWin(){
    let Kazanma_sekilleri= [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    for (let i = 0; i< Kazanma_sekilleri.length; i++){
            let v0 = kutu[Kazanma_sekilleri[i][0]].innerHTML;
            let v1 = kutu[Kazanma_sekilleri[i][1]].innerHTML;
            let v2 = kutu[Kazanma_sekilleri[i][2]].innerHTML;
            if(v0 != "" && v0 === v1 && v0 === v2){
                isGameOver = true;
                document.querySelector("#results").innerHTML = sira + " win";
                document.querySelector("#play-again").style.display = "inline"
                for(j = 0; j<3; j++){
                    kutu[Kazanma_sekilleri[i][j]].style.backgroundColor = "pruple"
                    kutu[Kazanma_sekilleri[i][j]].style.color = "blue"
                }
    
            }
    }
}
function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        kutu.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}
document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    sira = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    kutu.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})