import { Modificador } from "./superclasse/modificador";

export class TravarPontuacao extends Modificador {
    nomesFoles: string[];
    propriedadeCss: string;
    valor: string;
    quantificador: string;

    constructor(valor: string, quantificador: string) {
        super(["travar-pontuacao", "travar-pontuação"], "hanging-punctuation");
        this.valor = valor;
        this.quantificador = quantificador;
    }
}
