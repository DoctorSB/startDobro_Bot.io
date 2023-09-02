let telegram = window.Telegram.WebApp;

telegram.expand();

telegram.MainButton.text_color = "#FFFFFF";
telegram.MainButton.color = "#2BD455";

let mainButton = document.getElementById("confirmButton");

mainButton.addEventListener("click", function () {
    if (telegram.MainButton.isVisible) {
        telegram.MainButton.hide();
    }
    else {
        telegram.MainButton.setText("Подтверждено!");
        telegram.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClick", function () {});

