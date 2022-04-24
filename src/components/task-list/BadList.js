import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

export const BadList = ({ BadLists, removeFromBadList, shiftToTaskList,totalBadHours }) => {
  return (
    <div>
      <h2 className="text-center">Bad list</h2>
      <hr />

      <Table striped hover>
        <tbody>
          {BadLists.map((item, i) => {
            return (
              <>
                <tr key={i}>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>

                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <Button
                      variant="warning"
                      onClick={() => shiftToTaskList(i)}
                    >
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </Button>

                    <Button
                      variant="danger"
                      onClick={() => removeFromBadList(i)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                    {""}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <h4 className="mt-5 text-danger">you could have saved: {totalBadHours}hrs</h4>
    </div>
  );
};
