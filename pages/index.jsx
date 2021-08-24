import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';

const IndexPage = ({ incrementCounter, decrementCounter, counter }) => {

    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <h1>{counter}</h1>
        </div>
    );
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);