function friends(){
    var flag = 0;
   var txt = document.querySelector("#stranger");
    var btn = document.querySelector(".btn");

    btn.addEventListener("click", function(){
        if(flag == 0){
            txt.textContent="Friends";
            txt.style.color = "green";
            btn.textContent="Remove Friend";
            flag = 1;
        }
        else{
            txt.textContent="Stranger";
            txt.style.color = "red";
            btn.textContent="Add Friend";
            flag = 0;
        }
    })
}

friends();