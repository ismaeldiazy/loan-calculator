export function calculateTotal(amount, period) {
    // Amounts
    let totalAmount;

    if (amount <= 1000) {
        totalAmount = amount * 0.25;
    }else if (amount > 1000 && amount <= 5000) {
        totalAmount = amount * 0.20;
    }else if (amount > 5000 && amount <= 1000) {
        totalAmount = amount * 0.15;
    }else {
        totalAmount = amount * 0.10;
    }

    let totalTimePeriod = 0;

    switch(period) {
        case 3:
            totalTimePeriod = amount * .05;
            break;
        case 6:
            totalTimePeriod = amount * .10;
            break;
        case 12:
            totalTimePeriod = amount * .15;
            break;
        case 24:
            totalTimePeriod = amount * .15;
            break;
    }
    
    return totalTimePeriod + totalAmount + amount;
}