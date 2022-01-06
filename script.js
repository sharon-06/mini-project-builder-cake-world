var layer = 0;
var layer1 = document.getElementById("layer1")
var layer2 = document.getElementById("layer2")
var layer3 = document.getElementById("layer3")
var layer4 = document.getElementById("layer4")
var layer5 = document.getElementById("layer5")
var bill = 0;
var item1 = 0;
var item2 = 0;
var item3 = 0;
var item4 = 0;
var item5 = 0;
var candle = document.getElementById("candle")
var chokyPrice = document.getElementById('item1')
var strawPrice = document.getElementById('item2')
var butterPrice = document.getElementById('item3')
var vannilaPrice = document.getElementById('item4')
var redvelPrice = document.getElementById('item5')

function Chocolate() {
    bill += 300;
    item1 += 300;
    chokyPrice.innerHTML = "Chocolate ----------- " + item1
    layer++;

    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
           layer1.style.background = '#7B3F00';
            break;
        case 2:
            layer2.style.visibility = 'visible';
           layer2.style.background = '#7B3F00';
            break;
        case 3:
            layer3.style.visibility = 'visible';
           layer3.style.background = '#7B3F00';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#7B3F00';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#7B3F00';
            candle.style.visibility = 'visible';
            break;

        default:
            bill -=300;
            alert("Sorry.....Max 5 layers are allowed")
    }
    console.log(bill);

}

function Strawberry() {
    bill += 100;
    item2 += 100;
    layer++;
    strawPrice.innerHTML = "Strawberry ---------- " + item2
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#fc5a8d';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#fc5a8d';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#fc5a8d';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#fc5a8d';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#fc5a8d';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry.....Max 5 layers are allowed")
    }
    console.log(bill);
}

function Butterscotch() {
    bill += 200;
    item3 += 200;
    layer++;
    butterPrice.innerHTML = "ButterScotch -------- " + item3
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#FFC300';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#FFC300';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#FFC300';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#FFC300';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#FFC300';
            candle.style.visibility = 'visible';
            break;
        default:
            bill -=200;
            alert("Sorry.....Max 5 layers are allowed")
    }
    console.log(bill);
}

function Vannila() {
    bill += 250;
    item4 += 250;
    layer++;
    vannilaPrice.innerHTML = "Vannila --------------- " + item4
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#F3E5AB';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#F3E5AB';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#F3E5AB';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#F3E5AB';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#F3E5AB';
            candle.style.visibility = 'visible';
            break;
        default:
            bill -=250;
            alert("Sorry.....Max 5 layers are allowed")
    }
    console.log(bill);
}

function Redvelvet() {
    bill += 350;
    item5 += 350;
    layer++;
    redvelPrice.innerHTML = "RedVelvet ------------ " + item5
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#7F2A3C';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#7F2A3C';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#7F2A3C';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#7F2A3C';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#7F2A3C';
            candle.style.visibility = 'visible';
            break;
        default:
            bill -=350;
            alert("Sorry.....Maxi 5 layers are allowed")
    }
    console.log(bill);
}

function Buy() {
    candle.style.visibility = 'visible';
    if (layer == 1) {
        candle.style.top = '96%';
    }
    else if (layer == 2) {
        candle.style.top = '63%';
    }
    else if (layer == 3) {
        candle.style.top = '33%';
    }
    else if (layer == 4) {
        candle.style.top = '-1%';
    }
    var total = document.getElementById('total')
    total.innerHTML = "TOTAL --------------- " + bill
}