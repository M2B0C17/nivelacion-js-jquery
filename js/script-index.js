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
			return renderRecipe(el); // faltaba colocarle el valor dentro de la funcion para que funcione la iteración
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
	
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+ recipe.title + '</span><span class="metadata-recipe"><span class="author-recipe">'+ recipe.source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/'+ recipe.name + '.jpg"></a>');

	console.log('Voy a pintar la receta: ', recipe);
}

/* NOTA IMPORTANTE!!!  
ERROR: La funcion anterior que recorre el arreglo y todo, lo hacia con mi parametro (el), que es el elemento,
al retornar o llamar a la siguiente funcion, quedaba inutil, ya que, sin pasarle el elemento que recorre y 
filtra (true), se corta la cadena y no se une a la siguiente función. Por lo tanto, el valor dejaba de 
existir.
*/

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	var filtro2 = activitiesArray.length; // una vez que se cumple esta condicion se recorre
		if(filtro > 0){			
			var array = activitiesArray.forEach(function(el2){ // forEach para que recorra
				return renderActivity(el2); // llamamos a la siguiente funcion 
				$('.wrapper-message').remove();
			});
	}
}


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


