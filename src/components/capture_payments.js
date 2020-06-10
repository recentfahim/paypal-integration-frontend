import React, {Fragment} from 'react';
import axios from 'axios';
import {API_ROOT} from "../Config";

const queryString = require('query-string');


class CapturePayments extends React.Component {
    constructor(props) {

        super(props);
        console.log(this.props);
        this.state = {
            token: null,
            payer_id: null
        }
    }

    componentDidMount() {
        var parameter = queryString.parse(this.props.location.search);
        axios.get(`${API_ROOT}/capture-order/`, {params: parameter})
            .then(res => {
                console.log(res.data);
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