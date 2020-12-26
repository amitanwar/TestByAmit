import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";

export class SubProduct extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListGroup>

                {this.props.subProducts.length > 0 && this.props.subProducts.map(item =>
                    <ListGroup.Item key={item.sub_product_id} onClick={this.props.action.bind(this, item)}>{item.sub_product_name}</ListGroup.Item>
                )}
            </ListGroup>
        )
    }
}