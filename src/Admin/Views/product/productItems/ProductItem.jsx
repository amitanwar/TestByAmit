
import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";



export class ProductItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <ListGroup>
                {this.props.products.map(item =>
                    <ListGroup.Item key={item.product_id} onClick={this.props.action.bind(this, item)}>{item.product_name}</ListGroup.Item>
                )}
            </ListGroup>

        )
    }
}