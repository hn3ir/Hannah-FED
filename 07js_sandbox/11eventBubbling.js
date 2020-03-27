/* EVENT BUBBLING AND DELEGATION

Event bubbling 
    - bubbling up of events through the DOM
    - when an event happens on an element in the DOM, it wil bubble up (the actual event will) through its parents
        - instead of accessing the element itself the event will try and work its way up to the parents


Event Delegation
    - opposite of event bubbline
    - its where we put the listener on one of the parent element and then use logic inside the lemtn handler to target the lement we actually want this event for
    -where we put the listener on one of the parent elements
        it can be any parent
        - we put the event listener on the parent and then going down
        -

*/

// EVENT BUBBLING //

// document.querySelector('card-title').addEventListener('click', function(){
    //console.log(card-title);
// });

//document.querySelector('.card-content').addEventListener('click', function()){
    //console.log('card-content)';
// });

// document.querySelector('card').addEventListener('click', function()){
    //console.log(card-content);
// });

// document.querySelector('.col).addEventListener('click', function()){
    //console.log('column');
// );



// EVENT DELEGATION 
//const delItem = document.querySelector('.delete-item');
//delItem.addEventListener('click', deleteItem);
  

//document.body.addEventListener('click', deleteItem);
//function deleteItem(e){
//    if(e.target.className === '){
  //      console.log('delete item')
    //}
   // console.log('delete body');
  //  console.log(e.target);

//};

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }

}
