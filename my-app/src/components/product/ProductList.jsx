// File: ./my-app/src/components/product/ProductList.jsx
//---------------------------------------------------------
/* Description:
=========================================================*/
import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

function ProductList({ items }) {

    return (
            <Row>
                {items.map(item => (
                    <Col key={item.id} sm={3} md={6} lg={6}>
                        <Card className="mb-3">
                            <Card.Img 
                                variant="top"
                                src="#"
                                alt={item.title} 
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    ${item.price}
                                </Card.Text>
                                <Button variant="primary">
                                    View Listing
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    );
}

export default ProductList;