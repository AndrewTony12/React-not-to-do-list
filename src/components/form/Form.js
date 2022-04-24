import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};
export const AddForm = ({ addToTaskList }) => {
  const [newInfo, setNewInfo] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewInfo({
      ...newInfo,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToTaskList(newInfo);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task ..."
              onChange={handleOnChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="hour"
              type="number"
              onChange={handleOnChange}
            />
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
