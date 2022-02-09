class Display {
    contructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.displayValorActual = '';
        this.displayValorAnterior = '';
    }

    agregarNumero(numero) {
        this.displayValorActual = numero;
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.displayValorActual; 
        this.displayValorAnterior.textContent = this.displayValorAnterior;
    }
}

