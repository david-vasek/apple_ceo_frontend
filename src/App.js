import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CeoList from "./components/CeoList";

function App() {
    const [reloadList, setReloadList] = useState(false);

    const handleReload = (status) => {
        setReloadList(status);
    };

    return ( <
        div className = "App" >
        <
        h1 > Apple CEOs < /h1> <
        Router >
        <
        CeoList reload = { reloadList }
        /> <
        /Router> <
        /div>
    );
}

export default App;