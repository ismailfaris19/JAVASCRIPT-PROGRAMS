// XMLHttpRequest and jQuery //////////////////////////////////

// XMLHttpRequest WITHOUT JQUERY //
let btn = document.getElementById('add-btn'); 
let list = document.getElementById('titles');

const book = (id, title) => {
    let  newList = document.createElement('li');
    newList.id = id;
    newList.className = 'title-list';
    let textNode = document.createTextNode(title);
    newList.appendChild(textNode);
    return newList;
}

const addBookTitle = () => {
    let addTitle = document.getElementById('add-title').value;
    let http = new XMLHttpRequest();
    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
    http.onreadystatechange = function(){
        if(this.readyState === 4){ 
            if(this.status === 201){ 
                let res = JSON.parse(this.responseText); // it returns { id: <automatically generated Id> }
                list.appendChild(book(res.id, addTitle)); // pass automatically generated Id and title which is given by user.
                console.log('Item added!');
            } else {
                console.log("Response call failed");
            }
        }
    };
    let obj = JSON.stringify({
        "userId": 1,
        "title": addTitle,
        "completed": false
    });
    http.send(obj);
    document.getElementById('add-title').value = '';
};

function getBookListFromBackend(){
    let http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState === 4){ // it represent the stage of our process by returning 0 - 4.
            if(this.status === 200){ // it represent the response codes(status).
               let res = JSON.parse(this.responseText); // it returns the response in JSON format from backend.
               for(let i in res) {
                //    console.log(res[i].id, res[i].title); // it returns the id and title from the response.
                // console.log(todo(res[i].id, res[i].title));
                list.appendChild(book(res[i].id, res[i].title)); // it prints in web page.
               }
            } else {
                console.log("Response call failed");
            }
        }
    };
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
}

// steps to view output: inspect >> network >> check Hide data URLs >> in search bar, search json to get result.
// getBookListFromBackend();

// btn.addEventListener("click", addBookTitle);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// XMLHttpRequest WITH JQUERY //

/* it runs when a DOM is ready(when webpage loaded successfully). 
    before execute the JS code, It will confirm DOM tree 
    is perfectly rendered or not. */

$(document).ready(()=>{
    let btn = $('#add-btn');
    let list = $('#titles');

const book = (id, title) => {
    let  newList = document.createElement('li');
    newList.id = id;
    newList.className = 'title-list';
    let textNode = document.createTextNode(title);
    newList.append(textNode); // In jQuery, we have to appendChild instead of append.
    return newList;
}

const addBookTitle = () => {
    let addTitle = $('#add-title').val();
    let obj = {  // we don't need to stringify or parse the object in jQuery
        "userId": 1,
        "title": addTitle,
        "completed": false
    };
    $.post('https://jsonplaceholder.typicode.com/todos', obj, (data, status) => {
        let res = data; // In jQuery, it will automatically parse the response data so we don't need JSON.parse()
        list.append(book(res.id, addTitle)); // pass automatically generated Id and title which is given by user.
        console.log('Item added!', addTitle);
    });
    $('#add-title').val('');
};

function getBookListFromBackend(){
    $.get('https://jsonplaceholder.typicode.com/todos', (data, status) => {
            let res = data; // In jQuery, it will automatically parse the response data so we don't need JSON.parse()
            for(let i in res) {
                list.append(book(res[i].id, res[i].title));
            }
    });
}

// steps to view output: inspect >> network >> check Hide data URLs >> in search bar, search json to get result.
getBookListFromBackend();

btn.click(addBookTitle); // for single event

$('#add-title').on({ // for multiple events
    'input' : function(e) {
        console.log(e.target.value);
    },
    'keyup' : function(e) {
        if(e.keyCode === 13) {
            addBookTitle();
        }
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// jQuery Syntax //
// let inputByType = $('input[type=text]') // to get the input element which is text type.
// let input = $('input') // to get all the input elements. 
            // (or)
// let input = $('input[type]') // to get all the input elements.
// let getByClass = $('.title-list'); // to get the elements by class name. 
// let getFirstElement = $('.title-list:first'); // to get the first element by using the class name.
            // (or)
// let getFirstElement = $('.title-list').first(); // to get the first element by using the class name.
// let getLastElement = $('.title-list:last'); // to get the last element by using the class name.
               // (or)
// let getLastElement = $('.title-list').last(); // to get the last element by using the class name.
// let getElementByIndex = $('.title-list').eq(2); // we can get any element using their index. this code return 3rd element.
// let btn = $('#add-btn'); // to get the element by Id
// let getContent = $('#1').html(); // to get content of the element or more child elements
// let getValueOfCssProperty = $('li').css('background-color'); // to get value of the CSS property
// let getInputValue = $('input[type=text]').val(); // to get input value
// $('input[type=text]').val(''); // to set predefined value

// let list1 = "<li>Apple</li>";
// let list2 = "<li>Banana</li>";
// let list3 = "<li>Orange</li>";
// In jQuery, we can append one or more lists at a same time.
// list.append(list1, list2, list3);

// In jQuery, we can remove whole element.
// list.remove();

// In jQuery, we can remove 1st element.
// $('li:first').remove();
// $('li').first().remove();

// In jQuery, we can remove last element.
// $('li:last').remove();
// $('li').last().remove();

// In jQuery, we can remove element by index.
// $('li').eq(1).remove();

// set value for the CSS property
// $('li').css('background-color', '#fefae0'); 

// set value for the multiple CSS property at a same time.
// $('li').css({
//     'background-color': '#faedcd',
//     'color': '#ef233c'
// });

// add another class in classList.
// $('li').addClass('alter-li');

// remove existing class.
// $('li').removeClass('alter-li');

// toggle the class. if the class already present, it will remove that class or otherwise add it.
// $('li').toggleClass('alter-li');

// In jQuery, syntax for html events.
// $('#add-btn').click(function() {
//     alert('Add');
// });

// In jQuery, we can declare multiple events at same time.
// $('input[type=text]').on({
//     'input' : function(e) {
//         console.log(e.target.value);
//     },
//     'keyup' : function(e) {
//         if(e.keyCode === 13) {
//             console.log(e.target.value);
//         }
//     }
// });

});