// ... (Previous code remains unchanged)

const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardener"
  ];
  
  let freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" }
  ];
  
  // Function to render freelancers
  function renderFreelancers() {
    const freelancersList = document.getElementById('freelancers-list');
    freelancersList.innerHTML = '';
  
    freelancers.forEach(freelancer => {
      const listItem = document.createElement('li');
      listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
      listItem.addEventListener('click', () => removeFreelancer(freelancer));
      freelancersList.appendChild(listItem);
    });
  
    updateAveragePrice();
  }
  
  // Function to add a new freelancer
  function addNewFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 50; // Random starting price
  
    const newFreelancer = {
      name: randomName,
      price: randomPrice,
      occupation: randomOccupation
    };
  
    freelancers.push(newFreelancer);
    renderFreelancers();
  }
  
  // Event listener for adding a new freelancer
  const addFreelancerButton = document.getElementById('add-freelancer');
  addFreelancerButton.addEventListener('click', addNewFreelancer);
  
  // Initial rendering
  renderFreelancers();
  
