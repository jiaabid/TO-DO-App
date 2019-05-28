//the portion to add all todo list
var parent = document.getElementById('main-list')

//add the task
function setlist()
{
    var str = document.getElementById('list')
    var s = str.value
    if(s !== "")
        {
    itemlist(s)
        }
    else
        {
            alert(`i know silence is the best answer but do enter what to do :)`)
            document.location.reload()
        }
}
//function to make whole content card which has to be added
function itemlist(str)
{
    var card = document.createElement('div')
    var card_content = document.createElement('div')
//    date on card
    var datepan = document.createElement('p')
    var dateitem = document.createTextNode(setDate())
    var label = document.createElement('label')
//    checkbox
    var input = document.createElement('input')
//    what the task is 
    var context = document.createElement('span')
    var content = document.createTextNode(str)
//    edit button
    var edit = document.createElement('a')
    var icon_e = document.createElement('i')
    var etext = document.createTextNode('edit')
//    delete button
    var dlt = document.createElement('a') 
    var icon_d = document.createElement('i')
    var dtext = document.createTextNode('delete')
    
//    setting attributes
    context.setAttribute('id' , 'string')
    card.setAttribute('class' , 'card green lighten-4')
    card_content.setAttribute('class' , 'card-content')
    datepan.setAttribute('id' , 'first')
    input.setAttribute('type' , 'checkbox')
    input.setAttribute('class' , 'check')
    dlt.setAttribute('class' , 'remove')
    edit.setAttribute('class' , 'update')
    icon_d.setAttribute('class' , 'material-icons right')
    dlt.setAttribute('href' , '#!')
    icon_e.setAttribute('class' , 'right material-icons ')
    datepan.style.textAlign='right'
     
//    appending childs
    datepan.appendChild(dateitem)
     context.appendChild(content)
     label.appendChild(input)
     label.appendChild(context)
    icon_e.appendChild(etext)
    icon_d.appendChild(dtext)
    edit.appendChild(icon_e)
    dlt.appendChild(icon_d)
     card_content.appendChild(datepan)
     card_content.appendChild(label)
     card_content.appendChild(dlt)
     card_content.appendChild(edit)
    card.appendChild(card_content)
    //console.log(card)
    parent.appendChild(card)
    buttons()
        
}

  //submit button to add the to do item in list
var btn = document.getElementById('submit')
btn.addEventListener('click',setlist)

//action button to add any todo task
var action_btn = document.querySelector('.fixed-action-btn')

//on clicking action button date will be set
action_btn.addEventListener('click',function(){
    var a = setDate()
    document.getElementById('date').innerHTML = a
})

//on clicking action button the field will be initialized
action_btn.addEventListener('click' , init)

//for setting date
function setDate()
{
    
   var d = new Date()
    var date = (d.getUTCDate()+1) + "/" + (d.getUTCMonth()+1) + "/" + d.getFullYear() 
    return date
    
}

//for clearing the field
function init()
{
    document.getElementById('list').value = "";
}

//for removing an item from the list
function remove()
{
    var p1= this.parentNode
    var gp = p1.parentNode
    parent.removeChild(gp)
}

//the task done would be checked and cleared
function checked()
{
    var mark = this.parentNode
    var done = mark.parentNode
    var final = done.parentNode
//    console.log(final)
    parent.removeChild(final)
    
    
}
//buttons triggered
function buttons()
{
//    delete the task
var dlt_btn = parent.querySelectorAll('a.remove')
for(i of dlt_btn)
    {
     i.addEventListener('click' , remove)
    }
//    remove the task which is done
    var check = parent.querySelectorAll('input.check')
    for(i of check)
        {
      i.addEventListener('click' , checked)
}
    var edit_btn = parent.querySelectorAll('a.update')
    for(i of edit_btn)
        {
            i.addEventListener('click',edit)
            i.setAttribute('href' , '#modal')
            i.setAttribute('class' , 'modal-trigger')
        }
}
//to edit the item
function edit(e)
{
    e.preventDefault()
    var item = this.parentElement
    console.log(item)
    var content = item.childNodes[1]
    var val = item.querySelector('#string').innerHTML
//    set the previous value which has to edit
    document.getElementById('list').value = val
    btn.addEventListener('click' , function(){
        var sub_parent = item.parentNode
        parent.removeChild(sub_parent)
    })
    //console.log('hello')
    
}
buttons()
document.getElementById('first').innerHTML = setDate() 

