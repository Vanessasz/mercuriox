import React from "react";
import "./App.css";
import styled from "styled-components";
import Router from "./components/Router/Router";

const Container = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
`;

export default function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

