//This should fetch all the puppy players in the api given

async function fetchPlayers() {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players');
  const players = await response.json();

  const playerList = document.getElementById('player-list');
  players.forEach(player => {
    const listItem = document.createElement('li');
    listItem.textContent = player.name;
    listItem.addEventListener('click', () => {
      showPlayerDetails(player.id);
    });
    playerList.appendChild(listItem);
  });
}
//This should allow us to view the puppy player, and thier details

async function showPlayerDetails(playerId) {
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players');
  const player = await response.json();

  const playerDetails = document.getElementById('player-details');
  playerDetails.innerHTML = `
  <h2>${player.name}</h2>
  <p>Age: ${player.age}</p>
  <p>Position: ${player.position}</p>
  <p>Team: ${player.team}</p>
  `;
}

//This should call the function
fetchPlayers();
