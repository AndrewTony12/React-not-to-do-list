import React from "react";
import { Button, Col, Form, NavItem, Row, Table } from "react-bootstrap";

export const TaskList = ({ TaskLists, removeFromTaskList,shiftToBadList }) => {
  return (
    <div>
      <h2 className="text-center">Task list</h2>
      <hr />

      <Table striped hover>
        <tbody>
          {TaskLists.map((item, i) => {
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
                      variant="danger"
                      onClick={() => removeFromTaskList(i)}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                    {""}
                    <Button variant="primary" onClick={()=>shiftToBadList(i)}>
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Button>
                  </td>
                </tr>
                ;
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
