'use strict'

function Counter() {

    const [counter, setCounter] = React.useState(0);

    function handleDecrease(e) {
        setCounter(counter-1);
    }

    return(
        <div className="text-center">
            <div>Counter: <h3 className="d-inline"><span className="badge badge-success">{counter}</span></h3></div>
            <div className="mt-3">
                <button className="btn btn-primary ml-2" type="button" onClick={() => setCounter(counter+1)}>Increase</button>
                <button className="btn btn-primary ml-2" type="button" onClick={(e) => handleDecrease(e)}>Decrease</button>
                <button className="btn btn-secondary ml-2" type="button" onClick={() => setCounter(0)}>Reset</button>
                <button className="btn btn-danger ml-2" type="button">Auto Counter</button>
            </div>
        </div>
    );
}
ReactDOM.render(<Counter />, document.getElementById('App'))