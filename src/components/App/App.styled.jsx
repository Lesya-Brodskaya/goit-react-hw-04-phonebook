import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 50px auto;
  width: 400px;
  border: 1px solid black;
  box-shadow: 0px 3px 2px rgba(10, 38, 1), 0px 4px 4px rgba(208, 214, 206),
    0px 4px 8px rgba(152, 163, 147);
  background-color: beige;
`;

export const Phonebook = styled.h1`
  font-size: 40px;
  text-align: center;
`;

export const Contacts = styled.h2`
  font-size: 40px;
  text-align: center;
`;

export const AllСontacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
