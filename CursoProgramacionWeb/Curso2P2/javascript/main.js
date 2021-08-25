console.log("Hola Mundo desde JS");

//DOM

// let links = document.querySelectorAll("a");

// links.forEach(function(link){
// 	console.log(link);
// });

//		Evento cerrar ventana

let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function(cierre){

	cierre.addEventListener('click',function(ev){
		
		//Evitamos funcionalidad predefinida
		ev.preventDefault();

		let content = document.querySelectorAll('.content');
		content.forEach(function(contenido){
		
			//Quitamos vieja animacion
			contenido.classList.remove("animate__flipInX");
			contenido.classList.remove("animated");
		
			//Agregamos nueva animacion
			contenido.classList.add("animate__flipOutX");
			contenido.classList.add("animated");
		
			//Devolvemos funcionalidad de cierre
			setTimeout(function(){
				location.href = "../";
			},600);

		});
	})
});