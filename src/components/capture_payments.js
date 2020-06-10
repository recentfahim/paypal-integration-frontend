import React, {Fragment} from 'react';
import axios from 'axios';
import {API_ROOT} from "../Config";
import {Redirect} from 'react-router-dom'

const queryString = require('query-string');


class CapturePayments extends React.Component {
    constructor(props) {

        super(props);
        console.log(this.props);
        this.state = {
            token: null,
            payer_id: null,
            success: true,
        }
    }


    componentDidMount() {
        var parameter = queryString.parse(this.props.location.search);
        axios.get(`${API_ROOT}/capture-order/`, {params: parameter})
            .then(res => {
                if (res.data.message === "Payment Successful") {
                    return <Redirect to='/payment-successful'/>
                }
            }).catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <Fragment>
                <div className="container-fluid card-height">
                    <h4>Processing Payment, Please Wait</h4>
                </div>
            </Fragment>
        );
    }
}

export default CapturePayments;