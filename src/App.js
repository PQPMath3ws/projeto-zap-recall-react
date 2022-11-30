import { useState } from "react";

import Welcome from "./components/Welcome";

const App = () => {
    const [isStartingComponent, setIsStartingComponent] = useState([true]);

    return (
        <Welcome isStartingComponent={isStartingComponent[0]}></Welcome>
    );
}

export default App;