// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
	let sum = 0;

	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i];
		sum += number ** 2;
	}
	return sum;
}