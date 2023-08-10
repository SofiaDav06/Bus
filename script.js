document.getElementById("calcular").addEventListener("click", function () {
    const tipo = document.getElementById("tipo").value;
    const kilometros = parseFloat(document.getElementById("kilometros").value);
    const personas = parseInt(document.getElementById("personas").value);
    
    let costoPorKilometro = 0;
    
    switch (tipo) {
        case "A":
            costoPorKilometro = 2.0 ;
            break;
        case "B":
            costoPorKilometro = 2.5;
            break;
        case "C":
            costoPorKilometro = 3.0;
            break;
    }
    
    const costoTotal = Math.max(kilometros * costoPorKilometro );
    const costoTotal1 = Math.max(costoTotal / personas);
    
    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Costo total del viaje: $${costoTotal.toFixed(2)}`;
    const resultadoElement1 = document.getElementById("resultado1");
    resultadoElement1.textContent = `Cada persona pagaría: $${costoTotal1.toFixed(2)}`;
});
