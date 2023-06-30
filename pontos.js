const modal_overlay = document.querySelector ('.modal_overlay');
const cards = document.querySelectorAll ('.card');
for (let card of cards){
     card.addEventListener ("click",function(){
         const imageid= card.getAttribute ("id")
         modal_overlay.classList.add('active')
         modal_overlay.querySelector("img").src=`${imageid}`;
     })
}

document.querySelector ('.close_modal').addEventListener("click",function(){
    modal_overlay.classList.remove("active")
})
var menuitem = document.querySelectorAll('.item-menu')
function selectLink(){
    menuitem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuitem.forEach((item)=>
    item.addEventListener('click',selectLink)
)
var btnexp = document.querySelector('#btn-exp')
var sidebar = document.querySelector('.menu-lateral')
btnexp.addEventListener('click',function(){
    sidebar.classList.toggle('expandir')
})

