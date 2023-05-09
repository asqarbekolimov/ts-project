import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  border-top: 1px solid lightblue;
  padding-top: 20px;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
  .info,
  .btns {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 100px;
    object-fit: cover;
    margin-right: 40px;
  }
`;
