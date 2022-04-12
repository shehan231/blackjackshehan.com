function main() {
    let confirm =  document.getElementById('mainResult').innerHTML;
    if (confirm == "YOU Lost (SUDU NONA)") {
        alert("Game Over ! pleas RETRY The Game");
    }else {
    let x;
    do {
    x = Math.floor(Math.random() * 100 /7.6);
    }while(x == 0);

    let currentTT = parseInt(document.getElementById('result').innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML = total;

    if (total < 21) {
        document.getElementById('mainResult').innerHTML = "Generate another card (S) ?"

    }else  if (total == 21) {
        document.getElementById('mainResult').innerHTML = "YOU Have Won SHEHAN :)"
        alert("congradulations SHEHAN !");
        document.getElementById('btn-res').style.display = "block"
    }else if (total > 21) {
        document.getElementById('mainResult').innerHTML = "YOU Lost (SUDU NONA)"
        alert("LOST :( Click RETRY Play The Game")
        document.getElementById('btn-res').style.display = "block"
    }
    
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 300;
    document.body.appendChild(img);
}
}

function restart() {
    location.reload();
}