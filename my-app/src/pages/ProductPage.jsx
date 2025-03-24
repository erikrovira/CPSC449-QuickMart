// File: ./my-app/src/pages/ProductPage.jsx
//---------------------------------------------------------
/* Description:
=========================================================*/
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import ProductForm from '../components/product/ProductForm';
import ProductList from '../components/product/ProductList';

function ProductPage() {

    const [items, setItems] = useState([]);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <Accordion defaultActiveKey="0">
                {/* #1: Create a listing - will change to user only */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Create Listing</Accordion.Header>
                    <Accordion.Body>
                        <ProductForm onAddItem={handleAddItem} />
                    </Accordion.Body>
                </Accordion.Item>
                {/* #2: View all listings - public can view */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Listings</Accordion.Header>
                    <Accordion.Body>
                        <ProductList items={items} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default ProductPage;