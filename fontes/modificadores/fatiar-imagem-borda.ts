import { listaDeValoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador } from "./superclasse/modificador";

export class FatiarImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "preencher": "fill",
    }

    constructor(valor: string, quantificador?: string) {
        super("fatiar-imagem-borda", "border-image-slice");

        // OBS.: Pode receber de 1 a 4 valores.
         // TODO: Implementar lógica restante no futuro, tendo em vista a estrutura do Av.Sintático. 
        // A lógica abaixo cobre somente o recebimento de UM valor numérico.
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'fatiar-imagem-borda' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }  

        this.valor = valor;

        // Aceita somente o valor percentual (%) como quantificador.
        // Também pode receber somente o valor numérico, sem quantificador.
        if (quantificador !== undefined) {
            if (
                !(quantificador in ListaDeValorPercentual)
            ) {
                throw new Error(
                    `Propriedade 'fatiar-imagem-borda' com quantificador inválido. Valores aceitos:
                ${Object.keys(ListaDeValorPercentual).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
