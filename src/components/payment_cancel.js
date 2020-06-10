import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';


class PaymentCanceled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    redirectToHome(){
        return <Redirect to="/" />
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid card-height">
                    <h4>Payment Canceled</h4>
                    <button onClick={this.redirectToHome}>Home</button>
                </div>
            </Fragment>
        );
    }
}

export default PaymentCanceled;