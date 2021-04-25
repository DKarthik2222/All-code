// document.getElementsByClassName("divs")
// document.querySelector('.divs').addEventListener('click', event => {
//     alert("clicked")
//   })

//   document.querySelectorAll('.divs').forEach(item => {
//     item.addEventListener('click', (e) => {
//         if(e.target.style.backgroundColor=="white")
//         {
//             e.target.style.backgroundColor="black"
//             e.target.style.color="white"
//             e.target.id.innerHtml="<p>How are you</p>"
//         }
//         else
//         {
//             e.target.style.backgroundColor="white"
//             e.target.style.color="black"
//             e.innerHtml="<p>Iam fine</p>"
//         }
        
//         // alert(e.target.className.innerText="how are you")
//     })
//   })
console.clear();
  [document.querySelector('.divs'), document.querySelector('.divs2')].forEach(item => {
    item.addEventListener('click', (e) => {
        e.target.style.color="white"
            e.target.id.innerHtml="<p>How are you</p>"
    })
  })