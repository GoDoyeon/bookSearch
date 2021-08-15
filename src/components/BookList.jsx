import React from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import useActions from '../hooks/useActions';
const BookList = () => {
  const { books } = useBooks();
  const { addToOrder } = useActions();
  return (
    <BookListWrapper>
      {books.map((item, id) => {
        const { thumbnail, title, authors, price, sale_price, publisher, url } =
          item;
        const click = () => {
          addToOrder(id);
          console.log('id: ' + id);
        };
        return (
          <BookItem key={id}>
            <BookImage>
              <a href={url} target='_blank' rel='noreferrer'>
                <img src={thumbnail} alt={thumbnail} />
              </a>
            </BookImage>
            <BookContents>
              <dt className='bookTitle'>{title}</dt>
              <dt>
                <b>작가</b> {authors}
              </dt>
              <dt>
                <b>id</b> {id}
              </dt>
              <dt>
                <b>정가</b> {price}
              </dt>
              <dt>
                <b>판매가</b> {sale_price}
              </dt>
              <dt>
                <b>출판사</b> {publisher}
              </dt>
              <AddBtn onClick={click}>+</AddBtn>
            </BookContents>
          </BookItem>
        );
      })}
    </BookListWrapper>
  );
};

const BookListWrapper = styled.li`
  display: grid;
  padding: 2ppx;
  width: 900px;
  margin: auto;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
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

const AddBtn = styled.button`
  // margin: 0 10px 20px 54px;
  padding: 10px;
  border-radius: 50px;
  background-color: var(--mint-color);
  border: none;
`;

export default BookList;
