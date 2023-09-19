import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: #f8fbff;

  pre {
    margin: 3rem;
    font-size: 1.5rem;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
`;
