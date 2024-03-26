let eventsList = document.getElementById('events-list');
const apiUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events'; 

fetch(apiUrl)
  .then(response => response.json())
  .then(events => {
    events.forEach(event => {
      const eventElement = document.createElement('ul');
      eventElement.innerHTML = `
        <h2>${event.name}</h2>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Description:</strong> ${event.description}</p>
      `;
      eventsList.appendChild(eventElement);
    });
  })
  .catch(error => {
    console.error('Error fetching events:', error);
  });
  