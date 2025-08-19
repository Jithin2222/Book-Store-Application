import React from "react";
import { Offcanvas, Table } from "react-bootstrap";

const Cart = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product 1</td>
                    <td>$10.99</td>
                </tr>
            </tbody>
        </Table>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
