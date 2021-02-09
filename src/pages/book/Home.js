import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookItem from "../../components/BookItem";

const Home = () => {
  const [books, setBooks] = useState([]);
  const { keyword } = useSelector((state) => state);

  // 함수 실행시 최초 한번 실행되는 것 + [] 상태값이 변경될 때마다 실행
  useEffect(() => {
    // 데이터를 요청함.
    fetch("http://localhost:8080/book", {
      method: "GET",
    })
      .then((res) => res.json()) // promise -> 티켓을 받는거라고 생각하자.
      .then((res) => {
        // 여기에 값이 들어옴
        setBooks(res);
      }); // 비동기 함수
  }, []); // 한번만 실행할 수 있도록 빈배열

  return (
    // 키가 없으면 리액트는 머가 달라졌는지 모르기 때문에 키를 넣어주어야 함.
    <div>
      {books
        .filter((e) => e.title.includes(keyword))
        .map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
    </div>
  );
};

export default Home;
