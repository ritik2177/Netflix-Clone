function toggleText(button) {
    var text = button.querySelector('.click-text');
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
function cross(button){
    let Element = button.querySelector('.click-button');
    Element.classList.toggle('cross')
}
function movie(button1){
    var box = button1.querySelector('.detail');
    if(box.style.display === "none" || box.style.display === ""){
        box.style.display = "block";
    } else{
        box.style.display = "none";    }
}