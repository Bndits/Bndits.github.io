const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const buttons = document.querySelectorAll("a");
buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    /*let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;*/
    
    var x, y;
    
    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }
    
    let ripples = document.createElement("span");
    ripples.style.left = '${x}px'
    ripples.style.top = '${y}px';
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove()
    },1000);
  })
})
