function Football() {
	const shoot = (a, b) => {
		console.log(a);
		console.log(b.type);
	}

	return (
		<button onClick={(event) => shoot("Olá mundo!", event)}>Take the shot!</button>
	);
}

export default Football;