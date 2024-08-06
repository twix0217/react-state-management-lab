const zombieFight = (props) => {
    const { zombie } = props
    return (
        <div className="zombies">
        <h2>{zombie.name} </h2>
        <img src={zombie.img}   />
        <p><span>Strength: </span>{zombie.strength} </p>
        <p><span>Agility </span> {zombie.agility} </p>
      </div>
    );
  };
  
  export default zombieFight;