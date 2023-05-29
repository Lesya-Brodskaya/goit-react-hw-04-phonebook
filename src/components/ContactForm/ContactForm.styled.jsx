import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
  border-radius: 10px;
`;

export const Label = styled.label`
  width: 330px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Input = styled.input`
  margin-top: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  height: 30px;
`;

export const Button = styled.button`
  padding: 3px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  color: rgb(60, 58, 58);

  :hover,
  :focus {
    background-color: orange;
    color: #fff;
    border-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
`;
