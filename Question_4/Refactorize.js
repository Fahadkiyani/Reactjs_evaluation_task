// After Refactorization.
switch (province) {
    case "ONTARIO": {
        rate = ONTARIO_RATE;
        amt = base * ONTARIO_RATE;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        break;
    }
    case ("QUEBEC" || "ALBERTA"): {
        rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
        amt = base * rate;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        break;
    }
    default:
        rate = 1;
        amt = base;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        break;
}


// Original Problem.
// if (province == 'ONTARIO') {
//     rate = ONTARIO_RATE;
//     amt = base * ONTARIO_RATE;
//     calc = 2 * basis(amt) + extra(amt) * 1.05;
// } else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
//     rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
//     amt = base * rate;
//     calc = 2 * basis(amt) + extra(amt) * 1.05;
//     if (province == 'QUEBEC') {
//         points = 2;
//     }
// } else {
//     rate = 1;
//     amt = base;
//     calc = 2 * basis(amt) + extra(amt) * 1.05;
// }
