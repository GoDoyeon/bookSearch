import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Item = (props) => {
  const handleClick = (e) => {
    console.log(`클릭: {e.target.value}`);
  };
  const [recordBooks, setRecordBooks] = useState({
    title: '',
    price: '',
  }); // 클릭한 책의 정보를 담는다.
  const titlerRcordBook = useRef();

  const { title, price } = recordBooks; // 비구조화 할당을 통해 값 추출

  console.log(`recordBooks : ${recordBooks}`);
  return (
    <li>
      <BookItem>
        {/* <a href={props.url} target='_blank' rel='noopener noreferrer'> */}
        <BookImage>
          <img src={props.thumbnail} alt={props.thumbnail} />
        </BookImage>
        {/* </a> */}
        <BookContents>
          <dt className='bookTitle' value={props.title} onClick={handleClick}>
            {props.title}
          </dt>
          <dt>
            <b>작가</b> {props.authors}
          </dt>
          <dt>
            <b>가격</b> {props.price}
          </dt>
          <dt>
            <b>출판사</b> {props.publisher}
          </dt>
        </BookContents>
      </BookItem>
    </li>
  );
};
const BookItem = styled.dl`
  display: flex;
  dt {
    display: block;
    font-size: 15px;
    margin-bottom: 5px;
  }
  .bookTitle {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const BookImage = styled.dl`
  display: block;
  flex-direction: column;
`;

const BookContents = styled.div`
  padding-left: 20px;
`;

export default Item;
