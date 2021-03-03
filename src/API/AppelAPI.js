

export let getMealDetailsById = (idMeal) => {
    let item
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian')
        .then((response) => response.json())
        .then((json) => { item = json.meals })
   return item
}