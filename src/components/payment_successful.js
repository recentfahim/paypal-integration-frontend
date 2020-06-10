import React, {Fragment} from 'react';
const queryString = require('query-string');

class PaymentSuccess extends React.Component {
    constructor(props) {

        super(props);
        console.log(this.props);
        this.state = {
            message: null,
            par: null
        }
    }
     submit = () =>{
        console.log(this.props.location);
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