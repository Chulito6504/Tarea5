document.getElementById('cedulaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const cedula = document.getElementById('cedula').value;
    const resultadoElement = document.getElementById('resultado');
    const esValida = validarCedulaDominicana(cedula);

    if (esValida) {
        resultadoElement.textContent = 'CÉDULA ES CORRECTA';
        resultadoElement.classList.remove('incorrecta');
        resultadoElement.classList.add('correcta');
    } else {
        resultadoElement.textContent = 'CÉDULA ES INCORRECTA';
        resultadoElement.classList.remove('correcta');
        resultadoElement.classList.add('incorrecta');
    }
});

function validarCedulaDominicana(cedula) {
    if (cedula.length !== 11 || !/^\d+$/.test(cedula)) {
        return false;
    }

    const digitos = cedula.split('').map(Number);
    const digitoVerificador = digitos.pop(); 

    let suma = 0;
    digitos.forEach((digito, index) => {
        let factor = (index % 2 === 0) ? 1 : 2; 
        let producto = digito * factor;

        if (producto > 9) {
            producto = producto - 9;
        }

        suma += producto;
    });

    const verificadorCalculado = (10 - (suma % 10)) % 10;

    return verificadorCalculado === digitoVerificador;
}