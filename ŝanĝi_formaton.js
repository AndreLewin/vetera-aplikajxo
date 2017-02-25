$("#ŝanĝi_formaton").on("click", function () {
    var varmecoOutput = document.getElementById("varmeco");
    var varmecoTeksto = varmecoOutput.textContent;

    // Akiri la nombron
    var regexNombro = /[+-]?\d+(\.\d+)?/;
    var nombro = varmecoTeksto.match(regexNombro)[0];

    // Akiri la formaton
    var regexFormato = /.$/;
    var formato = varmecoTeksto.match(regexFormato)[0];

    // Kalkulo depende de la formato
    var novaEnhavo = '404';
    if (formato == 'F') {
        novaEnhavo = (nombro - 32)*(5/9);
        novaEnhavo += '°C';
    } else if (formato == 'C') {
        novaEnhavo = (nombro * 9/5) + 32;
        novaEnhavo += '°F';
    }

    novaEnhavo = 'Varmeco: ' + novaEnhavo;

    // Ŝanĝi la tekston
    varmecoOutput.innerHTML = novaEnhavo;
});