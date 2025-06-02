const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = 
[
    {
        enunciado: "Pergunta 1",
        alternativas: 
        [
            {
            texto:"texto aternativa 1", 
            afirmação:"afirmacao 1"
            },
        
            {
            texto:"texto aternativa 2", 
            afirmação:"afirmacao 2"
            },
        ]
    },
    {
      enunciado: "Pergunta 2",
        alternativas: 
        [  
            {
            texto:"texto aternativa 1", 
            afirmação:"afirmacao 1"
            },
        
            {
            texto:"texto aternativa 2", 
            afirmação:"afirmacao 2"
            },
        ]  
    }
    {
      enunciado: "Pergunta 3",
        alternativas: 
        [  
            {
            texto:"texto aternativa 1", 
            afirmação:"afirmacao 1"
            },
        
            {
            texto:"texto aternativa 2", 
            afirmação:"afirmacao 2"
            },
        ]  
    }
];

let atual = 0;
let perguntaAtual;

function mostrarPergunta()
{
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostrarPergunta()