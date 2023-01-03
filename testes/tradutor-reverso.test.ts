import { AvaliadorSintaticoReverso } from "../fontes/avaliador-sintatico/avaliador-sintatico-reverso";
import { LexadorReverso } from "../fontes/lexador/lexador-reverso";
import { TradutorReverso } from "../fontes/tradutor/tradutor-reverso";

import estruturasLmht from "../fontes/tradutor/estruturas-lmht";

describe('Tradutor Reverso', () => {
    let lexadorReverso: LexadorReverso;
    let avaliadorReverso: AvaliadorSintaticoReverso;
    let tradutorReverso: TradutorReverso;

    beforeEach(() => {
        lexadorReverso = new LexadorReverso();
        avaliadorReverso = new AvaliadorSintaticoReverso();
        tradutorReverso = new TradutorReverso();
    });

    // TODO: Finalizar a lógica em `declaracaoPorSeletor()` (avaliador sintático reverso)
    it.skip('Testando tradução das estruturas HTML', () => {
        for (let index = 0; index < Object.keys(estruturasLmht).length; index += 1) {

            // Lexador recebe as estruturas FolEs
            const resultadoLexador = lexadorReverso.mapear([
                `${Object.keys(estruturasLmht)[index]} {`,
                "   font-size: 60px;",
                "}"
            ])

            // Avaliador Sintático
            const resultadoAvaliadorSintatico = avaliadorReverso.analisar(resultadoLexador.simbolos);

            // Tradutor deve retornar a estrutura HTML correspondente
            const resultadoTradutor = tradutorReverso.traduzir(resultadoAvaliadorSintatico);
            expect(resultadoTradutor).toContain(Object.values(estruturasLmht)[index]);
        }
    });
});