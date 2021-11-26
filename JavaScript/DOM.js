// it will access the body tag.
const body = document.body; 

// append method is used to add strings and html elements(tags) in tags from here.
// body.append("Hi da...", "bye"); 

// create a any tag from here using createElement method.
// const div = document.createElement("div"); 

// .innerText, textContent and innerHTML - we will specify the content using this.
// it returns <b>Hello world</b>.
// div.textContent = "<b>Hello world</b>"; 

// it returns <b>Hello world</b>.
// div.innerText = "<b>Hello world</b>";

// it returns Hello world(in bold).
// div.innerHTML = "<b>Hello world</b>";

// appendChild method is used to add html elements(tags) only.
// body.appendChild(div);

// const div = document.querySelector("div");

// It returns what value in that tag. That value is in hide or not whatever it is. It will return the value.
// console.log(div.textContent);

// It returns only the value which is visible in the web page.
// console.log(div.innerText);

// It returns only the value which is written in the HTML page.
// console.log(div.innerHTML);


const div = document.querySelector('div');
const spanOne = document.querySelector('#hi');
const spanTwo = document.querySelector('#bye');

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

// .toggle() - for add another value to the class attribute. if it is already exist, it will delete that value and won''t add anything.
// spanOne.classList.toggle('hi1');
// spanOne.classList.toggle('hi1');

// .style - we can access all the css properties.
// spanOne.style.color = 'white';
// spanOne.style.backgroundColor = 'black';