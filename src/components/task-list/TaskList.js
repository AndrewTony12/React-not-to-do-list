import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

export const TaskList = () => {
  return (
    <div>
      <h2 className="text-center">Task list</h2>
      <hr />

      <Table striped hover>
        <tbody>
          <tr>
            <td>
              <Form.Check type="checkbox" />
            </td>

            <td>Task name</td>
            <td>10 hr</td>
            <td className="text-end">
              <Button variant="danger">
                <i class="fa-solid fa-trash"></i>
              </Button>
              {""}
              <Button variant="primary">
                <i className="fa-solid fa-arrow-right-long"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
