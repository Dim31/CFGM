let getMealDetailsById = (idMeal) => {
    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian')
        .then((response) => response.json())
        .catch((error) => {console.log(error)})
}
export let getSingleRandomMeal = () => {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json())
        .catch((error) => {console.log(error)})
}

export let getMealsByCategory = (option) => {
    return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + option)
        .then((response) => response.json())
        .catch((error) => {console.log(error)})
}

