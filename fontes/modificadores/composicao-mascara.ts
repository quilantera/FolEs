import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class ComposicaoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "adicionar": "add",
        "subtrair": "subtract",
        "cruzar": "intersect",
        "excluir": "exclude",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["composicao-mascara", "composição-máscara"],
            "mask-composite"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'composição-máscara' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
