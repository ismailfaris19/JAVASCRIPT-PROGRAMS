/* 14 Must Know DOM Manipulations */


// it will access the body tag //
// const body = document.body; 

// append method is used to add strings and html elements(tags) in tags from here //
// body.append("Hi da...", "bye"); 

// create a any tag from here using createElement method //
// const div = document.createElement("div"); 

// .innerText, textContent and innerHTML - we will specify the content using this //
// it returns <b>Hello world</b>.
// div.textContent = "<b>Hello world</b>"; 

// it returns <b>Hello world</b>.
// div.innerText = "<b>Hello world</b>";

// it returns Hello world(in bold).
// div.innerHTML = "<b>Hello world</b>";

// appendChild method is used to add html elements(tags) only //
// body.appendChild(div);

// const div = document.querySelector("div");

// It returns what value in that tag. That value is in hide or not whatever it is. It will return the value.
// console.log(div.textContent);

// It returns only the value which is visible in the web page.
// console.log(div.innerText);

// It returns only the value which is written in the HTML page.
// console.log(div.innerHTML);


// const div = document.querySelector('div');
// const spanOne = document.querySelector('#hi');
// const spanTwo = document.querySelector('#bye');

// for completely remove the element from the page.
// spanTwo.remove();

// for completely remove the element from the page using parent element and removeChild().
// div.removeChild(spanOne);

// for get back the element.
// div.append(spanTwo);

//.getAttribute - for getting the value of attribute from tag we want.
// console.log(spanOne.getAttribute("id"));
// console.log(spanOne.getAttribute("title"));
                    // (or)
// console.log(spanOne.id);
// console.log(spanOne.title);

//.setAttribute - for set the value for attribute to tag we want.
// spanOne.setAttribute("title", "hello");
                    // (or)
// spanOne.title = "hello";

//.removeAttribute - for remove the attribute from the tag we want.
// spanOne.removeAttribute("title");

//.dataset - for form as object with key and value pair. 
// In our tag, test is key and tata is value.
/* 
{
test: 'tata',
firstName: 'faris'
}
*/
// console.log(spanTwo.dataset.firstName);
// spanTwo.dataset.lastName = 'ismail';
// console.log(spanTwo.dataset);

// .classList - for access the class attribute in tags and make some operation in it.
// console.log(spanOne.classList);

// .add() - for adding another value to the class attribute.
// spanOne.classList.add('text-primary');

// .remove() - for remove specific value from the class attribute.
// spanOne.classList.remove('hi');

// .toggle() - for add another value to the class attribute. if it is already exist, it will delete that value and won't add anything.
// spanOne.classList.toggle('hi1');
// spanOne.classList.toggle('hi1');

// .style - we can access all the css properties.
// spanOne.style.color = 'white';
// spanOne.style.backgroundColor = 'black';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* JavaSript DOM Crash Course */

// TO FIND AND ACCESS ALL THE DOCUMENT OBJECTS ///////////////////////////////////

// console.dir(document); // list the document object
// console.log(document.URL); // access URL 
// console.log(document.title); // access title 
// console.log(document.domain); // access domain 
// console.log(document.doctype); // access doctype
// console.log(document.head); // access head
// console.log(document.body); // access body
// console.log(document.all); // access all the elements
// console.log(document.all[11]); // access the element in 11th index
// console.log(document.forms); // access all the form elements
// console.log(document.forms[0]); // access the form elements using index too
// console.log(document.images); // access all the images
// console.log(document.links); // access all the links
// document.title = 'JS';


// GET ELEMENT BY ID //////////////////////////////////

// console.log(document.getElementById('header-title'));
// let header = document.getElementById('header-title');
// let main = document.getElementById('main-header');
// console.log(header);
// header.innerHTML = '<b>hello</b>';
// main.style.borderBottom = '2px solid #333';


// GET ELEMENT BY CLASS NAME //////////////////////////////////

// let items = document.getElementsByClassName('list-group-item'); // items is an array
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello peter';
// items[1].style.fontWeight = 'bold';

// for(let item in items){
//     items[item].style.backgroundColor = '#f4f4f4';
// }


// GET BY TAG NAME //////////////////////////////////

// let list = document.getElementsByTagName('li'); // list is an array
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello peter';
// items[1].style.fontWeight = 'bold';

// for(let item of list){
//     item.style.backgroundColor = '#f4f4f4';
// }


// QUERY SELECTOR //////////////////////////////////

// using querySelector, we can call tag name, class name and id too.
// let header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid #000000';
// let input = document.querySelector('input');
// input.value = 'Hello Peter';
// let input = document.querySelector('input[type = "submit"]');
// input.value = 'Send';
// let lists = document.querySelector('.list-group-item');
// lists.style.borderBottom = '6px solid #000000';
// let lastItemInList = document.querySelector('.list-group-item:last-child'); // last element
// lastItemInList.style.borderBottom = '3px solid #000000';
// let secondItemInList = document.querySelector('.list-group-item:nth-child(2)'); // second element
// secondItemInList.style.borderBottom = '3px solid #000000';


// QUERY SELECTOR ALL //////////////////////////////////

// let titles = document.querySelectorAll('.title');
// console.log(titles);
// console.log(titles[1]);
// let oddList = document.querySelectorAll('li:nth-child(odd)'); // get odd list
// let evenList = document.querySelectorAll('li:nth-child(even)'); 
// for(let i in oddList) {
//     oddList[i].style.backgroundColor = '#f4f4f4';
//     evenList[i].style.backgroundColor = '#ccc';
// } 


// PARENT NODE //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode); // it returns div class="card card-body"
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode); // it returns container class
// console.log(itemList.parentNode.parentNode.parentNode); // it returns body tag


// PARENT ELEMENT //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement); // it returns div class="card card-body"
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement); // it returns container class
// console.log(itemList.parentElement.parentElement.parentElement); // it returns body tag


// CHILD NODE //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.childNodes); // it returns child nodes which is inside items id. so don't use.
// console.log(itemList.children); // it returns only tags which are inside the items id.
// itemList.children[1].style.backgroundColor = "#333";


// FIRST CHILD & FIRST ELEMENT CHILD //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.firstChild); // don't use
// console.log(itemList.firstElementChild); // instead of firstChild we may use firstElementChild


// LAST CHILD & LAST ELEMENT CHILD //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.lastChild); // don't use
// console.log(itemList.lastElementChild); // instead of lastChild we may use lastElementChild


// NEXT SIBLING & NEXT ELEMENT SIBLING //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.nextSibling); // don't use
// console.log(itemList.nextElementSibling); // instead of nextSibling we may use nextElementSibling


// PREVIOUS SIBLING & PREVIOUS ELEMENT SIBLING //////////////////////////////////

// let itemList = document.querySelector('#items');
// console.log(itemList.previousSibling); // don't use
// console.log(itemList.previousElementSibling); // instead of previousSibling we may use previousElementSibling


// CREATE ELEMENT //////////////////////////////////

// let createNewElement = document.createElement('div');
// createNewElement.className = 'hello'; // add class
// createNewElement.id = 'hello'; // add id
// createNewElement.setAttribute('title', 'helloTitle'); // add attribute
// let newDivText = document.createTextNode('Hello Peter!!!'); // create text node
// createNewElement.appendChild(newDivText); // add text to div
// let container = document.querySelector('header .container'); // access container div class
// let h1 = document.querySelector('header h1'); // access h1 tag
// insert newly created div class inside the container and before the h1 tag.
// container.insertBefore(createNewElement, h1);
// console.log(createNewElement); 


// EVENTS //////////////////////////////////

// let btn = document.querySelector('#button').addEventListener('click', function(){
//     console.log('Button Clicked')
// });

                    // (or)

// let btn = document.querySelector('#button').addEventListener('click', runEvent);

// function runEvent(e){
    // console.log('Button Clicked');
    // document.getElementById('header-title').textContent ='CLICKED';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log(e) // to get event name
    // console.log(e.target) // return actual element
    // console.log(e.target.className) // return element's className
    // console.log(e.target.classList) // return element's list of classes
    // console.log(e.target.id) // return element's id
    // console.log(e.type) // to get event type
    // console.log(e.clientX, e.clientY) // to get X-axis and Y-axis of browser window.
    // console.log(e.offsetX, e.offsetY) // to get X-axis and Y-axis of actual element.
    // console.log(e.altKey); // if we hold alt key and click that button, it will return true.
    // console.log(e.ctrlKey); // if we hold ctrl key and click that button, it will return true.
    // console.log(e.shiftKey); // if we hold shift key and click that button, it will return true.
// }


/* MOUSE EVENTS */
// let btn = document.getElementById('button');
// let box = document.getElementById('box');
// let output = document.getElementById('output');

// btn.addEventListener('click', runEvent); // for click 
// btn.addEventListener('dblclick', runEvent); // for double click
// btn.addEventListener('mousedown', runEvent); // for press the button
// btn.addEventListener('mouseup', runEvent); // for release the button
// box.addEventListener('mouseenter', runEvent); // enter into a element and click
// box.addEventListener('mouseleave', runEvent); // leave from a element and click outside
// box.addEventListener('mouseover', runEvent); // same as mouseenter but for inner elements inside box element
// box.addEventListener('mouseout', runEvent); // same as mouseleave but for inner elements inside box element
// box.addEventListener('mousemove', runEvent); // for movement of mouse


/* KEYBOARD & FORM & FORM ELEMENT EVENTS */
// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form'); 
// let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent); // happens when press the key
// itemInput.addEventListener('keyup', runEvent); // happens when release the key
// itemInput.addEventListener('keypress', runEvent); // happens when press and release the key
// itemInput.addEventListener('focus', runEvent); // happens when click on the input field
// itemInput.addEventListener('blur', runEvent); // happens when click outside of the input field
// itemInput.addEventListener('cut', runEvent); // happens when we cut the text content from the input field
// itemInput.addEventListener('paste', runEvent); // happens when we paste the text content inside the input field
// itemInput.addEventListener('copy', runEvent); // happens when we copy the text content from the input field
// itemInput.addEventListener('input', runEvent); // happens when we make any action inside the input field
// select.addEventListener('change', runEvent); // happens when we change the value of the select field
// select.addEventListener('input', runEvent); // happens when we make any action inside the select field
// form.addEventListener('submit', runEvent);


// function runEvent(e){
    // e.preventDefault();
    // console.log('hello '+e.type);
    // if(e.type == 'cut'){
    //     document.body.style.backgroundColor = 'red';
    // } else if(e.type == 'copy') {
    //     document.body.style.backgroundColor = 'blue';
    // } else {
    //     document.body.style.backgroundColor = 'green';
    // }
    // console.log(e.target.value); // to get what enter in input field
    // output.innerHTML = '<b>'+e.target.value+'</b>';
    // alert('hello '+e.type);
    // output.innerHTML = '<b> MouseX: ' + e.offsetX + '</b><br><b> MouseY: ' + e.offsetY + '</b>';
    // document.body.style.backgroundColor = "rgb("+ e.offsetX +", "+ e.offsetY +", 40)";
// }



// MINI DOM PROJECT //////////////////////////////////

// let form = document.getElementById('addForm');
// let itemList = document.getElementById('items');
// let filter = document.getElementById('filter');

// Form submit event
// form.addEventListener('submit', addItem);

// delete event
// itemList.addEventListener('click', deleteItem);

// filter event
// filter.addEventListener('keyup', filterItem);

// Add Item
// function addItem(e) {
//     e.preventDefault(); // we have to prevent
//     let newItem = document.getElementById('item').value; // get input value
//     let li = document.createElement('li'); // create li element
//     li.className = 'list-group-item'; // add class name
//     li.appendChild(document.createTextNode(newItem)); // add text node
//     let deleteBtn = document.createElement('button'); // create delete Button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete'; //add class name
//     deleteBtn.appendChild(document.createTextNode('X')); // add text node
//     itemList.appendChild(li); // append to itemList
//     li.appendChild(deleteBtn); // append to li
//     document.getElementById('item').value = ''; // clear the field
// }

// Delete Item
// function deleteItem(e) {
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure you want to delete this item?')){
//             let li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }        

// Filter Item
// function filterItem(e) {
//     let text = e.target.value.toLowerCase();
//     let items = itemList.getElementsByTagName('li');  // to get lis
//     Array.from(items).forEach((item) => {
//         let itemName = item.firstChild.textContent; // get first li's textContent
//         if (itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* JavaScript DOM Traversal */

// let grandparent = document.getElementById('grandparent'); 
// let grandparent = document.querySelector('.grandparent');
// let parents = Array.from(document.getElementsByClassName('parent')); // we have to convert collections to an array.
// let parent = document.querySelector('.parent'); // it get first parent named class only but class name or id name gets all the parent named div classes.
// let parents = Array.from(grandparent.children); // to get the children elements of grandparent class.
// let firstParent = parents[0]; // to get first parent class.
// let firstChildOfFirstParent = firstParent.children[0]; // to get first child class of first parent class.
// let children = grandparent.querySelectorAll('.child'); // if we use querySelectorAll, we don't need to convert to array.
// let childOne = document.querySelector('#child-one'); // child element's id.
// let parent = childOne.parentElement; // get the parent element of childOne.
// let grandparent = parent.parentElement; // get the grandparent element of childOne.
// let grandparent = childOne.closest('.grandparent');  // get the closest element Eg: closest grandparent class.
// let nxtSibling = childOne.nextElementSibling; // get the next sibling Eg: #child-two
// let prevSibling = nxtSibling.previousElementSibling; // get the previous sibling Eg: #child-one

// console.log(prevSibling)
// parents.forEach(changeColor); // iterate elements one-by-one
// children.forEach(changeColor); // iterate elements one-by-one
// changeColor(prevSibling);

// function changeColor(element){
//     element.style.backgroundColor = '#333';
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Udemy - JavaScript - Basics to Advanced [step by step (2021)] /////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// countdown with some css effects //////////////////////////////
// let countNum = document.getElementById('countdown');
// let bgimage = document.getElementById('bg-image');
// let initialCount = countNum.innerHTML;
// setInterval(() => {
//     initialCount = initialCount > 0 ? initialCount - 1 : 0;
//     countNum.innerHTML = initialCount;
//     let backgroundImagePath = initialCount % 2 == 0 ? '/assets/images/venom.jpg' : '/assets/images/moneyheist.jpg';
//     bgimage.src = backgroundImagePath;
//     bgimage.style.width = initialCount * 10 + '%'
//     countNum.style.fontSize = initialCount * 25 + 'px';
//     countNum.style.color = initialCount <= 4 ? 'black' : 'white';
//     if(initialCount <= 0) clearInterval(interval);
// }, 1000);


// EVENTS //////////////////////////////////
// let btn = document.getElementById('btn-click');
// let body = document.querySelector('body');
// function btnClick() {
    // alert('button clicked');
//     body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
// }
// btn.onclick = btnClick; // we have to remove circle bracket when we pass function as reference
        
        // (or)

// btn.onclick = function() {
//     alert('button clicked');
// }

        // (or)

// btn.addEventListener('click', function() {
//         alert('button clicked');
// });

        // (or)

// btn.addEventListener('click', btnClick);


// ADD / REMOVE CLASS //////////////////////////////////
// 1)
// let btn = document.getElementById('btn-click');
// let textContent = document.getElementById('main-heading');
// textContent.classList.add('big');
// btn.addEventListener('click', () =>{
//     textContent.classList.add('big');
// })

// 2)
// let btn = document.getElementById('btn-click');
// let content = document.getElementById('content');
// let sidebar = document.getElementById('sidebar');
// btn.onclick = () =>{
    // if(sidebar.classList.contains('sidebar') && content.classList.contains('content')){
    //     sidebar.classList.remove('sidebar');
    //     sidebar.classList.add('hide-sidebar');
    //     content.classList.remove('content');
    //     content.classList.add('move-content');
    // } else {
    //     sidebar.classList.remove('hide-sidebar');
    //     sidebar.classList.add('sidebar');
    //     content.classList.remove('move-content');
    //     content.classList.add('content');
    // }

                // (or)

    // sidebar.classList.toggle('hide-sidebar');
    // content.classList.toggle('move-content');
// }


// Getting Styles //////////////////////////////////
// let btnDecreaseFont = document.getElementById('btn-decrease');
// let btnIncreaseFont = document.getElementById('btn-increase');
// let textContent = document.getElementById('main-heading');
// let count = window.getComputedStyle(textContent).fontSize;
// count = Number(count.substr(0, count.length - 2));

// btnDecreaseFont.onclick = () => {
//     count -= 1;
//     textContent.style.fontSize = count + 'px';
// }

// btnIncreaseFont.onclick = () => {
//     count += 1;
//     textContent.style.fontSize = count + 'px';
// }

// console.log(btnDecreaseFont.style.marginLeft); // get css property's value as per our css file.
// console.log(window.getComputedStyle(btnDecreaseFont).marginRight); // get css property's value as per our screen size.


// Form Events ////////////////////////////////
// let username = document.getElementById('username');
// let password = document.getElementById('password');
// let loginForm = document.getElementById('login-form');

// username.addEventListener('change', (e) => console.log(e.target.value)); // check in JSNotes for definition 
// username.addEventListener('input', (e) => console.log(e.target.value)); // check in JSNotes for definition and e for parallely get the value from input field Eg: Google Translate.
// username.addEventListener('focus', () => console.log('focused')); // check in JSNotes for definition 
// username.addEventListener('blur', () => console.log('lost focus')); // check in JSNotes for definition 
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('submitted!!!');
// }); // check in JSNotes for definition 


// Keyboard Events ////////////////////////////////
// let body = document.querySelector('body');

// body.addEventListener('keydown', (e) => {
//     console.log("keydown => key: " + e.key + " key code: " + e.keyCode); // e.key - to get what key is pressed in the keyboard. check in JSNotes for definition.
// });  

// body.addEventListener('keydown', (e) => {
//     console.log("keyup => key: " + e.key + " key code: " + e.keyCode); // e.key - to get what key is pressed in the keyboard. check in JSNotes for definition.
// });  

// body.addEventListener('keydown', (e) => {
//     console.log("keypress => key: " + e.key + " key code: " + e.keyCode); // e.key - to get what key is pressed in the keyboard. check in JSNotes for definition.
// });  


// Mouse Events ////////////////////////////////
// let btn = document.getElementById('top-btn');
// let over = document.getElementById('over');
// let enter = document.getElementById('enter');
// let move = document.getElementById('move');
// let overCount = 0, enterCount = 0, moveCount = 0;

// check in JSNotes for definition.
// btn.addEventListener('click', () => console.log("click"));
// btn.addEventListener('mousedown', () => console.log("mousedown"));
// btn.addEventListener('mouseup', () => console.log("mouseup"));
// btn.addEventListener('dblclick', () => console.log("dblclick"));
// over.addEventListener('mouseover', () => {
//     let count = document.querySelector('#over > p');
//     overCount += 1;
//     count.innerHTML = overCount;
// });
// enter.addEventListener('mouseenter', () => {
//     let count = document.querySelector('#enter > p');
//     enterCount += 1;
//     count.innerHTML = enterCount;
// });
// move.addEventListener('mousemove', () => {
//     let count = document.querySelector('#move > p');
//     moveCount += 1;
//     count.innerHTML = moveCount;
// });


// Create HTML Elements ////////////////////////////////
// let body = document.querySelector('body');
// body.style.backgroundColor = "#caf0f8";
// let addBtn = document.getElementById('add-btn');
// let todoList = document.getElementById('todo-list');
// let inputField = document.getElementById('input-field');
// // let firstItem = document.getElementById('item1').parentElement.parentElement.parentElement;
// // let count = 2;

// addBtn.onclick = () => {
//     // count += 1;
//     let row = document.createElement('div');
//     row.className = 'row';
//     row.id = 'remove-spaces';
//     let col = document.createElement('div');
//     col.className = 'col';
//     col.id = 'remove-spaces';
//     let card = document.createElement('div');
//     card.className = 'card';
//     let newItem = document.createElement('li');
//     newItem.className = 'list-item';
//     // newItem.id = 'item' + count;
//                 // (or)
//     newItem.id = 'item' + (todoList.childElementCount + 1);
//                 // (or)
//     // let textNode = document.createTextNode(`Item ${count}`);
//     let textNode = document.createTextNode('Item ' + (todoList.childElementCount + 1)); // to get child element count
//     let firstItem = todoList.firstElementChild; // to get first child element
//     newItem.appendChild(textNode);
//     card.appendChild(newItem);
//     col.appendChild(card);
//     row.appendChild(col);
//     todoList.appendChild(row); // add at last i.e ascending order
//     // todoList.insertBefore(row, firstItem); // add at first i.e descending order
// }

/* Create HTML Elements Challenge */
// let body = document.querySelector('body');
// body.style.backgroundColor = "#caf0f8";
// let addBtn = document.getElementById('add-btn');
// let todoList = document.getElementById('todo-list');
// let hoverRow = document.querySelector('#todo-list > .row');
// let resetBtn = document.getElementById('reset-btn');
// let inputField = document.getElementById('add-item');

// hover to get message
// todoList.addEventListener('mouseover', (e) => {
//     inputField.style.fontSize = '12px';
//     inputField.value = 'double click or click on X to delete item.'
//     setTimeout(() => {
//         inputField.value = '';
//         inputField.style.fontSize = '15px';
//     }, 1000);
// });

// to reload the page
// resetBtn.onclick = () => {
//     location.reload();
// }

// double click on a element to delete
// todoList.addEventListener('dblclick', (e) => {
//     let card = e.target.parentElement.parentElement.parentElement;
//     todoList.removeChild(card);
// });

// click enter to add
// inputField.addEventListener('keyup', (e) => {
//     let input = e.target.value;
//     if (e.keyCode === 13) {
//         if(input === ''){
//             alert('Please enter something to add...');
//         } else {
//             let row = document.createElement('div');
//                 row.className = 'row';
//                 row.id = 'remove-spaces';
//             let col = document.createElement('div');
//                 col.className = 'col';
//                 col.id = 'remove-spaces';
//             let card = document.createElement('div');
//                 card.className = 'card';
//             let newItem = document.createElement('li');
//                 newItem.className = 'list-item';
//                 newItem.id = 'item' + (todoList.childElementCount + 1);
//                 input = input.toUpperCase();
//             let span = document.createElement('span');
//                 span.innerHTML = 'X';
//                 span.className = 'del';
//             let textNode = document.createTextNode(input); // to get child element count
//                 newItem.appendChild(textNode);
//                 newItem.appendChild(span);
//                 card.appendChild(newItem);
//                 col.appendChild(card);
//                 row.appendChild(col);
//                 todoList.appendChild(row); 
//         }
//         document.getElementById('add-item').value = ''; 
//     }
// });

// click add item button to add
// addBtn.onclick = () => {
    // we have to get input value inside the function
//     let inputField = document.getElementById('add-item').value; 
//     if(inputField === ''){
//         alert('Please enter something to add...');
//     } else {
//         let row = document.createElement('div');
//             row.className = 'row';
//             row.id = 'remove-spaces';
//         let col = document.createElement('div');
//             col.className = 'col';
//             col.id = 'remove-spaces';
//         let card = document.createElement('div');
//             card.className = 'card';
//         let newItem = document.createElement('li');
//             newItem.className = 'list-item';
//             newItem.id = 'item' + (todoList.childElementCount + 1);
//             inputField = inputField.toUpperCase();
//         let span = document.createElement('span');
//             span.innerHTML = 'X';
//             span.className = 'del';
//         let textNode = document.createTextNode(inputField); // to get child element count
//             newItem.appendChild(textNode);
//             newItem.appendChild(span);
//             card.appendChild(newItem);
//             col.appendChild(card);
//             row.appendChild(col);
//             todoList.appendChild(row); 
//     }
//     document.getElementById('add-item').value = ''; 
// }

// todoList.addEventListener('click', (e) => {
//     if(e.target.classList.contains('del')) {
//         let row = e.target.parentElement.parentElement.parentElement.parentElement;
//         todoList.removeChild(row);
//     }
// });


// Update and Delete HTML Elements //////////////////////////////////
// let body = document.querySelector('body');
// body.style.backgroundColor = "#caf0f8";
// let addBtn = document.getElementById('add-btn');
// let updateBtn = document.getElementById('update-btn');
// let removeBtn = document.getElementById('remove-btn');
// let todoList = document.getElementById('todo-list');
// let inputField = document.getElementById('add-item');

// // click enter to add
// inputField.addEventListener('keyup', (e) => {
//     let input = e.target.value;
//     if (e.keyCode === 13) {
//         if(input === ''){
//             alert('Please enter something to add...');
//         } else {
//             let row = document.createElement('div');
//             row.className = 'row';
//             row.id = 'remove-spaces';
//             let col = document.createElement('div');
//             col.className = 'col';
//             col.id = 'remove-spaces';
//             let card = document.createElement('div');
//             card.className = 'card';
//             let newItem = document.createElement('li');
//             newItem.className = 'list-item';
//             newItem.id = 'item' + (todoList.childElementCount + 1);
//             input = input.toUpperCase();
//             let textNode = document.createTextNode(input); // to get child element count
//             newItem.appendChild(textNode);
//             card.appendChild(newItem);
//             col.appendChild(card);
//             row.appendChild(col);
//             todoList.appendChild(row); 
//         }
//         document.getElementById('add-item').value = ''; 
//     }
// });

// click add item button to add
// addBtn.onclick = () => {
//     // we have to get input value inside the function
//     let inputField = document.getElementById('add-item').value; 
//     if(inputField === ''){
//         alert('Please enter something to add...');
//     } else {
//         let row = document.createElement('div');
//         row.className = 'row';
//         row.id = 'remove-spaces';
//         let col = document.createElement('div');
//         col.className = 'col';
//         col.id = 'remove-spaces';
//         let card = document.createElement('div');
//         card.className = 'card';
//         let newItem = document.createElement('li');
//         newItem.className = 'list-item';
//         newItem.id = 'item' + (todoList.childElementCount + 1);
//         inputField = inputField.toUpperCase();
//         let textNode = document.createTextNode(inputField); // to get child element count
//         newItem.appendChild(textNode);
//         card.appendChild(newItem);
//         col.appendChild(card);
//         row.appendChild(col);
//         todoList.appendChild(row); 
//     }
//     document.getElementById('add-item').value = ''; 
// }

// update button
// updateBtn.addEventListener('click', () => {
//     let inputField = document.getElementById('add-item').value;
//     let firstElement = todoList.firstElementChild;
//     let row = document.createElement('div');
//         row.className = 'row';
//         row.id = 'remove-spaces';
//     let col = document.createElement('div');
//         col.className = 'col';
//         col.id = 'remove-spaces';
//     let card = document.createElement('div');
//         card.className = 'card';
//     let newItem = document.createElement('li');
//         newItem.className = 'list-item';
//         newItem.id = 'item' + (todoList.childElementCount + 1);
//         // inputField = inputField.toUpperCase();
//     let textNode = document.createTextNode(inputField.toUpperCase()); // to get child element count
//         newItem.appendChild(textNode);
//         card.appendChild(newItem);
//         col.appendChild(card);
//         row.appendChild(col);
//     todoList.replaceChild(row, firstElement); // to replace the first element
// })

// remove button
// removeBtn.addEventListener("click", () => {
//     let firstElement = todoList.firstElementChild;
//     todoList.removeChild(firstElement); // to remove the first element
// });


// BOM (window object) //////////////////////////////////
// console.log(window.innerHeight); // to get browser window height.
// console.log(document.body.clientHeight); // for IE browser
// console.log(window.innerWidth); // to get browser window width.
// console.log(document.body.clientwidth); // for IE browser
// window.open('https://www.udemy.com'); // to open another url.
// window.close(); // to close the current tab.
// console.log(window.screen); // to access the window object.
    // (or)
// console.log(screen); // to access the window object.
// console.log(window.screen.width); // it returns original width of the screen.
// console.log(window.screen.height); // it returns original height of the screen.
// console.log(window.screen.availWidth); // it returns our browser window width.
// console.log(window.screen.availHeight); // it returns our browser window height.
// console.log(window.navigator); // to access the navigator object.
    // (or)
// console.log(navigator); // to access the navigator object.
// console.log(window.navigator.userAgent); // to get details about the browser and operating system.
// console.log(window.navigator.onLine); // to get details about the user has an active internet connectio or not.
// console.log(window.history); // to get details about how much pages user visited.
// window.history.forward(); // to redirect forward.
// window.history.back(); // to redirect backward.
// console.log(window.location); // to get the  details of the current page address.
// console.log(window.location.href); // to get the whole URL
// console.log(window.location.hostname); // to get the the hostname Eg: www.example.com
// console.log(window.location.pathname); // to get the current path in an URL. Eg: /example.html
// console.log(window.location.search); // to get the content after question mark in our URL Eg: ?name=faris&page=10
// window.location.assign('https://mail.google.com/mail/u/2/?ogbl#inbox'); // to redirect to another page in same browser tab


// window events //////////////////////////////////
// window.addEventListener('resize',function(){ // this event occur when we resize the browser window
//     console.log(`window resize, width: ${window.innerWidth} and height: ${window.innerHeight}`);
// })


// Mini Project 1 - Smartwatch Showcase ////////////////////////////////////
// let watchImage = document.getElementById('watch-image');
// let heading = document.getElementById('watch-heading');
// let redBtn = document.getElementById('redbtn');
// let blackBtn = document.getElementById('blackbtn');
// let blueBtn = document.getElementById('bluebtn');
// let pinkBtn = document.getElementById('pinkbtn');
// let purpleBtn = document.getElementById('purplebtn');
// let digital = document.getElementById('digital');
// let digitalWatch = document.getElementById('digital-watch');
// let heartbeat = document.getElementById('heartbeat');
// let heart = document.getElementById('heart');
// let heartRate = document.getElementById('heart-rate');
// let watchScreen = document.getElementById('watch-screen');

// (function () {
//     digitalWatch.style.display = 'none';
//     heart.style.display = 'none';
// })()

// function showTime() {
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     am_pm = "AM";
//     if (hour > 12) {
//         hour -= 12;
//         am_pm = "PM";
//     }
//     if( hour == 12) {
//         am_pm = "PM";
//     }
//     if (hour == 0) {
//         hr = 12;
//         am_pm = "AM";
//     }
//     hour = hour < 10 ? "0" + hour : hour;
//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;
//     let currentTime = hour + ":" + min + ":" + sec + am_pm;
//     digitalWatch.textContent = currentTime;
// }

// digital.onclick = () => {
//     digital.style.backgroundColor = '#000';
//     digital.style.color = '#fff';
//     heartbeat.style.backgroundColor = '#fff';
//     heartbeat.style.color = '#000';
//     watchScreen.className = 'watch-clock';
//     digitalWatch.style.display = 'block';
//     heart.style.display = 'none';
//     setInterval(showTime, 1000);
// }

// heartbeat.onclick = () => {
//     let getRate = Math.floor(Math.random() * (100 - 30) + 30);
//     heartRate.textContent = `${getRate}`;
//     heartbeat.style.backgroundColor = '#000';
//     heartbeat.style.color = '#fff';
//     digital.style.backgroundColor = '#fff';
//     digital.style.color = '#000';
//     watchScreen.className = 'watch-heart';
//     digitalWatch.style.display = 'none';
//     heart.style.display = 'block';
// }

// redBtn.onclick = () => {
//     watchImage.src = './images/red.png';
// }

// blackBtn.onclick = () => {
//     watchImage.src = './images/black.png';
// }

// blueBtn.onclick = () => {
//     watchImage.src = './images/blue.png';
// }

// pinkBtn.onclick = () => {
//     watchImage.src = './images/pink.png';
// }

// purpleBtn.onclick = () => {
//     watchImage.src = './images/purple.png';
// }


// Just a try ///////////////////////////////////////////////////////////
// let openBtn = document.getElementById('btn-open');
// let closeBtn = document.getElementById('btn-close');
// let row = document.getElementById('row');

// openBtn.onclick = () => {
//     openBtn.style.display = 'none';
//     let tableOne = document.getElementById('table-one');
//     tableOne.className = 'col-6';

//     let editTable = `<div class="col-6" id="table-two">
//     <table class="table table-striped">
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//     </table>
// </div>`
//     row.innerHTML = editTable + row.innerHTML;
//     closeBtn.style.display = 'block';
// }

// closeBtn.onclick = () => {
//     let tableOne = document.getElementById('table-one');
//     let tableTwo = document.getElementById('table-two');
//     tableTwo.style.display = 'none';
//     openBtn.style.display = 'block';
//     tableOne.className = tableOne.classList.contains('col-6') ?  'col-12' : 'col-6';
//     closeBtn.style.display = 'none';
// }


// Let's play with Regex //////////////////////////////////////////
// let username = document.getElementById('username');
// let password = document.getElementById('password');
// let loginForm = document.getElementById('login-form');

// username.addEventListener('input', (e) => {
//     let pattern = /^[\w]{6,8}$/g;
//     let currentValue = e.target.value;
//     let userError = document.getElementById('uname-error');
//     userError.innerHTML = pattern.test(currentValue) ? '' : 'Enter the valid username.';
// });

// password.addEventListener('input', (e) => {
//     let pattern = /^[\S]{8,}$/g;
//     let currentValue = e.target.value;
//     let passError = document.getElementById('pass-error');
//     passError.innerHTML = pattern.test(currentValue) ? '' : 'Password must me more than 8 character which contains only alphabets, special characters and numbers .';
// });

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let userName = document.getElementById('username');
//     let password = document.getElementById('password');
//     let userError = document.getElementById('uname-error');
//     let passError = document.getElementById('pass-error');
//     let result = userName.value == '' || password.value == '' ? 'Please fill all the fields' : userError.innerHTML != '' ? 'please enter valid username' : passError.innerHTML != '' ? 'please enter valid password' : 'Login successfully!';
//     alert(result);
// });


