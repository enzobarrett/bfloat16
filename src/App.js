import './App.css';
import React from "react";
import Bfloat from "./Components/Bfloat"

function App() {
    return (
        <div className={"App"}>
            <h1>bFloat16 Visualizer</h1>
            <h2>by Enzo Barrett</h2>
            <main>

                <Bfloat/>
            </main>

            <form className={"paypal"} action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="JN52Q6UYXRTQY" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>

        </div>
    );
}

export default App;
