const txt1 = document.getElementById("txt1")
const txt2 = document.getElementById("txt2")
const txt3 = document.getElementById("txt3")

let count = 0

function main() {
	count++

	if (count >= 45 * 6) count = 0

	if (count % 45 === 0) {
		txt1.style.visibility = "hidden"
		txt2.style.visibility = "hidden"
		txt3.style.visibility = "hidden"

		if (count === 45) txt1.style.visibility = "visible"
		if (count === 45 * 3) txt2.style.visibility = "visible"
		if (count === 45 * 5) txt3.style.visibility = "visible"
	}

	requestAnimationFrame(main)
}

main()
