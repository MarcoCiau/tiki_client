import styled from "styled-components";

const Wrapper = styled.section`
  .icon-action:hover svg {
    color: var(--primary-500);
  }
  .icon-action {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--grey-400);
    }
  }
`;
export default Wrapper;
