class Adivina {

    constructor() {
        this.num_random();
        this._intentos = 10
    }

    get intentos() {
        return this._intentos;
    }
    set intentos(intentos) {
        this._intentos = intentos;
    }
    set nmrandom(nmrandom) {
        this._nmrandom = nmrandom;
    }
    get nmrandom() {
        return this._nmrandom;
    }

    num_random() {
        let unknown_num = Math.floor(Math.random() * 2100) + 1
        this.nmrandom = unknown_num
        console.log("se ha creado numero random : ", this.nmrandom);
    }

    reset_game(){
        this._intentos=10
        this.num_random();
    }

    validar_numero(numero, box_message, tblist_numbers) {
        let mensaje = ""
        if (!isNaN(numero)) {
            let number = parseInt(numero)
            if (number === this.nmrandom) {
                mensaje = `Ganaste ¡felicidades adivinaste el número! : ${this.nmrandom}`
                this.show_message(box_message, "alert-primary", mensaje)
            } else if (number > this.nmrandom) {
                mensaje = "Número ingresado es muy alto"
                this.show_message(box_message, "alert-success", mensaje)
            } else {
                mensaje = "Número ingresa es muy bajo"
                this.show_message(box_message, "alert-danger", mensaje)
            }
            this.add_numer_in_table(tblist_numbers, number)
        } else {
            this.show_message(box_message, "alert-danger", "La entrada no es correcta")
        }
    }

    show_message(padre, tipo, content) {
        padre.innerHTML = ""
        let dvAlert = document.createElement("div")
        dvAlert.className = `alert ${tipo} alert-dismissible fade show text-center`;
        dvAlert.textContent = content;
        padre.appendChild(dvAlert)
    }

    hide_message(padre){
        padre.innerHTML = ""
    }

    add_numer_in_table(tblist_numbers, number) {
        tblist_numbers.innerHTML += `<td>${number}</td>`
    }

    reset_table_data(tblist){
        tblist.innerHTML=""
        // tblist.innerHTML="<tr></tr>"
    }
}