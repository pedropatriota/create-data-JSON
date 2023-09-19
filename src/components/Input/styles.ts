import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: #000;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fbff;
  border: 1px solid #d8dde7;
  border-radius: 4px;
  outline: none;
  padding: 2px 10px;
  span {
    font-weight: 700;
    font-size: 12px;
    color: #858d9f;
    pointer-events: none;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 46px;
  color: #37383c;
  outline: none;
  border: none;
  background: transparent;
`;
