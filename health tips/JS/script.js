const jsonData = `
[
    {
        "image": "images/exercise.png",
        "title": "Regular Exercise",
        "description": "Engage in physical activities like walking, running, or cycling for at least 30 minutes a day to improve cardiovascular health and boost overall fitness."
    },
    {
        "image": "images/healthy-diet.png",
        "title": "Healthy Diet",
        "description": "Consume a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Avoid processed foods high in sugar and unhealthy fats."
    },
    {
        "image": "images/hydrated.png",
        "title": "Stay Hydrated",
        "description": "Drink plenty of water throughout the day to maintain hydration, support digestion, and promote healthy skin."
    },
    {
        "image": "images/sleep.png",
        "title": "Adequate Sleep",
        "description": "Ensure you get 7-9 hours of quality sleep each night to support mental and physical health, improve mood, and boost cognitive function."
    },
    {
        "image": "images/stress.png",
        "title": "Manage Stress",
        "description": "Practice stress-reducing techniques such as meditation, deep breathing, or yoga to improve emotional well-being and reduce the risk of stress-related illnesses."
    },
    {
        "image": "images/check-up.png",
        "title": "Regular Check-Ups",
        "description": "Schedule routine medical check-ups and screenings to detect potential health issues early and maintain overall health."
    },
    {
        "image": "images/weight.png",
        "title": "Maintain a Healthy Weight",
        "description": "Monitor your weight and aim to maintain a healthy BMI through a balanced diet and regular exercise to prevent chronic diseases."
    },
    {
        "image": "https://images.ctfassets.net/mrbo2ykgx5lt/22341/5535f080e1a7bb67f5fbb382d2295c7c/cigarette-lung-bowel-inflammation.jpg?&w=1200&h=630&fm=jpg&f=center",
        "title": "Avoid Smoking",
        "description": "Refrain from smoking and avoid exposure to secondhand smoke to reduce the risk of respiratory and cardiovascular diseases."
    },
    {
        "image": "images/mental-health.png",
        "title": "Prioritize Mental Health",
        "description": "Take time for activities that you enjoy, seek support when needed, and practice self-care to maintain good mental health."
    }
]
`;

// Fetch data from a real API or use local jsonData string for testing
function fetchData() {
    // Simulating fetch request
    return new Promise((resolve) => {
        resolve(JSON.parse(jsonData));
    });
}

// Generate the cards dynamically
function generateCards(data) {
    const container = document.getElementById('health-cards');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="card-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="#">Read More</a>
            </div>
        `;

        container.appendChild(card);
    });
}

fetchData().then(data => generateCards(data));
