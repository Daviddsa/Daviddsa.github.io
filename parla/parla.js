function getNpcPorArray(tipo){
    // Arrays de atributos para NPCs
    var arrayBasic = [13,12,11,10,9,8];
    var arrayHero = [15,14,13,12,10,8];

    // Se obtienen primero de todo los atributos
    var stats = [];

    if (tipo == 'basic') {
        shuffleArray(arrayBasic);
        stats = arrayBasic;
    } else {
        shuffleArray(arrayHero);
        stats = arrayHero;
    } 
}

function getRaceMods() {
    var otherRaces = ['changeling','gillman','strix','kitsune','nagaji','samsaran','wayang','aasimar','drow','duergar','svirfneblin','hobgoblin','kobold','orc','tengu','merfolk','tiefling','goblin','fetchling','dhampir','ifrit','grippli','oread','sylph','undine','catfolk','ratfolk','suli','vanara','vishkanya'];
    var races = ['elf','dwarf','gnome','human','halfling','half-elf','half-orc',otherRaces[Math.floor(Math.random() * (otherRaces.length))]];

    var race = races[Math.floor(Math.random() * (races.length))];

    return race;

    switch (race) {
        case 1:
            
            break;
    
        default:
            break;
    }
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

