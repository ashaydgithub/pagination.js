const links = document.querySelectorAll('.links');

let currentValue = 1;

links.forEach(element => {
  element.onclick =(e) => {
    for(const link of links){
      link.classList.remove("active");
    }
    e.target.classList.add("active");
    currentValue = e.target.value
  }
})

function prevBtn() {
  if(currentValue > 1){
    for(const link of links){
      link.classList.remove("active");
    }
    currentValue--;
    links[currentValue - 1].classList.add('active');
  }
}


function nextBtn() {
  if(currentValue < 5){
    for(const link of links){
      link.classList.remove("active");
    }
    currentValue++;
    links[currentValue - 1].classList.add('active');
  }
}
