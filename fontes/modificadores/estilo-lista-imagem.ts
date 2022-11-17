import { Modificador } from "./superclasse/modificador";

export class EstiloListaImagem extends Modificador {
    constructor(valor: string, quantificador: string) {
        super("estilo-lista-imagem", "list-style-image");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}