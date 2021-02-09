import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../store";

const Header = () => {
  const disptch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const changeValue = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    disptch(search(keyword));
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          홈
        </Link>
        <Nav className="mr-auto">
          <Link to="/joinForm" className="nav-link">
            회원가입
          </Link>
          <Link to="/loginForm" className="nav-link">
            로그인
          </Link>
          <Link to="/saveForm" className="nav-link">
            글쓰기
          </Link>
        </Nav>
        <Form inline onSubmit={onSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={changeValue}
            className="mr-sm-2"
          />
          <Button variant="outline-info" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
