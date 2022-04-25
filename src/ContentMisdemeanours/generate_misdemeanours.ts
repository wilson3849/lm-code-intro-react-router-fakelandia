import { mdProps } from "./misdemeaner";

export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;
export type Misdemeanour = typeof MISDEMEANOURS[number];


export default async function generateMisdemeanours(
	number: number
): Promise<Array<mdProps>> {
	// pretend this is an API we're calling, wait 1.5s
	await sleep(1500);

	let amount = number ?? 50;
	console.log("amount"+ amount);
	const misdemeanours = [];

	for (let i = 0; i < amount; i++) {
		misdemeanours.push({
			citizenId: Math.floor(i + rand(37) * rand(967)),
			misdemeanour: choose<Misdemeanour>([...MISDEMEANOURS]),
			date: new Date().toLocaleDateString(),
		});
	}
	console.log("length"+ misdemeanours.length);
	return misdemeanours;
}

function rand(x: number): number {
	return Math.random() * x;
}

/// take just one T from an array of T
function choose<T>(arr: Array<T>): T {
	if (!arr) arr = [];
	return arr[Math.floor(Math.random() * arr.length)];
}

// In the real world, you wouldn't want to fake a 'sleep' like this, but for our purposes of faking an API
// this quick-and-dirty solution will do the job.
const sleep = async (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
