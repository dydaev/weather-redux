
const Tools = {
	convertTemp : (temp) => {
		let res = parseInt(temp);

		return  res > 0 ? "+" + res : res;
	}
}

export default Tools;