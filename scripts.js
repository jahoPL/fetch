const imiono = document.querySelector("#imie");
const exp = document.querySelector("#exp")
const id = document.querySelector('#id')
const height = document.querySelector("#height")
let odpowiedz = null

async function pobierarka(){
	const request = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
	const response = await request.json();
	odpowiedz = response
	console.log(odpowiedz)
	console.log(1)
  }



(async function () {
	await pobierarka()
	imiono.innerHTML = "Imionko: " + odpowiedz.name;
	exp.innerHTML = "Base exp: " + odpowiedz.base_experience
	id.innerHTML = "Id: " + odpowiedz.id
	height.innerHTML = "Height: " + odpowiedz.height
	//.innerHTML = "" + odpowiedz.
})()