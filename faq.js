
// Skabelonen til dette JavaScript er taget fra et tidligere projekt

function openAnswer(id){

    var answer = document.getElementById("answer" + id); // + id betyder at man kan vælge hvilket spørgsmål man trykker på
    answer.classList.toggle("hideAnswer"); //toggler classlisten hideAnswer på answer
    answer.classList.toggle("answerSection");

    var img = document.getElementById("img" + id); //man henter img inde i html
    if(answer.classList.contains("answerSection")){ //hvis classlisten indholder answersection på answer, så vil den vise minus ikoner og hvis ikke vil den vise plus
        img.src = "/unmuteeksamen/assets/minus.png";a
    }else {
        img.src = "/unmuteeksamen/assets/add.png";
    }
}