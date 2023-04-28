import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  border: 2px solid #0000000;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid rgb(60, 58, 58);
  margin: 10px;
  border-radius: 10px;

  :hover,
  :focus {
    background-color: orange;
    color: #fff;
    border-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
`;
