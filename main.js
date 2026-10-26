// Estrutura das etapas do jogo
const historias = {
  inicio: {
    texto: "Você é responsável por organizar uma palestra sobre tecnologia na sua empresa. Um dos palestrantes convidados é cadeirante e um dos participantes tem deficiência visual. Como você inicia os preparativos do evento?",
    opcoes: [
      { texto: "Verificar previamente a rampa de acesso, elevadores e solicitar material do evento em Braille/áudio.", proximoPasso: "etapaVitoria1" },
      { texto: "Focar na contratação de um intérprete de LIBRAS e deixar para verificar a estrutura física no dia do evento.", proximoPasso: "etapaVitoria2" },
      { texto: "Decidir que não precisa de adaptações agora, pois 'se alguém precisar, resolvemos na hora'.", proximoPasso: "derrota" }
    ]
  },
  etapaVitoria1: {
    texto: "Excelente escolha preventiva! Todos os acessos foram testados e o material acessível está pronto. No dia do evento, a acessibilidade física e digital funcionaram perfeitamente. O evento foi um sucesso e todos puderam participar ativamente!",
    temProxima: true,
    proximoPasso: "finalVitoria"
  },
  etapaVitoria2: {
    texto: "Boa intenção! Porém, no dia do evento surgiram pequenos imprevistos no acesso à rampa que precisaram de ajustes rápidos. Com empatia e esforço da equipe, vocês resolveram tudo a tempo e o evento foi inclusivo e produtivo!",
    temProxima: true,
    proximoPasso: "finalVitoria"
  },
  derrota: {
    texto: "GAME OVER: A falta de planejamento impediu que o palestrante subisse ao palco e o participante não pôde acompanhar a apresentação. A ausência de acessibilidade gerou constrangimento e exclusão.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },
  finalVitoria: {
    texto: "PARABÉNS! Você concluiu a jornada. Lembre-se: Acessibilidade e inclusão não são favores, são direitos fundamentais que devem ser planejados desde o início!",
    temProxima: true,
    proximoPasso: "reiniciar"
  }
};

let passoAtual = "inicio";

// Elementos do DOM
const storyTextElement = document.getElementById("story-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");

function atualizarTela() {
  const etapa = historias[passoAtual];
  
  // Atualiza o texto da história
  storyTextElement.innerText = etapa.texto;
  optionsContainer.innerHTML = "";

  // Se houver opções de escolha (caso do início)
  if (etapa.opcoes) {
    nextBtn.style.display = "none";
    etapa.opcoes.forEach(opcao => {
      const button = document.createElement("button");
      button.innerText = opcao.texto;
      button.className = "btn";
      button.onclick = () => fazerEscolha(opcao.proximoPasso);
      optionsContainer.appendChild(button);
    });
  } 
  // Se for um passo direto com o botão "Próxima"
  else if (etapa.temProxima) {
    nextBtn.style.display = "block";
    if (passoAtual === "reiniciar" || etapa.proximoPasso === "reiniciar") {
      nextBtn.innerText = "Jogar Novamente";
    } else {
      nextBtn.innerText = "Próxima";
    }
  }
}

function fazerEscolha(proximo) {
  passoAtual = proximo;
  atualizarTela();
}

// Função 'próxima' exigida no requisito
function proxima() {
  const etapa = historias[passoAtual];
  
  if (etapa && etapa.proximoPasso) {
    if (etapa.proximoPasso === "reiniciar") {
      passoAtual = "inicio";
    } else {
      passoAtual = etapa.proximoPasso;
    }
    atualizarTela();
  }
}

// Inicializa o jogo ao carregar a página
window.onload = () => {
  atualizarTela();
};