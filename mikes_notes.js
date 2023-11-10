
async function getCategoryIds() {
    const randomOffset = 3 // TODO: make this random between 1 and ???
    const categoriesResp = axios.get(`https://jservice.io/api/categories?count=6&offset=${randomOffset}`)
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
async function getCategory(_id) {
    const catResp = await axios.get(`https://jservice.io/api/category?id=${_id}`)
    return {
        "title": catResp.title,
        "clues": catResp.clues
    }
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

// They think this should be async for some reason?
async function fillTable() {
    // // Get Random category Ids
    // const catIds = await getCategoryIds()

    // // Get the actual category data for each Category Id
    // const _tableCategories = []
    // for (let i = 0; i < 6; i++) {
    //     const catId = catIds[i]
    //     const cat = await getCategory(catId)
    //     const catData = {title: cat.title, ...}
    //     _tableCategories.push(catData)
    // }

    cat_0 = {
        "name": "'T' Time",
        "clues": [
            { "hint": "t pedo", "answer": "duey" },
            { "hint": "t pedo 2", "answer": "duey 2" },
            { "hint": "t pedo 3", "answer": "duey 3" },
            { "hint": "t pedo 4", "answer": "duey 4" },
            { "hint": "t pedo 5", "answer": "duey 5" },
        ]
    }
    cat_1 = {
        "name": "Pop Quiz",
        "clues": [
            { "hint": "Pop pedo", "answer": "duey" },
            { "hint": "Pop pedo 2", "answer": "duey 2" },
            { "hint": "Pop pedo 3", "answer": "duey 3" },
            { "hint": "Pop pedo 4", "answer": "duey 4" },
            { "hint": "Pop pedo 5", "answer": "duey 5" },
        ]
    }
    cat_2 = {
        "name": "Anatomy",
        "clues": [
            { "hint": "Anatomy pedo", "answer": "duey" },
            { "hint": "Anatomy pedo 2", "answer": "duey 2" },
            { "hint": "Anatomy pedo 3", "answer": "duey 3" },
            { "hint": "Anatomy pedo 4", "answer": "duey 4" },
            { "hint": "Anatomy pedo 5", "answer": "duey 5" },
        ]
    }
    cat_3 = {
        "name": "1933",
        "clues": [
            { "hint": "1933 pedo", "answer": "duey" },
            { "hint": "1933 pedo 2", "answer": "duey 2" },
            { "hint": "1933 pedo 3", "answer": "duey 3" },
            { "hint": "1933 pedo 4", "answer": "duey 4" },
            { "hint": "1933 pedo 5", "answer": "duey 5" },
        ]
    }
    cat_4 = {
        "name": "Heraldry",
        "clues": [
            { "hint": "Heraldry pedo", "answer": "duey" },
            { "hint": "Heraldry pedo 2", "answer": "duey 2" },
            { "hint": "Heraldry pedo 3", "answer": "duey 3" },
            { "hint": "Heraldry pedo 4", "answer": "duey 4" },
            { "hint": "Heraldry pedo 5", "answer": "duey 5" },
        ]
    }
    cat_5 = {
        "name": "Movies",
        "clues": [
            { "hint": "Movies pedo", "answer": "duey" },
            { "hint": "Movies pedo 2", "answer": "duey 2" },
            { "hint": "Movies pedo 3", "answer": "duey 3" },
            { "hint": "Movies pedo 4", "answer": "duey 4" },
            { "hint": "Movies pedo 5", "answer": "duey 5" },
        ]
    }

    let tableCategories = [
        cat_0,
        cat_1,
        cat_2,
        cat_3,
        cat_4,
        cat_5,
    ]

    $("table").append("<thead></thead").append("<tr></tr>");
    for (cat of tableCategories) {
        let td = $('<td>').html(cat.name).addClass("category");
        $("tr").append(td);
    }

    // TODO: THIS is skipping lot of data. Check the elements in the dev tools and look at the attributes
    // TODO: on-click of the cells should switch the attribute of the <td>
    $("table").append("<tbody></tbody");
    for (i = 0; i < 6; i++) {
        $("tbody").append("<tr></tr>")
        for (cat of tableCategories) {
            let catIdx = tableCategories.indexOf(cat);
            let tdClue = `<td class="clue" id="${i}-${catIdx}" hint="${cat.clues[catIdx].hint}" answer="${cat.clues[catIdx].answer}">?</td>`;
            // Using that ID because I imagine this is how I will call out specific <td> elements
            $("tr").eq(i + 1).append(tdClue);

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
    if (element.classList.contains("clue")) {
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
function setupAndStart() {
    // generate random offset

    // get cantegory Ids


    // for (cat of categoryIds){
    //     let category = await axios.get('https://jservice.io/api/category', {params: { id : cat }});
    //     let data = category.data;
    //     // data.showing = null;
    //     categories.push(data);
    // }

    $("body").prepend("<table id='jeopardy'></table");

    fillTable()
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

setupAndStart()
