import React, {Fragment} from 'react';
import axios from 'axios';
import {API_ROOT} from "../Config";
import { Button } from 'react-bootstrap';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order_id: null,
            payment_link: null,
        };
        this.onPayClick = this.onPayClick.bind(this);
    }
        onPayClick=()=>{
            axios.get(`${API_ROOT}/create-order/?format=json`).then(res => {
               window.location = res.data.payment_link;
            }).catch(error => {
                console.log(error)
            });
        }



    render() {
        return (
            <Fragment>
                <div className="container-fluid">
                    <h1>This is Home, you can make payment by clicking Pay Now</h1>
                    <div>
                        <Button variant="primary" onClick={this.onPayClick}>Pay Now</Button>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default Home;