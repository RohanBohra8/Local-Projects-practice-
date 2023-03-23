import GenshinDex from "./GenshinDex";

//incomplete


function GenshinGame() {
    let character = [
        {id: 1, name: 'Ayaka', type: 'Cryo', base_experience: 80},
        {id: 2, name: 'Beidou', type: 'Electro', base_experience: 72},
        {id: 3, name: 'Eula', type: 'Cryo', base_experience: 84},
        {id: 4, name: 'Ganyu', type: 'Cryo', base_experience: 178},
        {id: 5, name: 'Ningguang', type: 'Geo', base_experience: 112},
        {id: 6, name: 'Raiden', type: 'Electro', base_experience: 95},
        {id: 7, name: 'Yae Miko', type: 'Electro', base_experience: 225},
        {id: 8, name: 'Yelan', type: 'Hydro', base_experience: 65}
      ]


    let hand1 = [];
    let hand2 = [ ...character];
    while(hand1.length < hand2.length) {
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randCard = hand2.splice(randIdx, 1)[0];
        hand1.push(randCard); 
    }
    console.log(hand1);
    console.log(hand2);
    /*Genshin dex me mene hands name se prop banake bhja hai jisme ek array gya hai*/
    let exp1 = hand1.reduce((exp,character) => exp + character.base_experience, 0);
    let exp2 = hand2.reduce((exp,character) => exp + character.base_experience, 0);
    
    return(
        <div>
            <GenshinDex hands = {hand1} exp ={exp1} isWinner={exp1 > exp2} />  
            <GenshinDex hands = {hand2} exp ={exp2} isWinner={exp2 > exp1} />
        </div>
    );
}


export default GenshinGame;