import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PaymentCanceled from "./components/payment_cancel";
import Home from "./components/Home";
import PaymentSuccess from "./components/payment_successful";


function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/payment-successful">
                            <PaymentSuccess location={window.location}/>
                        </Route>
                        <Route path="/payment-cancel">
                            <PaymentCanceled/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;