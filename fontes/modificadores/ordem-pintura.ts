import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class OrdemPintura extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "tracado": "stroke",
        "traçado": "stroke",
        "preencher": "fill",
        "marcadores": "markers",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("ordem-pintura", "paint-order");
        
        // OBS.: Também aceita receber múltiplos valores, desde que sejam os listados.
        // Ex.: ordem-pintura: traçado preencher;

        // A lógica abaixo cobre somente o recebimento de UM dos valores aceitos listados. 
        // TODO: Adaptar lógica para cobrir os demais casos. 

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'ordem-pintura' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
