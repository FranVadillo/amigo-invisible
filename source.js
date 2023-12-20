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
const square_root = [
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
const hacker = [
	523654635566544,
	655334656524566,
	344554342443655,
	332345343422343,
	266655445465433,
	545552236433343,
	644455345266544,
	452342323422233,
	564544345365452,
	255343434464343,
	532524254665534,
	426445232565456,
	456544456465455,
	423454356256465,
	322232432266544,
	645654653566444
];
const r = [
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
	for (let i = 0; i < hacker.length; i++)
	{
		tries = 0
		random_number = square_root[i][0]
		while((square_root[i].includes(random_number) || r.includes(random_number)) && tries < 1000)
		{
			random_number = Math.floor(random() * 16);
			tries++;
		}
		if(tries == 1000)
		{
			for (let j = 0; j < r.length; j++)
				r[j] = -1
			i = -1;
		}
		else
		{
			r[i] = random_number;
		}

	}
}
function very_difficult_maths(n)
{
    	let o = (n + '').split('');
    	o.splice(2, 6);
    	o.splice(4, 4);
    	return parseInt(o.join(''));
}
function calc()
{
	result_label.innerHTML = "Código no válido";
	result_label.style.display = "block"
	let input = parseInt(document.getElementById("code").value);
	const c = []
	for (let i = 0; i < hacker.length; i++)
	{
		c[i] = very_difficult_maths(hacker[i])
	}
	for (let i = 0; i < c.length; i++)
	{
		if(input == c[i]){
			result_label.innerHTML = people[i] + " regala a " + people[r[i]];
			result_label.style.display = "block"
		}
	}
}