const txt = document.getElementById("txt")
let count = 0

function main() {
	count++
	if (count >= 45) {
		count = 0
		if (txt.style.visibility === "visible") txt.style.visibility = "hidden"
		else txt.style.visibility = "visible"
	}
	requestAnimationFrame(main)
}

main()
