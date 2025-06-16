const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//lista de perguntas com os objetos(itens) e seus atributos:enunciado, e lista de alternativas
//com os atributos texto e afirmação
const perguntas = [
    {
        enunciado: "Qual a importância do 2PAC na cultura de plantações e ervas medicinais indigenas?",
        alternativas: [
            {
            texto: "Trazer dignidade e expandir a visibilidade cultural  afro-americana.",
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana. "
            },
            {
            texto: "Ele foi simbolo de diversidade cultural e musical e foi importante para abrir espaços para trazer igualdade racial.",
            afirmacao: "A preservação da cultura de resistência de um povo."
            },
        ]
    },
    {
        enunciado: "Como o 2PAC se relaciona com as ervas medicinais indigenas?",
        alternativas: [
            {
            texto: "Ambos tem como objetivo ser um mártire cultural e um elemento histórico como simbolo de um povo.",
            afirmacao: "Importância de trazer diginidade cultural ao mundo moderno. "
            },
            {
            texto: "Graças aos indígenas existem os remédios que 2PAC utiliza.",
            afirmacao: "Vemos que os remédios d os índigenas são importantes para o 2PAC."
            },
        ]
    },
    {
        enunciado: "Como o 2PAC relaciona com plantações e ervas indigenas?",
        alternativas: [
            {
            texto: "As plantações foram ressignificadas tanto na cultural afro-americana e indigena. Movimento plantation nos EUA foi cenário da brutalidade escravista.",
            afirmacao: "o 2PAC ressignificou na sua música como consciencia social, resistencia politica e ancestralidade. "
            },
            {
            texto: "O povo indígena vê plantação como ritual, pois cada semente pra eles tem espírito. Plantar significa vida e cultura.",
            afirmacao: "O 2PAC usou na música o cultivo como metáfora na vida do gueto, onde o solo hóstil, racismo, pobreza e violência podem fazer flores nascer."
            },
        ]
    },
];//criação das variáveis atual(que percorrerá os itens da lista de perguntas)
// perguntaAtual(que guardará a pergunta atual que será interagida)
//historiaFinal(que inicia vazia e depois guardará os textos da resposta selecionada)

let atual = 0;
let perguntaAtual;
let historiaFinal = "";//funcao que mostrará cada pergunta até que apareça encerre a lista e mostrará o resumo da I.A.

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
//execução da função que mostrará as alternativas
    mostraAlternativa();
}//funcao que mostrará as alternativas do objeto selecionado

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
//execução da função SETA => que após o evento de clique selecionada a resposta da alternativa
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
   
}
}//função que junta todas as afirmações das alternativas clicadas.

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
//execução da função que mostra a pergunta
    mostraPergunta();

}//função que mostrará o resultado final 

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}//execução da função que mostrará a pergunta e suas alternativas

mostraPergunta();
