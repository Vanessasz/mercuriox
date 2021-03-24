import styled from "styled-components";

export const Navegation = styled.nav`
  width: 100vw;
  height: 80px;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const MyButtonHeader = styled.button`
  background: #dda0dd;
  border-radius: 3px;
  color: #fdfdfd;
  font-size: 1rem;
  margin: 80px;
  padding: 0 10px;
  text-align: center;
`;

export const MyButtonAdmi = styled.button`
  background: #dda0dd;
  color: #fdfdfd;
  font-size: 1rem;
  padding: 0 10px;
  text-align: center;
`;

export const MyButtonCand = styled.button`
  background: #836fff;
  border-radius: 3px;
  color: #fdfdfd;
  font-size: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 16px;
`;

export const Division = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 380px;
  margin-top: 200px;
  text-align: center;
`;
