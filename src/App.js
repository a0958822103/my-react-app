
import { useState } from 'react';
import './Counter.css';
import './App.css';
function Counter() {
    const [num, setNum] = useState(0);
    return (
        <div className="container">
            <h1>counter</h1>
            <span className={`value ${num > 0 ? 'text-green' : 'text-red'} ${num === 0 && 'text-black'}`}>
                {num}
            </span>

            <div className="btn-container">

                <button className="decrease"
                    onClick={() => {
                        setNum(num - 1);
                    }}>decrease

                </button>
                <button className="reset"
                    onClick={() => {
                        setNum(0);
                    }}>reset
                </button>

                <button className="increase"
                    onClick={() => {
                        setNum(num + 1);
                    }}>increase
                </button>
            </div>

        </div>

    );
}
export default Counter;