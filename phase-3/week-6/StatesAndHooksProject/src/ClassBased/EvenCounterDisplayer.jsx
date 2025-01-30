/*
 Go to the “Components” folder and create a component called
“EvenCounterDisplayer.js”;
● Don’t forget to do the following in your "MyCounter.js" component:
○ to create the “evenClicksCounter()” function that will return the click
counts that are only even. You will need to use the setState() method
in your “allClicksCounter()” function to update your state to only
contain the even counts.
○ to pass the updated counter value to the “EvenCounterDisplayer.js'”
component to display the even number of clicks counted
○ to import the "EvenCounterDisplayer.js" in your "MyCounter.js"
Hint:
○ The "MyCounter.js'' component is going to be dependent
on the “EvenCounterDisplayer.js”
○ Do not forget to import "MyCounter.js'' in “App.js”;
○ The “MyCounter.js” component should be the one to be called on the
App.js component, not the “EvenCounterDisplayer.js”
○ In "MyCounter.js", there will be only one clickable button, and when
clicked, both the "allClicksCounter()" and "evenClicksCounter()"
functions will be executed, and the corresponding results will be
displayed right below it.
○ For this question, you would need to use both states and props.
*/

import { Component } from 'react';

class EvenCounterDisplay extends Component {
    render() {
        return (
            <div>
                <h2>Even Clicks Counter: {this.props.evenCount}</h2>
            </div>
        );
    }
}

export default EvenCounterDisplay;