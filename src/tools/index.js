
const Tools = {
	getNextPeriod: (periods, currentPeriod) =>
  {
    let nextPeriod = periods.find(period => period > currentPeriod)
    return nextPeriod || periods[0];
  },
	convertTemp : temp =>
	{
		temp = parseInt(temp, 10);
		return  temp > 0 ? "+" + temp : temp;
	}
}

export default Tools;
