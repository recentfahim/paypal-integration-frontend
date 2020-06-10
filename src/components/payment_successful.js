import React, {Fragment} from 'react';

class PaymentSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid card-height">
                    <h4>Payment successfull</h4>
                </div>
            </Fragment>
        );
    }
}

export default PaymentSuccess;