import React from 'react';
import { Accordion } from 'react-bootstrap';

const Advantage = () => {
    return (
      <div> 
          <h2 className="fs-1 fw-bold text-primary my-2 ">Why You Choose us ?</h2>
            <div className="row d-flex justify-content-center align-items-center  mx-auto">
            <div className="col-lg-6 my-4">
              <img className="w-75 h-75 img-fluid " src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="" />
            </div>
            <div className="col-lg-6 my-4">
            <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Accordion Item #3</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
        </div>
      </div>
    );
};

export default Advantage;