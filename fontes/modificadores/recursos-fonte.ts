import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class RecursosFonte extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("recursos-fonte", "font-feature-settings");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
