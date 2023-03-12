import Card from "./card";
import "./GenshinDex.css";
/*
static defaultProps = {
    cards : [
        {id: 1, name: 'Ayaka', type: 'Cryo', base_experience: 80},
        {id: 2, name: 'Beidou', type: 'Electro', base_experience: 72},
        {id: 3, name: 'Eula', type: 'Cryo', base_experience: 84},
        {id: 4, name: 'Ganyu', type: 'Cryo', base_experience: 178},
        {id: 5, name: 'Ningguang', type: 'Geo', base_experience: 112},
        {id: 6, name: 'Raiden', type: 'Electro', base_experience: 95},
        {id: 7, name: 'Yae Miko', type: 'Electro', base_experience: 225},
        {id: 8, name: 'Yelan', type: 'Hydro', base_experience: 65}
      ]
};
*/
function GenshinDex() {
  return (
    <div className="GenshinDex">
      <div className="GenshinDex-cards">
        <Card id="1" name="Ayaka" type="Cryo" exp="90" />
        <Card id="2" name="Beidou" type="Electro" exp="72" />
        <Card id="3" name="Eula" type="Cryo" exp="84" />
        <Card id="4" name="Ganyu" type="Cryo" exp="95" />
        <Card id="5" name="Ningguang" type="Geo" exp="69" />
        <Card id="6" name="Raiden" type="Electro" exp="98" />
        <Card id="7" name="Yae Miko" type="Electro" exp="82" />
        <Card id="8" name="Yelan" type="Hydro" exp="88" />
      </div>
    </div>
  );
}

export default GenshinDex;
