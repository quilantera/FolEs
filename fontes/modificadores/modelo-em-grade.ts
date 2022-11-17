import { Modificador } from "./superclasse/modificador";

export class ModeloEmGrade extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("modelo-em-grade", "grid-template");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}