function race(array){
    let participants = array.shift().split(', ');
    let row = array.shift();

    let curNameAdd = {}
    let allNames = []

    for(let i = 0; i < participants.length; i++){
        let name = participants[i]
        let kmRun = 0
        curNameAdd = { name, kmRun }
        allNames.push(curNameAdd)
    }

    while(row !== 'end of race'){

        let name = ''
        let kmRun = 0
    
        for(let letter of row){
            if(/[A-Za-z]/g.test(letter)){
                name += letter
            }
        }

        for(let letter of row){
            if(/[0-9]/g.test(letter)){
                letter = Number(letter)
                kmRun += letter
            }
        }

            let findName = allNames.find(n => n.name === name)
            if(findName){
                
                findName.kmRun += kmRun
            }
        
        row = array.shift();
    }

    let sortedArr = allNames.sort((a, b) => b.kmRun - a.kmRun)
    sortedArr.length = 3

    let finalArray = []
    for(let name of sortedArr){

        finalArray.push(name.name)
    }

    console.log(`1st place: ${finalArray[0]}`);
    console.log(`2nd place: ${finalArray[1]}`);
    console.log(`3rd place: ${finalArray[2]}`);

}
race
(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])

// (['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

// 'Mi*&^%$ch123o!#$%#nne787) ',

// '%$$B(*&&)i89ll)*&) ',

// 'R**(on%^&ald992) ',

// 'T(*^^%immy77) ',

// 'Ma10**$#g0g0g0i0e',

// 'end of race'])