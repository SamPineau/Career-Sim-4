async function fetchPlayers() {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players');
    const data = await response.json();

    if (data && Array.isArray(data.players)) {
      const players = data.players;

      const playerList = document.getElementById('player-list');
      players.forEach(player => {
        const listItem = document.createElement('li');
        listItem.textContent = player.name;
        listItem.addEventListener('click', () => {
          showPlayerDetails(player.id);
        });
        playerList.appendChild(listItem);
      });
    } else {
      console.error("API response does not contain 'players' or it's not an array.");
    }
  } catch (error) {
    console.error('Error fetching players:', error);
  }
}

async function showPlayerDetails(playerId) {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-am/players/${playerId}`);
    const player = await response.json();

    const playerDetails = document.getElementById('player-details');
    playerDetails.innerHTML = `
    <h2>${player.name}</h2>
    <p>Age: ${player.age}</p>
    <p>Position: ${player.position}</p>
    <p>Team: ${player.team}</p>
    `;
  } catch (error) {
    console.error('Error fetching player details:', error);
  }
}

fetchPlayers();

