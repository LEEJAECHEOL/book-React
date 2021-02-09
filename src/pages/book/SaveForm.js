import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SaveForm = (props) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const submitBook = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함
    fetch("http://localhost:8080/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        // catch는 여기서 오류가 나야 실행됨.
        if (res !== null) {
          props.history.push("/");
        } else {
          alert("책 등록애 실패하였습니다.");
        }
      });
  };
  return (
    <div>
      <Form onSubmit={submitBook}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={changeValue}
            name="title"
          />
        </Form.Group>
        <Form.Group controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author"
            onChange={changeValue}
            name="author"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;
