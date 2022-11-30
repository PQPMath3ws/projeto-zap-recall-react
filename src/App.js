import { useState } from "react";

import Welcome from "./components/Welcome";
import Questions from "./components/Questions";

const App = () => {
    const [isStartingComponent, setIsStartingComponent] = useState([true, false]);

    function startApp() {
        setIsStartingComponent([false, false]);
        setTimeout(() => {
            setIsStartingComponent([false, true]);
        }, 600);
    }

    return (
        <>
            <Welcome isStartingComponent={isStartingComponent[0]} startApp={startApp}></Welcome>
            <Questions isStartingComponent={isStartingComponent[1]}></Questions>
        </>
    );
}

export default App;