const people = [
	"Patxi",
	"Francis",
	"Thais",
	"Loli",
	"Barti",
	"María",
	"Tito",
	"Toñi",
	"Lolo",
	"Manuel",
	"Mario",
	"Carol madre",
	"Vicen",
	"Carol hija",
	"Bruno",
	"Modesta"
];
const bans = [
	[0, 1, 2],
	[0, 1, 2],
	[0, 1, 2],
	[3, 4, 5, 6],
	[3, 4, 5, 6, 15],
	[3, 4, 5, 6],
	[3, 4, 5, 6, 15],
	[7, 8, 9, 10],
	[7, 8, 9, 10],
	[7, 8, 9, 10],
	[7, 8, 9, 10],
	[11, 12, 13, 14],
	[11, 12, 13, 14],
	[11, 12, 13, 14],
	[11, 12, 13, 14],
	[4, 6]
];
const codes = [
	111,
	222,
	343,
	5,
	264,
	5464,
	64554,
	423432,
	76587,
	65443,
	23464,
	4235574,
	4564564,
	8679678,
	456346,
	75678568
];
const results = [
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1,
	-1
];

var result_label

window.onload = function() {
	result_label = document.getElementById("result")
	result_label.style.display = "none"
	let random_number
	let tries
	const LCG = (s) => (_) => (s = Math.imul(48271, s) >>> 0)
	const nxt = LCG(67575634)
	let random = function()
			{
				var n = nxt() / 100;
				return (n - Math.floor(n))
			}
	for (let i = 0; i < codes.length; i++)
	{
		tries = 0
		random_number = bans[i][0]
		while((bans[i].includes(random_number) || results.includes(random_number)) && tries < 1000)
		{
			random_number = Math.floor(random() * 16);
			tries++;
		}
		if(tries == 1000)
		{
			for (let j = 0; j < results.length; j++)
				results[j] = -1
			console.log("Combinación imposible, vuelvo a empezar");
			i = -1;
		}
		else
		{
			results[i] = random_number;
		}

	}
}
function calc()
{
	let input = parseInt(document.getElementById("code").value);
	result_label.style.display = "none"
	for (let i = 0; i < codes.length; i++)
	{
		console.log(input + ", " + codes[i]);
		if(input == codes[i]){
			result_label.innerHTML = people[i] + " regala a " + people[results[i]];
			result_label.style.display = "block"
			console.log("codigo valido");
		}
	}
	console.log("Entro");
}