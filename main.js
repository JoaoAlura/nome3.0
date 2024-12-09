const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {enunciado: "Assim que saiu da escola Gabriel se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, o chat também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento de Gabriel?",
        alternativas:[
            {
                texto: "Isso é assustador!",
                afirmação: "Afirmação da alternativa 1"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmação: "Afirmação da alternativa 2"
            }
        ]
    },
    {enunciado: "Com a descoberta desta tecnologia uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre IA. No fim de uma aula ela pede que Gabriel escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude Gabriel toma?",
        alternativas:[
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmação: "Afirmação da alternativa 1"
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmação: "Afirmação da alternativa 2"
            }
        ]
    },
    {enunciado: "Depois que Gabriel escreveu o trabalho, teve uma discussão sobre o impacto da IA no trabalho do futuro o que Gabriel faz:",
        alternativas:[
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
                afirmação: "Afirmação da alternativa 1"
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmação: "Afirmação da alternativa 2"
            }
        ]
    },
    {enunciado: "Ao final da discussão, Gabriel precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas:[
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmação: "Afirmação da alternativa 1"
            },
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmação: "Afirmação da alternativa 2"
            }
        ]
    },
    {enunciado: "Em 2049, Gabriel achou assustador pensar que máquinas agora poderiam mudar o mundo. Percebeu que a IA consegue explicar termos complicados de forma simplificada e isso ajudou muito suas pesquisas sobre assuntos complexos. Notou que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes.",
    }
]
let atual = 0;
let perguntaAtual;

function mostraPergunta () {
    if (atual >= perguntas.lenght) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement ("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", 
            function() {
                atual++;
                mostraPergunta();
            });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();

function mostraResultado () {
    caixaPerguntas.textContent = " ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

function respostaSelecionada (opcaoSelecionada) {
    const afirmações = opcaoSelecionada.afirmação;
    historiaFinal += afirmações + "";
    atual++;
    mostraPergunta();
}