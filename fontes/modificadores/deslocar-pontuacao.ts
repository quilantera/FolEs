import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class DeslocarPontuacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "primeiro": "first",
        "ultimo": "last",
        "último": "last",
        "forcar-fim": "force-end",
        "forçar-fim": "force-end",
        "permitir-fim": "allow-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["deslocar-pontuacao", "deslocar-pontuação"], 
            "hanging-punctuation", 
            pragmas
        );

        // OBS.: Pode receber de 1 a 3 valores;
        // A lógica abaixo cobre apenas o recebimento de UM único valor.
        // TODO: Adaptar lógica para cobrir o recebimento de múltiplos valores.

        validarValores('deslocar-pontuação', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;   
    }
}
