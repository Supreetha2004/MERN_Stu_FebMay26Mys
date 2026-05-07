//Synthetic event v/s native DOM events
//Synthetic event:
//A wrapper created by react around the browser's native event
//gives a consistent ApI across browers
//works similary to native DOM events
//still allows access to the original browser events via
//event.nativeEvent
//why does react use it
//To make event handling behave consistency
//To simplify cross-browser diffrence
//To integrate smoothly with React's event system
//How synthetic event work
//a button apperas on the screen 
//user clicks the button:
//Browser creates a native click event
//React wraps that native event in a syntheticEvent
//React passes the SytheticEvent to handleclick
//event refers to the SytheticEvent
//event.target gives us the HTML elements
