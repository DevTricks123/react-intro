'use strict'

function Counter() {

    const [counter, setCounter] = React.useState(0);
    
    var interval = React.useRef(null);
    const start = React.useCallback(() => {
        interval.current = setInterval(() => { setCounter(c => c + 1 ) }, 1000);
    }, []);
    const stop = React.useCallback(() => {
        clearInterval(interval.current);
    }, []);
    
    React.useEffect(() => { 
        console.log(counter); 
        if (counter == 10){
            stop();
        }
    }, [counter]);
    

    return(
        <div className="text-center">
            <div>Counter: <h3 className="d-inline"><span className="badge badge-success">{counter}</span></h3></div>
            <div className="mt-3">
                <button className="btn btn-primary ml-2" type="button" onClick={() => setCounter(counter+1)}>Increase</button>
                <button className="btn btn-primary ml-2" type="button" onClick={(e) => setCounter(counter-1)}>Decrease</button>
                <button className="btn btn-secondary ml-2" type="button" onClick={() => setCounter(0)}>Reset</button>
                <button className="btn btn-danger ml-2" type="button" onClick={start}>Auto Counter</button>
                <button className="btn btn-dark ml-2" type="button" onClick={stop}>Stop Counter</button>
            </div>
        </div> 
    );
}
ReactDOM.render(<Counter />, document.getElementById('App'))