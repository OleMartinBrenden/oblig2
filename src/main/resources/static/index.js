
let Billetter = [];
function kjopBilletter() {
    document.getElementById("personRegister").innerHTML ="";

    let riktig = true;
    let film = document.getElementById("film")
    let antall = document.getElementById("antall");
    let fornavn = document.getElementById("fornavn");
    let etternavn = document.getElementById("etternavn");
    let telefonnr = document.getElementById("telefonnr");
    let Epost = document.getElementById("Epost");


    if (antall.value<1) {
        document.getElementById("antallFeil").style.color = "red"
        document.getElementById("antallFeil").innerHTML = "Må skrive noe inn i antallet"
        riktig =false;
    }
    if (fornavn.value.length <1){
        document.getElementById("feilFornavn").style.color = "red"
        document.getElementById("feilFornavn").innerHTML = "Må skrive noe inn i fornavnet"
        riktig = false;
    }
    if (etternavn.value.length<1){
        document.getElementById("feilEtternavn").style.color = "red"
        document.getElementById("feilEtternavn").innerHTML= "Må skrive noe inn i etternavnet"
        riktig = false;
    }
    if (telefonnr.value.length < 8){
        document.getElementById("feilTelefonnr").style.color = "red"
        document.getElementById("feilTelefonnr").innerHTML= "Må skrive noe inn i telefonnr"
        riktig = false;
    }
    if (Epost.value.length < 1){
        document.getElementById("feilEpost").style.color = "red"
        document.getElementById("feilEpost").innerHTML= "Må skrive noe inn i epost"
        riktig = false;
    }









    if(riktig===true) {
        const person = {

            film: film.value,
            antall: antall.value,
            fornavn: fornavn.value,
            etternavn: etternavn.value,
            telefonnr: telefonnr.value,
            Epost: Epost.value
        }


        Billetter.push(person);
        antall.value = ""
        film.value = null
        fornavn.value = ""
        etternavn.value = ""
        telefonnr.value = ""
        Epost.value = ""
        document.getElementById("antallFeil").innerHTML = ""
        document.getElementById("feilFornavn").innerHTML = ""
        document.getElementById("feilEtternavn").innerHTML = ""
        document.getElementById("feilTelefonnr").innerHTML = ""
        document.getElementById("feilEpost").innerHTML = ""

        let skrivUt = "<table><tr>" +
            "<th>Film </th><th>Antall </th><th>Fornavn </th><th>Etternavn </th><th>Telefonnr </th><th>Epost </th>" + "</tr>";
        for (let b of Billetter) {
            skrivUt += "<tr>";
            skrivUt += "<td>" + b.film +
                "</td><td>" + b.antall +
                "</td><td>" + b.fornavn +
                "</td><td>" + b.etternavn +
                "</td><td>" + b.telefonnr +
                "</td><td>" + b.Epost +
                "</td>";
            skrivUt += "</td>";

        }

        document.getElementById("personRegister").innerHTML += skrivUt;









    }

}
function slettData(){
    Billetter.length = 0
    document.getElementById("personRegister").innerHTML ="";
}


