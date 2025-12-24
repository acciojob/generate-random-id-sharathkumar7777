function makeid(l) {
  // write your code here
	var res = "";
	var charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (let i = 0; i < l; i++) {
		res += charlist.charAt(
			Math.floor(
				Math.random() * charlist.length
			)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
