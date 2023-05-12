import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";

export class DistanciaDeslocamento extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["distancia-deslocamento", "distância-deslocamento"],
            "offset-distance"
        );

        if (Number.isNaN(parseInt(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(
                `Propriedade 'distância-deslocamento' com valor ${valor} inválido. O valor deve ser numérico ou um dos valores:
    ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // O seletor aceita o número 0.
        // Logo, o código só passa pela validação caso haja um segundo parâmetro
        // ou caso o primeiro seja diferente de 0.
        if (quantificador !== undefined || valor !== '0') {
            if (!(quantificador in unidadesMedida)) {
                throw new Error(
                    `Propriedade 'distância-deslocamento' com quantificador inválido. Valores aceitos:
        ${Object.keys(unidadesMedida).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
