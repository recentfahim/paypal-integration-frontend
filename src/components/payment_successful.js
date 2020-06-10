import React, {Fragment} from 'react';

class PaymentSuccess extends React.Component {
    constructor(props) {

        super(props);
        console.log(this.props);
        this.state = {
            message: null,
        }
    }
    componentDidMount() {
    this.submit();

    }


    render() {
        return (
            <Fragment>
                <div className="container-fluid card-height">
                    <h4>Payment successful</h4>
                </div>
            </Fragment>
        );
    }
}

export default PaymentSuccess;