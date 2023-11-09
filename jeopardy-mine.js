let categories = [];
let categoryIds = [];

//This is just a function for me to run my code in the browser while I tinker with things
function testHelper(){
    setupAndStart();
    setTimeout(() => {
        fillTable()
    }, 2000);;
}




/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

// I don't know what the fuck they wanted me to do here, this is covered in the async setup function at the bottom.
function getCategoryIds() {
    
}


/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

// I'm not really sure what the point of this was either, but I put it in just to add the "showing" key that they recommended
function getCategory(categories, idx) {
    let title = categories[idx].title;
    let clues = [categories[idx].clues];
    return {title, clues, showing : 'null'};
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// They think this should be async for some reason?
function fillTable() {
    $("table").append("<thead></thead").append("<tr></tr>");
    for (cat of categories){
        let td = $('<td>').html(cat.title).addClass("category");
        $("tr").append(td);
    }

    $("table").append("<tbody></tbody");
    for (i=0; i<5; i++){
        $("tbody").append("<tr></tr>")
        for (cat of categories){
            let catIdx = categories.indexOf(cat);
            let tdClue = `<td class="clue" id="${i}-${catIdx}">?</td>`;
            // Using that ID because I imagine this is how I will call out specific <td> elements
            $("tr").eq(i+1).append(tdClue);
        }
    }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */


//My rough draft plan: Iterate over clues in a category, select clues randomly & add to set, stop when set.size = 5
document.addEventListener("click", handleClick)

function handleClick(evt) {
    console.log(evt.target)
    let element = evt.target;
    if(element.classList.contains("clue")){
        let catId = element.getAttribute('id')
        // very incomplete code, this is when my brain started breaking a bit
    }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

// This code is all me. They didn't have this function set as async, I'm not sure how you would initially set up a board without an async function already resolving data 
async function setupAndStart() {
    for (let i = 0; categoryIds.length<6; i++){
        let randOffset = Math.ceil(Math.random() * 14000);
        let randIdx = Math.floor(Math.random() * 100);
        let categories = await axios.get('https://jservice.io/api/categories', { params: { count: 100, offset : randOffset} });
        let catId = categories.data[randIdx].id;
        if (!categoryIds.includes(catId)) {
            categoryIds.push(catId)
        }
    }

    for (cat of categoryIds){
        let category = await axios.get('https://jservice.io/api/category', {params: { id : cat }});
        let data = category.data;
        // data.showing = null;
        categories.push(data);
    }

    $("body").prepend("<table id='jeopardy'></table");
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO