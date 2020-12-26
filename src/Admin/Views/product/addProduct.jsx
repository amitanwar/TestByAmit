import React, { Component } from 'react';
import { products, subProducts } from '../../Services/product.service'
import { Container, Row, Col } from "react-bootstrap";
import { ProductItem } from './productItems/ProductItem'
import { SubProduct } from "./subProduct/subProduct";
import Button from '../../../components/CustomButton/CustomButton';
import FormInputs from '../../../components/FormInputs/FormInputs.jsx'
import { isEmpty } from '../../../shared/validator.js'

export class AddProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: products,
            subProducts: [],
            selectedProduct: {},
            selectedSubProduct: {},
            isProduct: false,
            formData: {},
            errors: {}
        }
    }

    getSubProduct(event, product) {
        event.setState({ subProducts: subProducts, selectedProduct: product })
    }

    setSubProduct(event, subProduct) {
        event.setState({ selectedSubProduct: subProduct })
    }

    visibilityProduct(event) {
        event.preventDefault();
        this.setState({ isProduct: true })
    }

    handleInputChange = (field, event) => {
        let formData = this.state.formData;  // form data
        formData[field] = event.target.value; // current input change value
        this.isFormValid(formData); // check validation
        this.setState(formData); // set input change value 
    }

    isFormValid = (fields) => {
        let isValid = true;
        const formData = fields ? fields : this.state.formData;
        let errors = {};
        if (isEmpty(formData.ProductName)) {
            isValid = false;
            errors.ProductName = 'Product Name is Required';
        }
        if (isEmpty(formData.ProductId)) {
            isValid = false;
            errors.ProductId = 'Product Id is Required';
        }
        if (isEmpty(formData.ProductKeyword)) {
            isValid = false;
            errors.ProductKeyword = 'Product KeyWord is Required';
        }
        if (isEmpty(formData.ProductDescription)) {
            isValid = false;
            errors.ProductDescription = 'Product Description is Required';
        }
        if (isEmpty(formData.Feature1)) {
            isValid = false;
            errors.Feature1 = 'Feature is Required';
        }
        if (isEmpty(formData.Feature2)) {
            isValid = false;
            errors.Feature2 = 'Feature is Required';
        }
        if (isEmpty(formData.Feature3)) {
            isValid = false;
            errors.Feature3 = 'Feature is Required';
        }
        if (isEmpty(formData.Generalinfo1)) {
            isValid = false;
            errors.Generalinfo1 = 'General Info is Required';
        }
        if (isEmpty(formData.Generalinfo2)) {
            isValid = false;
            errors.Generalinfo2 = 'General Info is Required';
        }
        if (isEmpty(formData.Generalinfo3)) {
            isValid = false;
            errors.Generalinfo3 = 'General Info is Required';
        }
        if (isEmpty(formData.CareInfo1)) {
            isValid = false;
            errors.CareInfo1 = 'Care Infor is Required';
        }
        if (isEmpty(formData.MRPPrice)) {
            isValid = false;
            errors.MRPPrice = 'MRP Price is Required';
        }
        if (isEmpty(formData.SellingPrice)) {
            isValid = false;
            errors.SellingPrice = 'Selling Price is Required';
        }
        this.setState({ errors: errors });
        return isValid;
    }

    SaveProduct(event) {
        event.preventDefault();
        if (this.isFormValid()) {
        }
    }

    render() {
        return (
            <Container style={{ backgroundColor: 'White' }} >
                <div style={{ display: this.state.isProduct ? 'none' : 'block' }}>
                    <Row>
                        <Col>
                            <ProductItem products={this.state.products} action={this.getSubProduct.bind('', this)}></ProductItem>
                        </Col>
                        <Col>
                            <SubProduct subProducts={this.state.subProducts} action={this.setSubProduct.bind('', this)}></SubProduct>
                        </Col>
                        <Col style={{ textAlign: 'center' }}>
                            <i className="fa fa-briefcase" style={{ fontSize: "54px" }}></i>
                            <p>{this.state.selectedProduct?.product_name && 'Product Name:' + this.state.selectedProduct?.product_name}</p>
                            <p>{this.state.selectedSubProduct?.sub_product_name && 'Sub Product Name:' + this.state.selectedSubProduct?.sub_product_name}</p>
                            {this.state.selectedProduct?.product_name && this.state.selectedSubProduct?.sub_product_name ? <Button variant="outline-info" round type="submit" onClick={this.visibilityProduct.bind(this)}  >
                                Create Product
                        </Button> : null}
                        </Col>

                    </Row>
                </div>
                <div style={{ display: this.state.isProduct ? 'block' : 'none' }}>
                    <form>
                        <Row>

                            <Col md="12"><h4>Images</h4>
                                <hr /></Col>
                            <Col md="12"><h4>Product Details</h4>
                                <hr />
                                <FormInputs
                                    ncols={["col-md-12", "col-md-6", "col-md-6", "col-md-12"]}
                                    properties={[
                                        {
                                            label: "Product Name",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Product Name",
                                            onChange: this.handleInputChange.bind(this, "ProductName"),
                                            error: this.state.errors["ProductName"]
                                        },
                                        {
                                            label: "Product Id",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Product Id",
                                            onChange: this.handleInputChange.bind(this, "ProductId"),
                                            error: this.state.errors["ProductId"]
                                        },
                                        {
                                            label: "Keywords",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Product Keywords",
                                            onChange: this.handleInputChange.bind(this, "ProductKeyword"),
                                            error: this.state.errors["ProductKeyword"]
                                        },
                                        {
                                            label: "Description",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Product Description",
                                            onChange: this.handleInputChange.bind(this, "ProductDescription"),
                                            error: this.state.errors["ProductDescription"]
                                        }
                                    ]}
                                /></Col>
                            <Col md="12"><h4>Key Feature</h4>
                                <hr />
                                <FormInputs
                                    ncols={["col-md-4", "col-md-4", "col-md-4", "col-md-4", "col-md-4", "col-md-4"]}
                                    properties={[
                                        {
                                            label: "Feature 1",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Feature 1",
                                            onChange: this.handleInputChange.bind(this, "Feature1"),
                                            error: this.state.errors["Feature1"]
                                        },
                                        {
                                            label: "Feature 2",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Feature 2",
                                            onChange: this.handleInputChange.bind(this, "Feature2"),
                                            error: this.state.errors["Feature2"]
                                        },
                                        {
                                            label: "Feature 3",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Feature 3",
                                            onChange: this.handleInputChange.bind(this, "Feature3"),
                                            error: this.state.errors["Feature3"]
                                        },
                                        {
                                            label: "Feature 4",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Feature 4"
                                        },
                                        {
                                            label: "Feature 5",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Feature 5"
                                        },
                                        {
                                            label: "Feature 6",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Feature 6"
                                        }
                                    ]} /></Col>
                            <Col md="12"><h4>General Information</h4>
                                <hr />
                                <FormInputs
                                    ncols={["col-md-4", "col-md-4", "col-md-4", "col-md-4", "col-md-4", "col-md-4"]}
                                    properties={[
                                        {
                                            label: "General info 1",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "General info 1",
                                            onChange: this.handleInputChange.bind(this, "Generalinfo1"),
                                            error: this.state.errors["Generalinfo1"]
                                        },
                                        {
                                            label: "General info 2",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "General info 2",
                                            onChange: this.handleInputChange.bind(this, "Generalinfo2"),
                                            error: this.state.errors["Generalinfo2"]
                                        },
                                        {
                                            label: "General info 3",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "General info 3",
                                            onChange: this.handleInputChange.bind(this, "Generalinfo3"),
                                            error: this.state.errors["Generalinfo3"]
                                        },
                                        {
                                            label: "General info 4",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "General info 4"
                                        },
                                        {
                                            label: "General info 5",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "General info 5"
                                        },
                                        {
                                            label: "General info 6",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "General info 6"
                                        }
                                    ]} /></Col>
                            <Col md="12"><h4>Care Information</h4>
                                <hr />
                                <FormInputs
                                    ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                    properties={[
                                        {
                                            label: "Care Info 1",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Care Info 1",
                                            onChange: this.handleInputChange.bind(this, "CareInfo1"),
                                            error: this.state.errors["CareInfo1"]
                                        },
                                        {
                                            label: "Care Info 2",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Care Info 2"
                                        },
                                        {
                                            label: "Care Info 3",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Care Info 3"
                                        }
                                    ]} /></Col>
                            <Col md="12"><h4>Price Information</h4>
                                <hr />
                                <FormInputs
                                    ncols={["col-md-6", "col-md-6"]}
                                    properties={[
                                        {
                                            label: "MRP Price",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "MRP Price",
                                            onChange: this.handleInputChange.bind(this, "MRPPrice"),
                                            error: this.state.errors["MRPPrice"]
                                        },
                                        {
                                            label: "Selling Price",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Selling Price",
                                            onChange: this.handleInputChange.bind(this, "SellingPrice"),
                                            error: this.state.errors["SellingPrice"]
                                        }
                                    ]} /></Col>
                            <Col md="12"><h4>Other Information</h4>
                                <FormInputs
                                    ncols={["col-md-12"]}
                                    properties={[
                                        {
                                            label: "Other Information",
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Information"
                                        }
                                    ]} /></Col>
                            <Col>
                                <Button variant="outline-info" round type="submit" onClick={this.SaveProduct.bind(this)}  >
                                    Save
                        </Button></Col>

                        </Row>
                    </form>
                </div>
            </Container >

        )
    }
}
