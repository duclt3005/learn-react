import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/actions";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { searchFilterSelector, todoListSelector } from "./redux/selector";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoListSelector);
  const searchFilter = useSelector(searchFilterSelector);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );

    setTodoName('');
    setPriority('Medium')
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(value) => setPriority(value)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
