const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");
const container = document.querySelector(".button-container");

// Função para centralizar os botões mais acima
function positionButtons() {
  const containerRect = container.getBoundingClientRect();
  const yesButtonWidth = yesButton.offsetWidth;
  const yesButtonHeight = yesButton.offsetHeight;

  // Calcular a posição centralizada mais próxima do texto
  const offsetY = -50; // Ajuste para deslocar os botões mais para cima
  yesButton.style.position = "absolute";
  yesButton.style.left = `${(containerRect.width - yesButtonWidth) / 2}px`;
  yesButton.style.top = `${(containerRect.height - yesButtonHeight) / 2 + offsetY}px`;

  // Posicionar o botão "Não" ao lado do botão "Sim"
  const noButtonWidth = noButton.offsetWidth;
  noButton.style.left = `${(containerRect.width - noButtonWidth) / 2 + yesButtonWidth + 20}px`; // 20px de espaço entre os botões
  noButton.style.top = `${(containerRect.height - yesButtonHeight) / 2 + offsetY}px`;
}

// Mover o botão "Não" para longe do cursor
noButton.addEventListener("mouseenter", (event) => {
  const containerRect = container.getBoundingClientRect();
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  let newX = Math.random() * (containerRect.width - buttonWidth);
  let newY = Math.random() * (containerRect.height - buttonHeight);

  // Garantir que o botão "Não" fique longe do cursor
  const cursorX = event.clientX - containerRect.left;
  const cursorY = event.clientY - containerRect.top;

  if (Math.abs(newX - cursorX) < 50) newX += 50; // Ajusta se estiver muito perto
  if (Math.abs(newY - cursorY) < 50) newY += 50;

  // Garantir que o botão não ultrapasse os limites do contêiner
  newX = Math.min(Math.max(newX, 0), containerRect.width - buttonWidth);
  newY = Math.min(Math.max(newY, 0), containerRect.height - buttonHeight);

  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
});

// Mostrar a mensagem ao clicar no botão "Sim"
yesButton.addEventListener("click", () => {
  message.classList.remove("hidden");
  message.style.display = "block";
});

// Centralizar os botões ao carregar a página
window.onload = positionButtons;
