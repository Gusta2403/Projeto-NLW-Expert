const perguntas = [
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        resposta: [
            "define",
            "var",
            "let"
        ],
        correta: 2 // Resposta C (let)
    },
    {
        pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
        resposta: [
            "log()",
            "print()",
            "console()"
        ],
        correta: 0 // Resposta A (log())
    },
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        resposta: [
            "==",
            "=",
            "=>"
        ],
        correta: 1 // Resposta B (=)
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário em uma linha em JavaScript?",
        resposta: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->"
        ],
        correta: 0 // Resposta A (// Este é um comentário)
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        resposta: [
            "push()",
            "append()",
            "insert()"
        ],
        correta: 0 // Resposta A (push())
    },
    {
        pergunta: "Qual é a maneira correta de verificar se uma variável tem um valor undefined em JavaScript?",
        resposta: [
            "if (x === undefined)",
            "if (x == undefined)",
            "if (typeof x === 'undefined')"
        ],
        correta: 2 // Resposta C (if (typeof x === 'undefined'))
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        resposta: [
            "removeLast()",
            "pop()",
            "deleteLast()"
        ],
        correta: 1 // Resposta B (pop())
    },
    {
        pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
        resposta: [
            "toInt()",
            "parseInt()",
            "parseNumber()"
        ],
        correta: 1 // Resposta B (parseInt())
    },
    {
        pergunta: "Qual operador é usado para verificar a igualdade estrita em JavaScript?",
        resposta: [
            "==",
            "===",
            "!="
        ],
        correta: 1 // Resposta B (===)
    },
    {
        pergunta: "Qual método é usado para concatenar dois arrays em JavaScript?",
        resposta: [
            "concat()",
            "merge()",
            "combine()"
        ],
        correta: 0 // Resposta A (concat())
    }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;

for(const item of perguntas){
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;
  
  
  for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item));
    dt.querySelector('input').value = item.resposta.indexOf(resposta);
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;

        corretas.delete(item);
        if(estaCorreta){
            corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    }
    
    quizItem.querySelector('dl').appendChild(dt);
  }
  
  quizItem.querySelector('dl dt').remove();

  quiz.appendChild(quizItem);
}
