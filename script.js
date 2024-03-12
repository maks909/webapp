let tg = window.Telegram.Webapp;

tg.expand();

tg.MainButton.text = "Changed Text";
tg.MainButton.setText("ChangedText1");
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "#143F6B"});
BigInt.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else{
        tg.MainButton.show()
    }
});
btn.addEventListener("click", function(){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide()
    }
    else{
        tg.MainButton.show()
    }
});
Telegram.Webapp.onEvent("mainButtonClicked", function(){
    tg.sendData("some string that we need to send");
});

let usercard = document.getElementById("usercard");

let profName = document.createElement("p");
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.last_name} (${tg.initDataUnsafe.user.language_code})`;

usercard.appendChild(profName);

let userid = document.createElement("p");
userid.innerText = `${tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid)
