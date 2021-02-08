// JavaScript For Search by Male Name - Start.
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', getMealListByName);
function getMealListByName() {
    let searchInputTxt = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let innerHtml = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    innerHtml = innerHtml + `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <button href = "#" class = "ingredient-btn">Get Ingredient</button>
                        </div>
                    </div>
                `;

                });
                mealList.classList.remove('notFound');
            } else {
                innerHtml = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = innerHtml;
        });
}
// JavaScript For Search by Male Name - End.

//JavaScript For Search by Male Name Frist Letter - Start.
const searchBtn2 = document.getElementById('search-btn');
searchBtn2.addEventListener('click', getMealListByFirstLetter);
function getMealListByFirstLetter() {
    let searchInputTxt = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html = html + `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <button href = "#" class = "ingredient-btn">Get Ingredient</button>
                        </div>
                    </div>
                `;

                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}
//JavaScript For Search by Male Name Frist Letter - End.

//JavaScript For Meal Details - Start.
const mealList = document.getElementById('meal');
mealList.addEventListener('click', getMealIngredient);
function getMealIngredient(maleIngredient) {
    if (maleIngredient.target.classList.contains('ingredient-btn')) {
        let mealItem = maleIngredient.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealIngredient(data.meals));
    }
}

function mealIngredient(meal) {
    meal = meal[0];
    let html = `
         <div class = "ingredient-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div id="ingredientList">
        <h1 class = "ingredient-title">${meal.strMeal}</h1>
            <h2 id= "ingredient">ingredient:</h2>
            <ul>
            <li>❏${meal.strIngredient1}</li>
            <li>❏${meal.strIngredient2}</li>
            <li>❏${meal.strIngredient3}</li>
            <li>❏${meal.strIngredient4}</li>
            <li>❏${meal.strIngredient5}</li>
            <li>❏${meal.strIngredient6}</li>
            <li>❏${meal.strIngredient7}</li>
            <li>❏${meal.strIngredient8}</li>
            <li>❏${meal.strIngredient9}</li>
            <li>❏${meal.strIngredient10}</li>
            </ul>
        </div>
    `;
    const mealDetailsContent = document.querySelector('.meal-details-content');
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
//JavaScript For Meal Details - End.