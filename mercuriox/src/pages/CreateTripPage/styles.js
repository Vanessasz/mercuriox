import styled from "styled-components";

export const Division = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-left: 40%;
`;

export const CreateTripsForm = styled.div`
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
    padding: 50 20px;
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
