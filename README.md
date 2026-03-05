1. What is JSX, and why is it used?
JSX is like a mix of JavaScript and HTML. Normally, JavaScript doesn't understand HTML tags directly, but JSX allows us to write HTML like code inside JavaScript.
Why use it? Because writing standard JavaScript to create elements (like React.createElement) is very hard and confusing. JSX makes it easy to see what our website's UI will look like.

2. Difference between State and Props?
Think of Props like a gift from a parent to a child. The child gets it but cannot change it, it's read only. We use it to pass data from one component to another.
State is like the child's own Memory or Pocket Money. The child can change it whenever they want (like when you click a button and a number increases). It’s internal to the component.

3. What is the useState hook, and how does it work?
useState is a special function in React that helps a component remember things. When we want a variable to change and also update the screen UI at the same time, we use useState.
How it works: It gives us two things, a variable (the value) and a setter function (to change that value). When we call the setter function, React automatically re-renders the page with the new value.

4. How can you share state between components?
In React, data usually flows down (from parent to child). So, if two sibling components need the same data, we Lift the State Up to their common parent.
Then, the parent sends that state down to both children using Props. For very big projects, we might use things like Context API or Redux, but lifting state up is the basic way.

5. How is event handling done in React?
It’s almost like regular HTML, but with two small changes:

We use camelCase (like onClick instead of onclick).

Instead of a string, we pass a function inside curly braces {}.
Example: <button onClick={handleClick}>Click Me</button>.
