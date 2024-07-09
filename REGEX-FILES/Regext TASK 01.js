function furniture(array){
    let pattern = /(>{2})(?<group>[A-Z][A-Za-z]+)<{2}(?<money>\d+\.?\d*)!(?<quantity>\d+)/g
    let exec = pattern.exec(array);
    let furnitureBought = [];
    let allMoney = 0;
    let curAllMoney = 1;

    while(exec !== null){
        let items = exec[2];
        let money = Number(exec[3]);
        let count = Number(exec[4]);

        furnitureBought.push(items);
        curAllMoney = money * count;
        allMoney += curAllMoney;

        exec = pattern.exec(array);
    }

    if(furnitureBought.length > 0){
        console.log("Bought furniture:");
        for(let item of furnitureBought){
            console.log(item);
        }
        console.log(`Total money spend: ${allMoney.toFixed(2)}`);
    }else{
        console.log("Bought furniture:");
        console.log(`Total money spend: ${allMoney.toFixed(2)}`);
    }
}
furniture
(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])

// (['>>Laptop<<312.2323!3',

// '>>TV<<300.21314!5',

// '>Invalid<<!5',

// '>>TV<<300.21314!20',

// '>>Invalid<!5',

// '>>TV<<30.21314!5',

// '>>Invalid<<!!5',

// 'Purchase'])
