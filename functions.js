
function toggleRecipeDetails(instructionId, button) {
	var textElement = document.getElementById(instructionId);
	if (textElement.style.display === "none" || textElement.style.display === "") {
		textElement.style.display = "block";
		button.textContent = "Hide Recipe Details";
	} else {
		textElement.style.display = "none";
		button.textContent = "Show Recipe Details";
	}
}
function showAbout() {
	document.querySelector('.h2').style.display = "none";
	document.querySelector('.recipe-container').style.display = "none";
	document.querySelector('.ingredients').style.display = "none";
	document.getElementById('about-us-section').style.display = "flex";
	const dinner = document.getElementById('dinner-recipe');
	if (dinner) dinner.style.display = "none";
	const breakfast = document.getElementById('breakfast-recipe');
	if (breakfast) breakfast.style.display = "none";
	const lunch = document.getElementById('lunch-recipe');
	if (lunch) lunch.style.display = "none";
	const dessert = document.getElementById('dessert-recipe');
	if (dessert) dessert.style.display = "none";
	const vegan = document.getElementById('vegan-recipe');
	if (vegan) vegan.style.display = "none";
	const vegetarian = document.getElementById('vegetarian-recipe');
	if (vegetarian) vegetarian.style.display = "none";
}

function showFavourite(){
	document.querySelector('.h2').style.display = "none";
	document.querySelector('.recipe-container').style.display = "none";
	document.querySelector('.ingredients').style.display = "none";
	const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  document.querySelectorAll('.fav-button').forEach(button => {
    const recipeId = button.getAttribute('data-id');
    if (favourites.includes(recipeId)) {
      button.classList.add('active');
    }
  });
}
function toggleFavourite(button) {
  const recipeId = button.getAttribute('data-id');
  const favourites = JSON.parse(localStorage.getItem('Favourites')) || [];
  const index = favourites.indexOf(recipeId);
  if (index === -1) {
    favourites.push(recipeId);
    button.classList.add('active');
  } else {
    favourites.splice(index, 1);
    button.classList.remove('active');
  }
  localStorage.setItem('Favourites', JSON.stringify(favourites));
}

function showRecipe(recipeId) {
	document.querySelector('.h2').style.display = "none";
	document.querySelector('.recipe-container').style.display = "none";
	document.querySelector('.ingredients').style.display = "none";
	document.getElementById('about-us-section').style.display = "none";
	const allRecipes = document.querySelectorAll('.recipe');
	allRecipes.forEach(recipe => recipe.style.display = "none");

	const recipe = document.getElementById(recipeId);
	if (recipe) recipe.style.display = "block";

	const allRecipeDetails = document.querySelectorAll('.recipeInstruction');
	allRecipeDetails.forEach(instruction => instruction.style.display = "none");
}

function loadContent() {
	document.querySelector('.h2').style.display = "none";
	const recipeContainer = document.querySelector('.recipe-container');
	const ingredients = document.querySelector('.ingredients');
	const about = document.getElementById('about-us-section');
	if (recipeContainer) recipeContainer.style.display = "none";
	if (ingredients) ingredients.style.display = "none";
	if (about) about.style.display = "none";
	
}

document.getElementById('searchInput').addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		searchRecipe();
	}
})



function searchRecipe() {
	const input = document.getElementById('searchInput').value.toLowerCase();
	const recipeMap = {
		"dinner":"dinner-recipe", "soup": "dinner-recipe", "chicken": "dinner-recipe", "kale": "dinner-recipe","squash bowl": "dinner-recipe","vermicelli": "dinner-recipe","eggs":"dinner-recipe","lime":"dinner-recipe",
		"breakfast": "breakfast-recipe","pancakes": "breakfast-recipe","german pancake":"breakfast-recipe","sour crem pancakes With Cardamon Apples":"breakfast-recipe","apples":"breakfast-recipe",
		"lunch": "lunch-recipe","toast":"lunch-recipe","Smoked Salmon and Avocado Toast With Carrot Salad":"lunch-recipe","chaat":"lunch-recipe",
		"dessert":"dessert-recipe", "brownie":"dessert-recipe","skillet chocolate chip cookie":"dessert-recipe", "cookie" : "dessert-recipe","chocolate":"dessert-recipe",
		"vegan": "vegan-recipe", "salad":"vegan-recipe","caesar":"vegan-recipe","pesto":"vegan-recipe",
		"vegetarian": "vegetarian-recipe","pozole":"vegetarian-recipe","zucchini":"vegetarian-recipe",
	};
	let foundId = null;
	for (let keyword in recipeMap) {
		if (input.includes(keyword)) {
			foundId = recipeMap[keyword];
			break;
		}
	}
	if (foundId) {
		showRecipe(foundId);
	} else {
		alert("Sorry, no matching recipe found ");
	}
}


function toggleDropdown() {
  const dropdown = document.getElementById('recipeDropdown');
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}



    function toggleMenu() {
      const menu = document.getElementById('navMenu');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }

    function toggleRecipeMenu() {
      const dropdown = document.getElementById('recipeDropdown');
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    function toggleLogin() {
      const modal = document.getElementById('loginModal');
      const main = document.getElementById('mainContent');
      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
      main.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }

   