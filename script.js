const txt = document.getElementById("txt")

let count = 0

function main() {
	count++

	if (count >= 45) {
		if (txt.style.visibility === "visible") txt.style.visibility = "hidden"
		else txt.style.visibility = "visible"
		count = 0
	}

	requestAnimationFrame(main)
}

main()
