// File: ./my-app/src/components/product/ProductForm.jsx
//---------------------------------------------------------
/* Description:
=========================================================*/
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ProductForm({ onAddItem }) {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create item object
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            price, 
            description,
            images: [],
        };

        // Pass to parent component
        onAddItem(newItem);

        // Reset form
        setTitle('');
        setPrice('');
        setDescription('');
        setImages([]);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter product title"
                    required
                />
            </Form.Group>
            <Form.Group controlId="productPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                    required
                />
            </Form.Group>
            <Form.Group controlId="productDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Let buyers know more about this item!"
                />
            </Form.Group>
            <Form.Group controlId="productImages">
                <Form.Label>Images</Form.Label>
                <Form.Control 
                    type="file"
                    multiple
                    onChange={(e) => setImages(e.target.files)}
                    required
                />
            </Form.Group>
            <Button 
                className="mt-3"
                variant="primary" 
                type="submit"
                >
                Create Listing!
            </Button>
        </Form>
    );
}

export default ProductForm;