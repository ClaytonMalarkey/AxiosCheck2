let databody = document.body;
let formsubmisson= document.getElementById("formsubmitted");

formsubmisson.addEventListener("submit", (e) => {
    e.preventDefault();
    postsubmit(e);
  
    // handle submit
});

function successFunction(response) {
    // Do success code here

    console.log(response);
    const datafromResponse= response.meals;
    diplaydata(datafromResponse);

}

function success2(response){
    console.log(response);
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


function postsubmit (formsubmisson) {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        
    title: formsubmisson.title,
    body: formsubmisson.body,
    userId  : formsubmisson.userId

}).then(success2).catch(failureFunction);
}


