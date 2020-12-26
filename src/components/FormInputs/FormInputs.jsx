// @ts-ignore
import React, { Component } from 'react';
import { FormGroup, FormLabel, FormControl, Row } from "react-bootstrap";


function FieldGroup({ label, error, ...props }) {
    return (
        <FormGroup>
            <FormLabel>
                {label}
            </FormLabel>
            <FormControl {...props} />
            <span class="text-danger">{error}</span>
        </FormGroup>
    )
}




export class FormInputs extends Component {
    render() {
        var row = [];
        for (var i = 0, len = this.props.ncols.length; i < len; i++) {
            row.push(
                <div key={i} className={this.props.ncols[i]}>
                    <FieldGroup {...this.props.properties[i]} />
                </div>
            )
        }
        return <Row>{row}</Row>;
    }
}

export default FormInputs;


