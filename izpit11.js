function izpit(input){

    let upperCase = input.split(', ')
    let firstWord = upperCase.shift().toUpperCase()
    let secondWord = upperCase.shift().toUpperCase()
    let concatenatedString = firstWord + ' ' + secondWord
    
    let finalWord = concatenatedString.split(' ').join(', ')

    console.log(finalWord);  

}
izpit
('Hi, how are you?')