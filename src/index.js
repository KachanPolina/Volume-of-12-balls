const FIRST_INNER_BALL_DIAMETER = 0.5;
const FIRST_INNER_BALL_DIAMETER_CM = 0.5 * 100;
let firstInnerBallRadious = FIRST_INNER_BALL_DIAMETER_CM / 2;
let volumeOfBall = 0;
let sumOfVolumeOfBalls = 0;

for (let i = 1; i <= 12; i++) {
    volumeOfBall = 4/3 * Math.PI * Math.pow(firstInnerBallRadious, 3);
    firstInnerBallRadious++;
    sumOfVolumeOfBalls += volumeOfBall;
}

let sumOfVolumeOfBallsCm = sumOfVolumeOfBalls / 100;
console.log(sumOfVolumeOfBallsCm.toFixed(2));