function toggleText(button) {
    let allText = document.querySelectorAll('.click-text');
    allText.forEach(function(text) {
        if (text !== button.querySelector('.click-text')) {
            text.style.display = "none";
        }
    });

    let text = button.querySelector('.click-text');
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}


function movie(selectedBox) {
    let allMovies = document.querySelectorAll('.movie');

    allMovies.forEach(function (movieBox) {
        if (movieBox !== selectedBox) {
            let detail = movieBox.querySelector('.detail');
            detail.style.display = "none"; 
        }
     
    });

    let selectedDetail = selectedBox.querySelector('.detail');
    if (selectedDetail.style.display === "none" || selectedDetail.style.display === "") {
        selectedDetail.style.display = "block"; 
    } else {
        selectedDetail.style.display = "none"; 
    }
}


function cross(button) {
    let allButtons = document.querySelectorAll('.click-button');
    allButtons.forEach(function(Element) {
        if (Element !== button.querySelector('.click-button')) {
            Element.classList.remove('cross');
        }
    });

    let Element = button.querySelector('.click-button');
    Element.classList.toggle('cross');
}
