// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

for (let i = 0; i <= 15; i++) {
    if (i > 5) {
        console.log("რიცხვი მეტია 5-ზე");
    }
}

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:

let array = [3, 6, 9, 12, 15]

for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:

let letter = "damatebiti teqstis dabechvda";

for (let i = 0; i < letter.length; i++) {
    if (letter[i] === "a") {
        console.log(letter[i], "this is latter a" );
    } else {
        console.log(letter[i]);
    }
}


// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:

let color = ["red", "green", "blue", "yellow"];

for (let i = 0; i < color.length; i++) {
    if (color[i].length > 5 ) {
        console.log(color[i], "eseni metia 5-ze");
    }
}

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

for (let i = 1; i <= 50; i++) {
    if (i % 7  === 0) {
        console.log(i, "გაყოფადია 7-ზე");
    }
    
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:

let numb = [4, 8, 12, 16, 20];

for (let i = 0; i < numb.length; i++) {
    console.log(numb[i] * 2);
}

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: 
// (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';
// for (let i = 0; i < word.length; i++))

// ver gavige

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

let numb1 = [5, 10, 15, 20, 25];

for (let i = 0; i <= numb1.length; i++) {
    if (numb1[i] % 5 === 0) {
        console.log(numb1[i],);
    }    
}

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':

let ragac = 'hello word'

for (let i = 0; i < ragac.length; i++) {
    if (ragac[i] !== "o") {
        console.log(ragac[i]);
    } 
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:

let odd = [1, 2, 3, 4, 5, 6];

let jami = 0;

for (let i = 0; i <= odd.length; i++) {
    if (odd[i] % 2 === 0) {
        jami += odd[i]
    }
}

console.log("luw ricxvta jami", jami);

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )

let numb3 = 10

for (let i = 1; i <= 10; i++) {
    let result = numb3 * i;
    console.log(`${numb3} x ${i} = ${result}`);
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

let numb4 = [2, 7, 4, 9, 5];

for (let i = 0; i < numb4.length; i++) {
    if (numb4[i] > 4) {
        console.log(numb4[i] * 3);
    }
}

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი 
// ტექსტის დაბეჭდვა:

for (let i = 1; i <= 30; i++) {
    if (i > 10) {
        console.log(i, "metia 10-ze");
    } else {
        console.log(i);
    }
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

let words = "im elementebis gamotana";

for (let i = 0; i < words.length; i++) {
    if (words[i] === "e") {
        console.log(i, "napovnia e");
    }
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:

let numb5 = [100, 200, 300, 400, 500];

for (let i = 0; i < numb5.length; i++) {
    if (numb5[i] < 250) {
        console.log(numb5[i]);
    }   
}