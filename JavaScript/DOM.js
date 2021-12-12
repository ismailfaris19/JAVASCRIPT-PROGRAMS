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


// parents.forEach(changeColor); // iterate elements one-by-one
// children.forEach(changeColor); // iterate elements one-by-one
// changeColor(prevSibling);

// function changeColor(element){
//     element.style.backgroundColor = '#333';
// }
