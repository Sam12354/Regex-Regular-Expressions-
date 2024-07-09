function barIncome(array) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/g
    let exec = pattern.exec(array);
    let curPerson = {};
    let allCustomers = [];

    let totalIncome = 0;

    while(exec !== null){
        let name = exec[1];
        let product = exec[2];
        let count = Number(exec[3]);
        let price = Number(exec[4]);

        let allPrice = count * price;
        curPerson = { name, product, allPrice };
        allCustomers.push(curPerson);

        totalIncome += allPrice;

        exec = pattern.exec(array);
    }

    for(let person of allCustomers){
        console.log(`${person.name}: ${person.product} - ${(person.allPrice).toFixed(2)}`);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
barIncome
(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])

// (['%InvalidName%<Croissant>|2|10.3$',

// '%Peter%<Gum>1.3$',

// '%Maria%<Cola>|1|2.4',

// '%Valid%<Valid>valid|10|valid20$',

// 'end of shift'])