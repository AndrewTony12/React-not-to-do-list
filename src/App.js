import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/Form";
import { BadList } from "./components/task-list/BadList";

import { TaskList } from "./components/task-list/TaskList";
import { Title } from "./components/Title/Title";

const App = () => {
  //state to store all the task lists
  return (
    <div className="wrapper">
      <Container>
        {/* title comp */}
        <Title />

        <Row>
          <Col md="6">
            <AddForm />
          </Col>
          <Col md="6"></Col>
        </Row>
        <hr />
        <TaskList />
        <BadList />

        <Row>
          <Col>
          <h3 className="mt-5">The total allocated hours is: 15hrs </h3>
          </Col>      
            </Row>
      </Container>
    </div>
  );
};

export default App;
