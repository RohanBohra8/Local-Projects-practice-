import Card from "./card";
import "./GenshinDex.css";
   
let character =  [
  {id: 1, name: 'Ayaka', type: 'Cryo', base_experience: 80},
  {id: 2, name: 'Beidou', type: 'Electro', base_experience: 72},
  {id: 3, name: 'Eula', type: 'Cryo', base_experience: 84},
  {id: 4, name: 'Ganyu', type: 'Cryo', base_experience: 178},
  {id: 5, name: 'Ningguang', type: 'Geo', base_experience: 112},
  {id: 6, name: 'Raiden', type: 'Electro', base_experience: 95},
  {id: 7, name: 'Yae Miko', type: 'Electro', base_experience: 225},
  {id: 8, name: 'Yelan', type: 'Hydro', base_experience: 65}
];

function GenshinDex({hands,exp,isWinner}) {   /*hands ko mene bhja hai as a prop within this brackets*/   
  let title;
  if(isWinner) {
    title = <h2 className = "GenshinDex-winner">WINNER</h2>
  } else {
    title = <h2 className = "GenshinDex-loser">LOSER</h2>
  }
  return (
    <div className="GenshinDex">
      {title}
      <h4> Experience: {exp}</h4>
      <div className="GenshinDex-cards">
       { hands.map((c) => (
          <Card id={c.id} name={c.name} type={c.type} exp={c.base_experience} />
        ))
      }
      </div>
    </div>
  );
}

export default GenshinDex;
