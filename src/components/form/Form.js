import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddForm = () => {
  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control name="task" placeholder="Task ..." />
          </Col>
          <Col md={3}>
            <Form.Control name="hr" placeholder="hour" type="number" />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
