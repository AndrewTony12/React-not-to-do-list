import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/Form";
import { FormRow } from "./components/form/FormRow";
import { TaskList } from "./components/task-list/TaskList";
import { Title } from "./components/Title/Title";

const App=()=> {
  //state to store all the task lists
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <AddForm />
        <hr />
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
