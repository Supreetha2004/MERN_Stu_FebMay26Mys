//useRef
//useRef creates a mutable refence object
//The object has one property:current
//It persists across renders
//Why do we use it
//Direct DOM acess

import { useRef, useState, useEffect } from "react";

// Persisting values without triggering re-renders
export function UserRefIntro() {
    // 1. DOM Reference
    const inputRef = useRef(null);

    // 2. Value Reference (store previous count)
    const previousCountRef = useRef(0);

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // Focus input on load
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Store previous count
    useEffect(() => {
        previousCountRef.current = count;
    }, [count]);

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <section>
            <div>
                <h3>Focus input using useRef</h3>
                <input
                    type="text"
                    value={text}
                    ref={inputRef}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter something"
                />
                <button onClick={handleFocusInput}>
                    Focus Input
                </button>
            </div>

            <div>
                <h3>Store previous value using useRef</h3>
                <p>Current count: {count}</p>
                <p>Previous count: {previousCountRef.current}</p>
                <button onClick={handleIncrement}>
                    Increment Count
                </button>
            </div>
        </section>
    );
}