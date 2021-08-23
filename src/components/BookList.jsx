import React from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import useActions from '../hooks/useActions';
const BookList = () => {
  const { books } = useBooks();
  const { addToOrder } = useActions();
  return (
    <BookListWrapper>
      {books.map((book) => {
        const { isbn, thumbnail, title, price, sale_price, publisher, url } =
          book;
        const click = () => {
          addToOrder(isbn);
          console.log('[bookList]]isbn: ' + isbn);
        };
        return (
          <BookItem key={isbn}>
            <BookImage>
              <a href={url} target='_blank' rel='noreferrer'>
                <img src={thumbnail} alt={thumbnail} />
              </a>
            </BookImage>
            <div className='bookContents'>
              <div className='bookPublisher'>{publisher}</div>
              <div className='bookTitle'>{title}</div>
              <div className='bookPrice'>
                <strike>{price.toLocaleString()}</strike>{' '}
                {sale_price.toLocaleString()} &#8361;
              </div>
              <div className='icons'>
                <img src='/img/cart.png' alt='cart' onClick={click} />
                <a href={url} target='_blank' rel='noreferrer'>
                  <img src='/img/increase.png' alt='increase' />
                </a>
              </div>
            </div>
          </BookItem>
        );
      })}
    </BookListWrapper>
  );
};

const BookListWrapper = styled.li`
  background-color: var(--grey-color);
  display: grid;
  width: 900px;
  margin: auto;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
const BookItem = styled.dl`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  .bookContents {
    position: absolute;
    text-align: left;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    background-color: rgba(36, 76, 112, 0.9);
    padding: 15px;
    opacity: 0;
    visibility: visible;
    width: 100%;
  }
  &:hover {
    .bookContents {
      opacity: 1;
      transition: all 0.6s 0s;
      .bookPublisher {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        font-weight: 300;
        color: var(--darkgrey-color);
      }
      .bookTitle {
        margin-bottom: 1rem;
        font-size: 1.7rem;
        font-weight: 600;
        line-height: 25px;
        color: var(--white-color);
      }
      .bookPrice {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 25px;
        color: var(--white-color);
        strike {
          color: var(--darkgrey-color);
          font-size: 1.4rem;
          margin-right: 0.5rem;
        }
      }
      .icons {
        display: flex;
        cursor: pointer;
        justify-content: flex-end;
        img {
          width: 3rem;
          height: 3rem;
          margin-left: 2rem;
        }
      }
    }
  }
`;

const BookImage = styled.dt`
  /* width: 25rem;
  height: 30rem;
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow: hidden; */
  img {
    /* width: 24rem;
    height: 30rem; */
    width: 100%;
  }
`;

export default BookList;
