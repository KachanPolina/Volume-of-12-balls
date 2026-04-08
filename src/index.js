const FIRST_INNER_BALL_DIAMETER = 0.5;
const FIRST_INNER_BALL_THIKNESS = 10 / 1000;
let sumOfVolumes = 0;

for (let i = 1; i <= 12; i++) {
    let innerDiameter = FIRST_INNER_BALL_DIAMETER + 2 * FIRST_INNER_BALL_THIKNESS * (i-2);
    let volume = Math.PI * innerDiameter ** 3 / 6;
    sumOfVolumes += volume;
}

console.log(sumOfVolumes.toFixed(5));
