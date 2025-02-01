import { Component } from 'react';
import CounterDisplay from './CounterDisplay';
import EvenCounterDisplayer from './EvenCounterDisplayer';

class MyCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    allClicksCounter = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render() {
        return (
            <div className="border-2 border-gray-200 p-4 flex flex-col items-center mt-4 shadow">
                <CounterDisplay count={this.state.count} />
                <button
                    onClick={this.allClicksCounter}
                    className="mt-4 px-4 py-2 mb-8 bg-teal-500 hover:bg-teal-400 text-white rounded"
                >
                    Click me
                </button>
                <EvenCounterDisplayer count={this.state.count} />
            </div>
        );
    }
}

export default MyCounter;


