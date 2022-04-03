import React from "react";
import { Form, Button } from "react-bootstrap";

export const FormRow = () => {
  return (
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
  );
};
