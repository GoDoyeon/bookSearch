import React, { useMemo } from 'react';
import styled from 'styled-components';
import useActions from '../hooks/useActions';
import useBooks from '../hooks/useBooks';
import useOrders from '../hooks/useOrders';

const Order = () => {
  const orders = useOrders();
  const { books } = useBooks();
  const { remove, removeAll } = useActions();
  console.log('장바구니 책 개수:' + orders.length);
  // const totalPrice = useMemo(() => {
  //   return orders
  //     .map((order) => {
  //       const { id, quantity } = order;
  //       const book = books.find((b) => b.id === id);
  //       return book.sale_price * quantity;
  //     })
  //     .reduce((l, r) => l + r, 0);
  // }, [orders, books]);
  // console.log(orders);
  if (orders.length === 0) {
    return (
      <OrderWrapper>
        <Title> You Don't have any orders</Title>
        <SubTitle>책을 추가해주세요.</SubTitle>
      </OrderWrapper>
    );
  }

  return (
    <>
      <OrderWrapper>
        <h1>장바구니</h1>
        {orders.map((order) => {
          const { id } = order;
          const book = books.find((b) => b.id === id);
          console.log('휴:' + book);
          // const click = () => {
          //   remove(id);
          // };
          return (
            <>
              <div className='item' key={id}>
                <p>{book.title}</p>
                {/* <div className='img'>
                  <img src={book.thumbnail} />
                </div>
                <div className='content'>
                  <p className='bookTitle'>
                    {book.title} {order.quantity}권
                  </p>
                </div>
                <div className='action'>
                  <p classname='sale_price'>
                    $ {book.sale_price * order.quantity}
                  </p>
                  <CrossBtn onClick={click}>X</CrossBtn>
                </div> */}
              </div>
            </>
          );
        })}
      </OrderWrapper>
      <div>
        <hr />
        <div className='item'>
          <div className='total'>Total</div>
          {/* <div className='sale_price'>${totalPrice}</div> */}
        </div>
        <button classname='btn' onClick={removeAll}>
          X
        </button>
      </div>
    </>
  );
};

const OrderWrapper = styled.aside`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 400px;
  margin-left: auto;
  border-radius: 4px;
  background-color: var(--white-color);
  padding: 20px;
  overflow: hidden;
  border: 2px solid var(--blue-color);
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  .item {
    display: flex;
  }
  img {
    width: 40px;
    height: 70px;
  }
  .bookTitle {
    font-size: 14px;
    color: red;
  }
`;

const Title = styled.div`
  // border: 1px solid red;
  padding: 1rem;
  font-size: 1.6rem;
`;
const SubTitle = styled.div`
  //border: 1px solid red;
  padding: 1rem;
  font-size: 1.2rem;
`;

const CrossBtn = styled.button`
  // margin: 0 10px 20px 54px;
  padding: 10px;
  border-radius: 50px;
  background-color: var(--mint-color);
  border: none;
`;
export default Order;
