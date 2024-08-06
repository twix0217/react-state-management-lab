import React, { useState } from 'react';
import './App.css';
import ZombieFight from './components/ZombieFight/ZombieFight.jsx';

const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (zombie) => {
    if (money >= zombie.price) {
      const newTeam = [...team, zombie];
      setTeam(newTeam);
      setMoney(money - zombie.price);
      calculateTotalAttributes(newTeam);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (name) => {
    // Find the zombie to remove
    const removedZombie = team.find((zombie) => zombie.name === name);
    
    // If found, update team and budget
    if (removedZombie) {
      const newTeam = team.filter((zombie) => zombie.name !== name);
      setTeam(newTeam);
      setMoney(money + removedZombie.price);
      calculateTotalAttributes(newTeam);
    }
  };

  const calculateTotalAttributes = (team) => {
    let strength = 0;
    let agility = 0;

    for (let i = 0; i < team.length; i++) {
      strength += team[i].strength;
      agility += team[i].agility;
    }

    setTotalStrength(strength);
    setTotalAgility(agility);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <section>
        <h2>Money: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <p>Total Team Agility: {totalAgility}</p>
        <h2>Team</h2>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          <ul>
            {team.map((zombie) => (
              <li key={zombie.name}>
                <div className="zombies">
                  <h2>{zombie.name}</h2>
                  <img src={zombie.img} alt={zombie.name} />
                  <p><span>Strength: </span>{zombie.strength}</p>
                  <p><span>Agility: </span>{zombie.agility}</p>
                  <button onClick={() => handleRemoveFighter(zombie.name)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <ul>
          {zombieFighters.map((zombie) => (
            <li key={zombie.name}>
              <ZombieFight zombie={zombie} />
              <button onClick={() => handleAddFighter(zombie)}>Add</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
