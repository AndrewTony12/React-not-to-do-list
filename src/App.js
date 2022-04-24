import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/Form";
import { BadList } from "./components/task-list/BadList";

import { TaskList } from "./components/task-list/TaskList";
import { Title } from "./components/Title/Title";

const App = () => {
  const [TaskLists, setTaskList] = useState([]);
  const [BadLists, setBadList] = useState([]);

  const deleteTask = () => {
    return window.confirm("Your Task might be deleted");
  };

  // remove item from task list
  const removeFromTaskList = (i) => {
    const shouldDelete = deleteTask();
    if (shouldDelete) {
      const filteredArg = TaskLists.filter((item, index) => index !== i);
      setTaskList(filteredArg);
    }
  };

  const shiftToBadList = (i) => {
    const item = TaskLists[i];
    setBadList([...BadLists, item]);
    removeFromTaskList(i);

    //get the item that to be shifted
    //add the item in the bad list
    //remove the item from the task list
  };

  const removeFromBadList = (i) => {
    const filteredArg = BadLists.filter((item, index) => index !== i);
    setBadList(filteredArg);
  };

  const shiftToTaskList = (i) => {
    const item = BadLists[i];
    setTaskList([...TaskLists, item]);
    removeFromBadList(i);
  };

  // Calculating the hours

  const weeklyHrs = 24 * 7;

  const totalTaskHours = TaskLists.reduce((acc, item) => acc + +item.hr, 0);
  const totalBadHours = BadLists.reduce((acc, item) => acc + +item.hr, 0);
  const ttlHrs = totalTaskHours + totalBadHours;

  const addToTaskList = (newInfo) => {
    if (ttlHrs + newInfo.hr <= weeklyHrs) {
      setTaskList([...TaskLists, newInfo]);
    } else {
      alert("You Are sucker!!");
    }
  };
  // console.log(taskList)
  //state to store all the task lists
  return (
    <div className="wrapper">
      <Container>
        {/* title comp */}
        <Title />
        <AddForm addToTaskList={addToTaskList} />
        {/* 
        <Row>
          <Col md="6">
            <AddForm addToTaskList={addToTaskList} />
          </Col>
          <Col md="6">
            <BadList />
          </Col>
        </Row>
        <hr />
        <TaskList TaskLists={TaskLists} />
        <BadList />

        <Row>
          <Col>
            <h3 className="mt-5">The total allocated hours is: 15hrs </h3>
          </Col>
        </Row> */}

        <Row>
          <Col>
            <TaskList
              TaskLists={TaskLists}
              removeFromTaskList={removeFromTaskList}
              shiftToBadList={shiftToBadList}
            />
          </Col>
          <Col>
            <BadList
              BadLists={BadLists}
              removeFromBadList={removeFromBadList}
              shiftToTaskList={shiftToTaskList}
              totalBadHours={totalBadHours}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="mt-5">The total allocated hours is: {ttlHrs}hrs </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
