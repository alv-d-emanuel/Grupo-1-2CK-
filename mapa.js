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