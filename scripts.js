(async function(){
	const request = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
	const response = await request.json();
	console.log(response);
  })()
