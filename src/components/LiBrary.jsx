import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { bookSearch } from '../api';
import useBooks from '../hooks/useBooks';
import BookList from './BookList';
import Item from './Item';

const LiBrary = () => {
  const { searchBook } = useBooks();
  const [text, setText] = useState('');

  // 엔터를 눌렀을 때 호출되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
    }
  };
  // text 검색어가 바뀔 때 호출되는 함수
  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  return (
    <LiBraryWrapper>
      <h1 className='title'>LIBRARY</h1>
      <div className='searchBox'>
        <input
          type='search'
          placeholder='검색어를 입력해 주세요.'
          name='query'
          onKeyDown={onEnter} // enter
          onChange={onTextUpdate} // change
          value={text} // view
          className='input_search'
        />
      </div>
      <ul>
        <BookList />
      </ul>
    </LiBraryWrapper>
  );
};
const LiBraryWrapper = styled.div`
  width: 100rem;
  margin: 3rem auto;
  border-radius: 4px;
  background-color: var(--white-color);
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  .title {
    font-family: 'Poppins', sans-serif;
    color: var(--blue-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
  }
  .books {
    display: flex;
  }
`;

export default LiBrary;
