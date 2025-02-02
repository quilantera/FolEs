import { Simbolo } from "../../lexador";
import { Metodo } from "./metodo";

export class Contraste extends Metodo {
    valor: number;
    quantificador: string;
    traducao: string;
    
    constructor(valor: Simbolo, quantificador: Simbolo) {
        super();
        this.valor = Number(valor.lexema);
        
        this.quantificador = quantificador ? quantificador.lexema : null;
        this.traducao = 'contrast';
    }

    paraTexto() {
        if (this.quantificador) {
            return `contrast(${this.valor}${this.quantificador})`
        }

        return `contrast(${this.valor})`
    }
}