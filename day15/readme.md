Event :-An event is an action that happens in a web page. For example, when a user clicks a button, types in an input box, submits a form, or presses a keyboard key, an event occurs.

Elements :-
1. firstChild 
2. firstElementChild
3. lastChild
4. lastElementChild
5. children
6. childNode
7. nextChild 
8. nextElementChild
9. ParentElement


=======================================================


Events :- 
onClick - button
onChange - input field
onSubmit - form
addEventListener - (para1,para2)


MouseEvent :- 

onKeyPress
onKeyDown
onKeyUp



 <!-- Mouse Events -->

click — fired when an element is clicked. 
mouseover / mouseout — when the mouse pointer enters / leaves an element. 
mousemove — when the mouse pointer moves over an element. 

Keyboard Events
keydown — when a key is pressed down. 
keyup — when a key is released. 

Form/Input Events

submit — when a form is submitted. 
change — when an input/select value changes. 
focus — when an element (e.g., input) gets focus. 
blur — when an element loses focus. 
input — as user types in an input field.


addEventListener :- addEventListener() is a JavaScript method used to run a function when a particular event occurs on an element.

syntax :-
element.addEventListener("event", function () {
  // Code to execute
});

preventDefault:- preventDefault() stops the browser's normal action for an event. It does not automatically stop event propagation.

-> it stop the browser rendering .