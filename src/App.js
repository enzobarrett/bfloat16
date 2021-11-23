import './App.css';
import React from "react";
import Bfloat from "./Components/Bfloat"

function App() {
    return (
        <>
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

            <div className={"key"}>
                <h2>== Examples ==</h2>

                <p>
                3f80 = 0 01111111 0000000 = 1<br/>
                c000 = 1 10000000 0000000 = −2
                </p>

                <p className={"maxMin"}>
                7f7f = 0 11111110 1111111 ≈ 3.38953139 × 10<sup>38</sup> (max finite positive value in bfloat16 precision) <br/>
                0080 = 0 00000001 0000000 ≈ 1.175494351 × 10<sup>−38</sup> (min normalized positive value in bfloat16 precision)
                </p>

                <h2>=== Zeros and infinities ===</h2>

                <p>
                0000 = 0 00000000 0000000 = 0<br/>
                8000 = 1 00000000 0000000 = −0
                </p>

                <p>
                7f80 = 0 11111111 0000000 = infinity<br/>
                ff80 = 1 11111111 0000000 = −infinity
                </p>

                <h2>=== Special values ===</h2>

                <p>
                4049 = 0 10000000 1001001 = 3.140625 ≈ π ( pi )<br/>
                3eab = 0 01111101 0101011 = 0.333984375 ≈ 1/3
                </p>
            </div>
        </div>
        <h2 className={"warning"}>Please rotate your device or use a bigger screen!</h2>
        </>
    );
}

export default App;
