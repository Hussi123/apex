const resp_tabs_list = document.querySelectorAll(".resp-tabs-list li");
resp_tabs_list.forEach((element, idx) => {
  element.addEventListener('click', (e) => {
    resp_tabs_list.forEach(item => {
      if (item != this) {
        item.classList.remove('resp-tabs-active');
      }
    })
    element.classList.toggle('resp-tabs-active');
  })
})



const moreInfo1 = document.querySelectorAll(".moreInfo1");
const item2=document.querySelector(".text2")
moreInfo1.forEach((element, idx) => {
  element.addEventListener('click', () => {
    moreInfo1.forEach((item) => {
      console.log(item);
      item.classList.toggle('d-none')
    })
    item2.classList.toggle('d-none')
  })
})


const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContent= document.querySelectorAll('[data-tab-content]');


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabs.forEach(tab => {
          tab.classList.remove('active')
      })
      tabsContent.forEach(tabsContent => {
          tabsContent.classList.remove('active');
      });
      tab.classList.add('active');
      target.classList.add('active');
  });
})

const buttonSubmit = document.querySelector('.buttonSubmit');
const errorElements=document.querySelectorAll('.error-element');
console.log(errorElements);

buttonSubmit.addEventListener("click" , ()=>{
  errorElements.forEach((element, indx)=>{
    element.classList.add('d-none');
  })
})


