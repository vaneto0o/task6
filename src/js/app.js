import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  document.body.addEventListener("click", () => {
    const lenth = 5;
    let text = 'sampleText';
    
    let count = 0;
    for (let i = 0; i < lenth; i++)
    {
      let element = document.createElement('article');
      count += lenth;
      element.setAttribute('id', 'article' + count);
      document.body.appendChild(element);
      document.getElementById('article' + count).innerHTML = text;
      document.getElementById('article' + count).classList.add("message");
    }
  });
});
