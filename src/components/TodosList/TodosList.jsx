import { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f3f3f3;
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DeleteButton = styled.button`
  background-color: #ff5c5c;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #d94444;
  }
`;

export class TodosList extends Component {
  render() {
    const { todos, onDelete } = this.props;

    return (
      <List>
        {todos.map(({ id, text }) => (
          <ListItem key={id}>
            <Label>
              <input type="checkbox" />
              {text}
            </Label>
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodosList;
