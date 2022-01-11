var cards = document.body.getElementsByClassName("card");

var select = document.body.getElementById('card_filter');
var value = select.options[select.selectedIndex].value;

select.onchange=update();

function update() {
  for (var i=0; i <= cards.length; i++) {
    if (value == "All") {
      cards[i].style.visibility = "visible";
    } else if (value == "Favorites") {
      if (cards[i].classList.contains('favorite')) {
         cards[i].style.visibility = "visible";
      }
      else if (!cards[i].classList.contains('favorite')) {
         cards[i].style.visibility = "hidden";
      }
    }
  }
}

function changeCards() {
  if (value == "All") {
  for (var i=0; i < cards.length; i++) {
    cards[i].style.visibility = "shown";
  }
}
if (value == "Favorites") {
  for (var i=0; i < cards.length; i++) {
       if (cards.classList.contains('favorite')) {
         favorites[i].style.visibility = "shown";
       }
       if (!cards.classList.contains('favorite')) {
         cards[i].style.visibility = "hidden";
       }
  }
}
}
