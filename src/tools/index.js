
const Tools = {
	convertTemp : (temp) => {
		temp = parseInt(temp, 10);
		return  temp > 0 ? "+" + temp : temp;
	}
}

export default Tools;