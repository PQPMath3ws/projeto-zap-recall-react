import { useState } from "react";

import Welcome from "./components/Welcome";

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
        </>
    );
}

export default App;