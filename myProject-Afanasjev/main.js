// Taking Summ of H & W 
const rowLenght = 3;
const colLenght = 4;
const blockSum = rowLenght * colLenght;

// Main Array
const mainArray = [];

function ex() {
    // Creating Main Block 
    const main = document.getElementById('root');
    const block = document.createElement('div');
    main.appendChild(block);
    block.className = "container";

    // Creating Cells
    for (let i = 1; i <= blockSum; i++) {
        const blockCell = document.createElement('div');
        block.appendChild(blockCell);
        blockCell.className = "block-cell";
        blockCell.id = i;
    }


    for (let i = 1; i <= blockSum; i++) {
        mainArray.push(i.toString());
    }
}

function allRand() {
    // Making Array for twoOne
    let twoOneArray = [];
    for (i = 1; i <= blockSum; i++) {
        twoOneArray.push(i.toString());
    }
    i = rowLenght;
    delete twoOneArray[i - 1];
    delete twoOneArray[(i - 1) + i];
    delete twoOneArray[(i - 1) + (i * 2)];
    delete twoOneArray[(i - 1) + (i * 3)];
    let twoOneArrayLastStand = twoOneArray.filter(function (item) {
        return item !== undefined;
    });
    console.log(twoOneArray);
    console.log(mainArray);

    // Random for twoOne + next Cell
    let twoOneRand = twoOneArrayLastStand[Math.floor(Math.random() * twoOneArrayLastStand.length)];
    let twoOneID = document.getElementById(twoOneRand.toString());
    let twoOneImage = document.createElement('img');
    twoOneImage.setAttribute("src", "img/twoOne/1.jpg");
    twoOneID.appendChild(twoOneImage);
    twoOneImage.className = 'two-one';

    let twoOneIDPlus = document.getElementById((Number(twoOneRand) + 1));
    // twoOneIDPlus.style.backgroundColor = 'red';

    // Making Array for second twoOne
    delete twoOneArray[twoOneRand - 2];
    delete twoOneArray[twoOneRand - 1];
    delete twoOneArray[twoOneRand];

    // Random for second twoOne + next Cell

    twoOneArrayLastStand = twoOneArray.filter(function (item) {
        return item !== undefined;
    });
    let twoOneSecondRand = twoOneArrayLastStand[Math.floor(Math.random() * twoOneArrayLastStand.length)];
    let twoOneSecondID = document.getElementById(twoOneSecondRand.toString());
    let twoOneSecondImage = document.createElement('img');
    twoOneSecondImage.setAttribute("src", "img/twoOne/2.jpg")
    twoOneSecondID.appendChild(twoOneSecondImage);
    twoOneSecondImage.className = 'two-one';
    let twoOneSecondIDPlus = document.getElementById((Number(twoOneSecondRand) + 1));

    // New Array for oneTwo 
    const oneTwoArray = [];
    for (i = 1; i <= blockSum; i++) {
        oneTwoArray.push(i.toString());
    }

    delete oneTwoArray[blockSum - 1];
    delete oneTwoArray[blockSum - 2];
    delete oneTwoArray[blockSum - 3];
    delete oneTwoArray[Number(twoOneRand)];
    delete oneTwoArray[Number(twoOneRand) - rowLenght];
    delete oneTwoArray[(Number(twoOneRand) - 1).toString()];
    delete oneTwoArray[((Number(twoOneRand) - 1) - rowLenght).toString()];
    delete oneTwoArray[Number(twoOneSecondRand)];
    delete oneTwoArray[Number(twoOneSecondRand) - rowLenght];
    delete oneTwoArray[(Number(twoOneSecondRand) - 1).toString()];
    delete oneTwoArray[((Number(twoOneSecondRand) - 1) - rowLenght).toString()];


    oneTwoArrayLastStand = oneTwoArray.filter(function (item) {
        return item !== undefined;
    });
    let oneTwoRand = oneTwoArrayLastStand[Math.floor(Math.random() * oneTwoArrayLastStand.length)];

    let oneTwoID = document.getElementById(oneTwoRand.toString());
    let oneTwoImage = document.createElement('img');
    oneTwoImage.setAttribute("src", "img/oneTwo/1.jpg")
    oneTwoID.appendChild(oneTwoImage);
    oneTwoImage.className = 'one-two';
    let oneTwoIDPlus = document.getElementById((Number(oneTwoRand) + rowLenght));

    // Second oneTwo
    delete oneTwoArray[(Number(oneTwoRand) - 1).toString()]
    delete oneTwoArray[((Number(oneTwoRand) - 1) + rowLenght).toString()]
    delete oneTwoArray[((Number(oneTwoRand) - 1) - rowLenght).toString()]

    twoOneSecondStand = oneTwoArray.filter(function (item) {
        return item !== undefined;
    });

    let oneTwoSecondRand;

    if (Number(twoOneSecondStand.length) > 0) {
        oneTwoSecondRand = twoOneSecondStand[Math.floor(Math.random() * twoOneSecondStand.length)];
        let oneTwoSecondID = document.getElementById(oneTwoSecondRand.toString());
        let oneTwoSecondImage = document.createElement('img');
        oneTwoSecondImage.setAttribute("src", "img/oneTwo/3.jpg")
        oneTwoSecondID.appendChild(oneTwoSecondImage);
        oneTwoSecondImage.className = 'one-two';
        let oneTwoSecondIDPlus = document.getElementById((Number(oneTwoSecondRand) + rowLenght));
    }

    // Making Array for one
    let oneArray = [];
    for (i = 1; i <= blockSum; i++) {
        oneArray.push(i.toString());
    }
    delete oneArray[Number(twoOneRand)];
    delete oneArray[Number(twoOneRand) - 1];
    delete oneArray[Number(twoOneSecondRand)];
    delete oneArray[Number(twoOneSecondRand) - 1];
    delete oneArray[Number(oneTwoRand) - 1];
    delete oneArray[((Number(oneTwoRand) - 1) + rowLenght)];
    if (oneTwoSecondRand !== undefined) {
        delete oneArray[Number(oneTwoSecondRand) - 1];
        delete oneArray[((Number(oneTwoSecondRand) - 1) + rowLenght)];
    }
    oneLastStand = oneArray.filter(function (item) {
        return item !== undefined;
    });

    let oneRest = oneLastStand.map(function (item) {
        if (item !== undefined) { return item }
    });


    let oneRandom;
    let oneRandomID;
    let oneRandomIDIndex;
    let one = 0;
    let img = 0;

    while (one < oneRest.length) {
        oneRandom = oneRest[Math.floor(Math.random() * oneRest.length)];
        oneRandomID = document.getElementById(oneRandom);
        oneRandomIDIndex = oneRest.indexOf(oneRandom);
        let oneImage = document.createElement('img');
        oneImage.setAttribute("src", "img/one/" + img + ".jpg")
        oneRandomID.appendChild(oneImage);
        oneImage.className = 'one effect';

        oneRest.splice([oneRandomIDIndex], 1);
        img++;
    }
    delete twoOneArray;
}

