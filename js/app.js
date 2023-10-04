let databody = document.body;

function successFunction(response) {
    // Do success code here

    console.log(response);
    const datafromResponse= response.meals;
    diplaydata(datafromResponse);

}
function failureFunction(error) {
    // Do failure code here
    console.log('failure');
    databody.insertAdjacentHTML('afterend', '<h3>no luck loading</h3>');
}

function diplaydata(datafromResponse) {
    
    console.log(datafromResponse);  
    console.log(datafromResponse.length);

    let counter = 0;
    while (counter < datafromResponse.length ){
        let post = datafromResponse[counter];
        databody.insertAdjacentHTML('afterend',`<h4>${post.strMeal}</h4><h3>${post.strArea}</h3><p>${post.strInstructions}</p>`);
        counter = counter + 1;
    }
}

axios.request({
    url: `www.themealdb.com/api/json/v1/1/filter.php`,
    
    params: {
        c:'chicken'
    }
}).then(successFunction).catch(failureFunction);