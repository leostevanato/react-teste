function MadeGoal() {
	return <h2>GOOOOL!!!</h2>
}

function MissedGoal() {
	return <h2>ERROU!!!</h2>
}

function Goal(props) {
	console.log(props.isGoal);
	
	return (
		<>
			{ props.isGoal ? <MadeGoal /> : <MissedGoal /> }
		</>
	);
}

function Football() {
	const shoot = (txt, evt) => {
		console.log(txt);
		console.log(evt.type);
	}

	return (
		<>
			<button onClick={ (event) => shoot("Olá mundo!", event) }>Take the shot!</button>
			<Goal isGoal={ true } />
		</>
	);
}

export default Football;