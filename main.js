// Estrutura de dados com 3 opções por pergunta (2 corretas e 1 incorreta/derrota)
const historias = {
  // Tela Inicial
  inicio: {
    texto: "Bem-vindo à Jornada da Inclusão!\n\nVocê assumirá a organização de um evento corporativo e precisará tomar decisões sobre acessibilidade e inclusão.\n\nCada pergunta possui 3 escolhas: duas estão corretas e uma incorreta levará ao Game Over.",
    opcoes: [
      { texto: "▶ Iniciar Jogo", proximoPasso: "p1" }
    ]
  },

  // Pergunta 1
  p1: {
    texto: "Pergunta 1/6: Você vai realizar um evento presencial. Um palestrante é cadeirante e um participante é cego. Qual é o primeiro passo do planejamento?",
    opcoes: [
      { texto: "Testar rampas, elevadores e solicitar previamente o material em Braille e áudio.", proximoPasso: "p2_a" }, // Correta 1
      { texto: "Contratar uma consultoria especializada em acessibilidade para auditar o local e os materiais.", proximoPasso: "p2_b" }, // Correta 2
      { texto: "Não realizar adaptações antecipadas e tentar resolver no dia caso alguém peça ajuda.", proximoPasso: "derrota_p1" } // Incorreta
    ]
  },

  // Pergunta 2 (Caminho A e B)
  p2_a: {
    texto: "Pergunta 2/6: Durante o desenvolvimento do site de inscrições do evento, como a equipe deve tratar o design e a programação?",
    opcoes: [
      { texto: "Garantir alto contraste de cores e navegação totalmente funcional via teclado e leitor de tela.", proximoPasso: "p3_a" }, // Correta 1
      { texto: "Seguir as diretrizes internacionais da WCAG (Diretrizes de Acessibilidade para Conteúdo Web).", proximoPasso: "p3_b" }, // Correta 2
      { texto: "Utilizar apenas fontes pequenas em cinza claro para manter um visual moderno, sem leitor de tela.", proximoPasso: "derrota_p2" } // Incorreta
    ]
  },
  p2_b: {
    texto: "Pergunta 2/6: A consultoria apontou que o site precisa de ajustes. Como proceder no desenvolvimento da plataforma digital?",
    opcoes: [
      { texto: "Implementar suporte a leitores de tela e incluir descrição em texto em todas as imagens (Alt Text).", proximoPasso: "p3_a" }, // Correta 1
      { texto: "Adaptar a estrutura HTML para ser legível por softwares de tecnologia assistiva.", proximoPasso: "p3_b" }, // Correta 2
      { texto: "Ignorar a acessibilidade digital pois a prioridade do evento é apenas a estrutura física.", proximoPasso: "derrota_p2" } // Incorreta
    ]
  },

  // Pergunta 3
  p3_a: {
    texto: "Pergunta 3/6: O palestrante precisa enviar os slides do evento aos participantes com antecedência. Como preparar esse material?",
    opcoes: [
      { texto: "Enviar em formato digital editável e estruturado, com descrição de todas as imagens.", proximoPasso: "p4_a" }, // Correta 1
      { texto: "Disponibilizar versão em áudio detalhada além do documento de texto acessível.", proximoPasso: "p4_b" }, // Correta 2
      { texto: "Exportar a apresentação como um arquivo PDF escaneado (imagem sem texto selecionável).", proximoPasso: "derrota_p3" } // Incorreta
    ]
  },
  p3_b: {
    texto: "Pergunta 3/6: Um participante cego solicitou o material das palestras previamente. Qual a forma correta de atender o pedido?",
    opcoes: [
      { texto: "Encaminhar o documento acessível por e-mail com estrutura legível por leitor de tela.", proximoPasso: "p4_a" }, // Correta 1
      { texto: "Fornecer o arquivo digital formatado junto com uma opção de audiodescrição.", proximoPasso: "p4_b" }, // Correta 2
      { texto: "Informar que o material só estará disponível em folheto impresso no dia do evento.", proximoPasso: "derrota_p3" } // Incorreta
    ]
  },

  // Pergunta 4
  p4_a: {
    texto: "Pergunta 4/6: No credenciamento, um participante surdo conversa com você auxiliado por um intérprete de LIBRAS. Como você se comunica?",
    opcoes: [
      { texto: "Olhar e falar diretamente para a pessoa surda, mantendo o contato visual e ritmo natural.", proximoPasso: "p5_a" }, // Correta 1
      { texto: "Falar com o participante surdo normalmente, mantendo o intérprete ao lado como ponte.", proximoPasso: "p5_b" }, // Correta 2
      { texto: "Dirigir o olhar apenas ao intérprete e dizer frases como 'Pergunte a ele se precisa de algo'.", proximoPasso: "derrota_p4" } // Incorreta
    ]
  },
  p4_b: {
    texto: "Pergunta 4/6: Durante o coffee break, você quer interagir com um palestrante surdo acompanhado de intérprete. Qual a atitude correta?",
    opcoes: [
      { texto: "Manter o foco da conversa e a postura voltados diretamente para o palestrante surdo.", proximoPasso: "p5_a" }, // Correta 1
      { texto: "Usar linguagem clara olhando para o palestrante surdo, respeitando o tempo da tradução.", proximoPasso: "p5_b" }, // Correta 2
      { texto: "Ignorar o participante surdo e negociar detalhes do evento diretamente com o intérprete.", proximoPasso: "derrota_p4" } // Incorreta
    ]
  },

  // Pergunta 5
  p5_a: {
    texto: "Pergunta 5/6: Um membro neurodivergente da equipe de apoio pede para usar fones com cancelamento de ruído para evitar sobrecarga sensorial. O que fazer?",
    opcoes: [
      { texto: "Autorizar prontamente o uso e garantir que ele tenha um espaço tranquilo de descanso se precisar.", proximoPasso: "p6_a" }, // Correta 1
      { texto: "Aprovar a solicitação e ajustar as tarefas para ambientes com menor estímulo sonoro.", proximoPasso: "p6_b" }, // Correta 2
      { texto: "Negar o pedido alegando que o uso de fones demonstra falta de profissionalismo e atenção.", proximoPasso: "derrota_p5" } // Incorreta
    ]
  },
  p5_b: {
    texto: "Pergunta 5/6: Um funcionário autista relata que as luzes fortes e o barulho da sala principal estão incomodando. Como agir?",
    opcoes: [
      { texto: "Oferecer um local mais calmo com iluminação suave e permitir o uso de fones abafadores.", proximoPasso: "p6_a" }, // Correta 1
      { texto: "Promover acomodações sensoriais e conscientizar a equipe sobre o respeito às neurodivergências.", proximoPasso: "p6_b" }, // Correta 2
      { texto: "Exigir que o funcionário se acostume com o ambiente pois 'o evento é barulhento mesmo'.", proximoPasso: "derrota_p5" } // Incorreta
    ]
  },

  // Pergunta 6
  p6_a: {
    texto: "Pergunta 6/6: O evento acabou com sucesso! Na avaliação final da empresa, como planejar a contratação permanente de pessoas com deficiência?",
    opcoes: [
      { texto: "Criar vagas afirmativas com acessibilidade no processo seletivo e plano de carreira inclusivo.", proximoPasso: "vitoria_feedback" }, // Correta 1
      { texto: "Consultar os profissionais PCD para entender quais adaptações e ferramentas são necessárias.", proximoPasso: "vitoria_feedback" }, // Correta 2
      { texto: "Abrir vagas operacionais básicas apenas para cumprir a lei de cotas, sem oferecer perspectiva de crescimento.", proximoPasso: "derrota_p6" } // Incorreta
    ]
  },
  p6_b: {
    texto: "Pergunta 6/6: Na reunião pós-evento, a diretoria deseja implementar uma cultura permanente de inclusão. Qual a melhor decisão?",
    opcoes: [
      { texto: "Promover treinamentos contínuos de acessibilidade atitudinal e adaptar o ambiente de trabalho.", proximoPasso: "vitoria_feedback" }, // Correta 1
      { texto: "Garantir ferramentas assistivas e processos de recrutamento totalmente acessíveis.", proximoPasso: "vitoria_feedback" }, // Correta 2
      { texto: "Exigir que candidatos com deficiência se adaptem sozinhos à estrutura antiga da empresa.", proximoPasso: "derrota_p6" } // Incorreta
    ]
  },

  // Telas de Derrota (Game Over)
  derrota_p1: {
    texto: "GAME OVER!\nA falta de planejamento prévio impediu o acesso do palestrante e inviabilizou a participação de pessoas com deficiência.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },
  derrota_p2: {
    texto: "GAME OVER!\nUm site sem contraste e sem suporte a leitores de tela exclui pessoas cegas e com baixa visão da participação.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },
  derrota_p3: {
    texto: "GAME OVER!\nDocumentos não acessíveis (como PDFs escaneados) impossibilitam a leitura por softwares assistivos.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },
  derrota_p4: {
    texto: "GAME OVER!\nFalar com o intérprete em vez de olhar para a pessoa com deficiência viola sua autonomia e individualidade.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },
  derrota_p5: {
    texto: "GAME OVER!\nNegar acomodações sensoriais causa sofrimento e desrespeita as necessidades de pessoas neurodivergentes.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },
  derrota_p6: {
    texto: "GAME OVER!\nInclusão superficial ou motivada apenas por cotas sem acessibilidade contínua perpetua a exclusão.",
    temProxima: true,
    proximoPasso: "reiniciar"
  },

  // Telas de Vitória (Convergência dos dois caminhos)
  vitoria_feedback: {
    texto: "PARABÉNS! VOCÊ VENCEU!\n\nVocê tomou decisões inclusivas em todas as etapas! Seu evento foi um exemplo de acessibilidade física, digital e atitudinal.",
    temProxima: true,
    proximoPasso: "finalVitoria"
  },
  finalVitoria: {
    texto: "MENSAGEM FINAL:\n\nAcessibilidade não é um favor ou diferencial, é um direito fundamental. Lembre-se sempre de incluir e consultar as pessoas com deficiência no planejamento!",
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

  // Se houver opções de escolha (Botões)
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
  // Se for uma tela de avanço direto usando o botão 'Próxima'
  else if (etapa.temProxima) {
    nextBtn.style.display = "block";
    if (etapa.proximoPasso === "reiniciar" || passoAtual === "reiniciar") {
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

// Função 'proxima' exigida no requisito
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

// Inicializa a interface ao carregar a página
window.onload = () => {
  atualizarTela();
};