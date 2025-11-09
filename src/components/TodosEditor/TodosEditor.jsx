import { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Input = styled.input`
  padding: 6px;
  border-radius: 6px;
  width: 240px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

export class TodosEditor extends Component {
  state = { text: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <Input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            required
          />
        </label>

        <Button type="submit">Add task</Button>
      </Form>
    );
  }
}

export default TodosEditor;
