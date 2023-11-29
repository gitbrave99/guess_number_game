var box_message = document.querySelector("#limessage");
var tblist_numbers = document.querySelector("#tb_list_numbers tr")
var span_attemps = document.querySelector("#attemps")
const form_guess = document.querySelector("#formguess")
var cAdivinar = new Adivina()

window.addEventListener("DOMContentLoaded", (ev) => {
    var inputNumber = document.querySelector("#in_number")
    span_attemps.textContent = cAdivinar.intentos
    form_guess.addEventListener("submit", (evt) => {
        evt.preventDefault();
        if (inputNumber.value.length < 1) {return;}

        if (cAdivinar.intentos >= 1) {
            console.log(cAdivinar.intentos);
            console.log(inputNumber.value);
            cAdivinar.validar_numero(inputNumber.value, box_message, tblist_numbers);
            cAdivinar.intentos -= 1
            span_attemps.textContent = cAdivinar.intentos
            console.log("itentos= " + cAdivinar._nmrandom);
        }
        if (cAdivinar.intentos == 0 && parseInt(cAdivinar._nmrandom) != parseInt(inputNumber.value)) {
            cAdivinar.show_message(box_message, "alert-danger", "Se agotaron los intentos, suerte para la próxima")
        }

        inputNumber.value = ""
    })

    document.getElementById("#btnResetGame").addEventListener("click",()=>{
        cAdivinar.reset_game()
        span_attemps.textContent = cAdivinar.intentos
        cAdivinar.reset_table_data(tblist_numbers)
        cAdivinar.hide_message(box_message)
        inputNumber.value = ""
    });

})