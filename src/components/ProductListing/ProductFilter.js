import React from 'react';
import { Accordion } from 'react-bootstrap';
import { BiPlus, BiMinus } from 'react-icons/bi';
// import "../../utils/styles/productlisting.css";
const ProductFilter = () => {
  return (
    <Accordion className="products-filter-section">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion-header">
          <h5 className="d-flex justify-content-between">
            Price <span><BiMinus /></span>
          </h5>
        </Accordion.Header>
        <Accordion.Body className="accordion-body">
          {/* Filter content for Price */}
          {/* You can add form elements or other filter options here */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordion-header">
          <h5 className="d-flex justify-content-between">
            Another Filter <span><BiMinus /></span>
          </h5>
        </Accordion.Header>
        <Accordion.Body className="accordion-body">
          {/* Filter content for Another Filter */}
          {/* You can add form elements or other filter options here */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductFilter;
