function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const confirmation = confirm(
    "Confirma a escalação do jogador: " +
      name +
      " (" +
      number +
      ")" +
      " para a posição de " +
      position +
      "?"
  );
  if (confirmation) {
    const teamList = document.getElementById("team-list");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerHTML = name + " (" + number + ")" + ", " + position;

    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removedPlayer() {
  const remove = document.getElementById("removed").value;
  const playerRemove = document.getElementById("player-" + remove);

  if (!playerRemove) {
    alert("Não tem nenhum jogador com esse número!");
  }
  const confirmation = confirm(
    "Remover o jogador: " + playerRemove.innerText + "?"
  );

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerRemove);
    document.getElementById("removed").value = "";
  }
}
