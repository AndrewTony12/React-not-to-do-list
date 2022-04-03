import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

export const BadList = () => {
  return (
    <div>
      <h2 className="text-center">Bad list</h2>
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
              <Button variant="warning">
                <i className="fa-solid fa-arrow-left-long"></i>
              </Button>

              <Button variant="danger">
                <i class="fa-solid fa-trash"></i>
              </Button>
              {""}
            </td>
          </tr>
        </tbody>
      </Table>

      <h4 className="mt-5 text-danger">you could have saved: 20hrs</h4>
    </div>
  );
};
