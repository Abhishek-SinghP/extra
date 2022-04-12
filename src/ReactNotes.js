import React from 'react'

const ReactNotes = () => {
    return (
        <div>
            <h1>React Introduction</h1>
            <p>React is an open-source front-end JavaScript library that is used for building user interfaces,
                especially for single-page applications. It is used for handling view layer for web and mobile apps. </p>
            <br />
            <hr />
            <h1>Features of React</h1>
            <p>It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
                It follows Unidirectional data flow or data binding.
                It Uses the Component based structure for reusability of code.</p>
            <br />
            <hr />
            <h1>SPA </h1>
            <p>SPA stands for Single Page Application.If a user clicks on any button from the navigation bar of a website and that website navigates to a different web page
                i. e. only update the page without reloading the browser's page,
                then that application is known as single page application.</p>
            <br />
            <hr />
            <h1>Virtual DOM</h1>
            <p>The Virtual DOM is an in-memory representation of Real-DOM.
                Virtual DOM is a light-weight JavaScript object having all the similar properties as that of the real DOM object,
                but does not have the ability to directly update the changes occured.
                When a complete React application is mounted on the screen with the help of Real DOM,
                along with that a new Virtual DOM is created. Now when a user makes any changes by clicking of a button, by which a state is updated. The change of state will not directly effect on Real DOM, whereas it will get effect on the Virtual DOM. So, now the updated Virtual DOM will get compared with the previous Real DOM and check for the new changes and this complete procedure is known as Diffing Algorithm.
                When the new changes is been reflected on the Real DOM, then this procedure is known
                as Recoinciliation.</p>
            <br />
            <hr />
            <h1>Library v/s Framework</h1>
            <p>A library is essentially a set of functions that you can call, these days usually organized into classes. Each call does some work and returns control to the client.</p>
            <p>A framework embodies some abstract design, with more behavior built in</p>
            <br />
            <hr />
            <h1>JSX</h1>
            <p>JSX stands for JavaScript XML.
                JSX allows us to write HTML in React.
                JSX makes it easier to write and add HTML in React.
                Basically it helps to avoid writing the React.createElement()
                function which is the feature of ECMA Script 5
                where as JSX is the feature of ECMA Script 6.</p>
            <br />
            <hr />
            <h1>Babel </h1>
            <p>Babel is an inbuild transpiler that converts the ECMA Script 6 code to an ECMA Script 5 code because the browser cannot read JSX which is not a regular JavaScript object.
                So Babel helps to convert the JSX file to a regular JavaScript object and then pass it to the browser.</p>
            <br />
            <hr />
            <h1>Functional Components vs Class Components</h1>
            <h2>Functional Components </h2>
            <p>A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
                There is no render method used in functional components.
                Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
                React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
                Hooks can be easily used in functional components to make them Stateful.
                Constructors are not used.
            </p>
            <h2>Class Components    </h2>
            <p>A class component requires you to extend from React. Component and create a render function which returns a React element.
                It must have the render() method returning JSX (which is syntactically similar to HTML)
                Also known as Stateful components because they implement logic and state.
                React lifecycle methods can be used inside class components (for example, componentDidMount).
                It requires different syntax inside a class component to implement hooks.
                Constructor are used as it needs to store state.
            </p>
            <br />
            <p> ----------------------------------------------*************************----------------------------------------------------</p>
        </div>
    )
}

export default ReactNotes