import styled from "styled-components";

export const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-left: 40%;
`;

export const MyButton = styled.button`
  background: #dda0dd;
  color: white;
  border-radius: 3px;
  border-radius: 3px;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 70vw;
    max-width: 330px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 46px;
    outline: 0;
    margin-bottom: 20px;
    padding: 30 20px;
    color: #222;
    font-size: 15px;
    width: 80vw;
    max-width: 450px;
    border: 1px solid #ddd;
    &::placeholder {
      color: #222;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-size: 16px;
  background: #DDA0DD;
  height: 36px;
  border: 0;
  border-radius: 5px;
  margin-top: 10px;
  width: 30%;
`;

export const Select = styled.select`

  margin-bottom: 20px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  margin-left: 10px;

      option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 20px 1px;
       }
`;
