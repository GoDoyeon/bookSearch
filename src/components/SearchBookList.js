import React, { useEffect, useState } from 'react';
import { bookSearch } from '../api';
import Item from './Item';

const SearchBookList = () => {
  // 기초 데이터 state, 검색어 state, 쿼리 state를 생성한다.
  const [books, setBooks] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');

  console.log(`books: ${books.length}`);
  // ### [refactor] useMemo로 변경해보기
  // query state가 업데이트 되면 api 함수를 호출한다.
  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };
  // text 검색어가 바뀔 때 호출되는 함수
  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  // book search 핸들러
  const bookSearchHttpHandler = async (query, reset) => {
    // paramter 설정
    const params = {
      query: query,
      sort: 'accuracy', // accuracy: 정확도, recency: 최신
      page: 1, // 페이지 번호
      size: 20, // 한 페이지에 보여질 문서의 개수
    };

    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
    console.log(data);
  };
  return (
    <div className='container'>
      <h1 className='title'>LIBRARY</h1>
      <div className='searchBox'>
        <input
          type='search'
          placsholder='검색어를 입력해 주세요.'
          name='query'
          onKeyDown={onEnter} // enter
          onChange={onTextUpdate} // change
          value={text} // view
          className='input_search'
        />
      </div>
      <ul>
        {books.map((book, index) => (
          <Item
            key={index}
            thumbnail={book.thumbnail}
            title={book.title}
            authors={book.authors}
            price={book.price}
            publisher={book.publisher}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchBookList;
