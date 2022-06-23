function getRadioValue(){
    var radiosBtns = document.getElementsByName('card');
    radiosBtns.forEach(el => {
        if(el.checked){
            let label = document.querySelectorAll('label')
            label.forEach(elem =>{
                if(elem.classList.contains('active')){
                    elem.classList.remove('active')
                }
            })
            el.nextElementSibling.classList.add('active')
        }
    })
}

const tabs = document.querySelector('.js_tabs');
const tabBtn = document.querySelectorAll('.js_tab')
const contents = document.querySelectorAll(".content");
tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabBtn.forEach(btn => {
        btn.classList.remove("active-step");
      });
      e.target.classList.add("active-step");
  
      contents.forEach(content => {
        content.classList.remove("active-step");
      });
      const element = document.getElementById(id);
      element.classList.add("active-step");
    }
  }




function parseURL(string){
    if(typeof string === 'string'){
        let url = new URL(string)
        return url
    }
    else{
        return false
    }
}

let obj = parseURL('https://ffwagency.com/platforms')
