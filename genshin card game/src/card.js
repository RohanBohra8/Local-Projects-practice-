import './card.css'
const card_api = 'https://raw.githubusercontent.com/RohanBohra8/Local-Projects-practice-/main/genshin%20card%20game/Characters/';
function Card({id,name,type,exp}) {
    let imgsrc = `${card_api}${id}.jpg`;
    return (
        <div className = "card">
            <h2 className='Card-title'>{name}</h2>
            <div className = "GenshinCard-image">
            <img className="Img" src={imgsrc}/>
            </div>
            <div className='Card-data'>Type: {type}</div>
            <div className='Card-data'>Experience: {exp}</div>
        </div>
    );
}

export default Card;