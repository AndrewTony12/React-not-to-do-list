import { Button } from "bootstrap";
import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { FormRow } from "../form/FormRow";

export const TaskList = () => {
  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center">Task list</h2>
          <hr />

          <Table striped hover>
            <tbody>
              <FormRow />
            </tbody>
          </Table>
        </Col>
        <Col md="6">
          <h2 className="text-center">Bad list</h2>
          <hr />
          <Table striped hover>
            <tbody>
              <FormRow />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
