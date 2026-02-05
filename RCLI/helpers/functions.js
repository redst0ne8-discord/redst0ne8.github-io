function displayHomeStats(r, f, pwr, u, start=false) {
    if (u === 'redst0ne8@secure.rcli.net') {
        user = 'redst0ne8';
    }
    if (start === true) {
        console.clear();
        console.log(`--- Reactor Stats ---\n\nFuel Level: ${f}\nCurrent Demand: ${pwr}\nOperator: ${user}\n------------------\n\n Rods Percentage: ${((r/100))}`);
    }

};

module.exports = {
    displayHomeStats
};