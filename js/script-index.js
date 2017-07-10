$(document).ready( function(){

	// ocultar flecha y mantener menu
	$('.js-back').hide(1000);
	$('.js-menu').show(1000); // tiempo 	

	// imprimir Texto NUEVAS RECETAS
	$(function(printNews){
		$('p').append("NUEVAS RECETAS");
	})

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


	


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {	
	//For para recorrer
	var array = recipesArray.forEach(function(el){ // forEach para que recorra
		var filtro = el.highlighted;

		if(filtro == true){
			return renderRecipe();
		}
	})
		console.log('Recipes: ', recipesArray);
}



/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {

	$.ajax({
		url: '', // link donde estan todos los pokes
		type: 'GET', // obtener datos
		dataType: 'JSON', 
		data: {'limit': '811'}, // hasta 811 pokes :S
	})
	.done(function(pok) {
		mostrar(pok.results); // variable que recorrera los pokes
		console.log(pok);
		console.log("success");
	})
	.fail(function() {
		console.log("error"); // para errores
	})
	.always(function() {
		console.log("complete"); 
});

	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ title + '</span><span class="metadata-recipe"><span class="author-recipe">' + source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="<img src="img/recipes/640x480/' + recipe.name + '.jpg"/></a>');

	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


