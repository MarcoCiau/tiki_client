import styled from "styled-components";

const Wrapper = styled.main`
  .actions {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
  }
  .action 
    margin-bottom: 1rem;
  }
  .icon:hover svg {
      color: var(--primary-500);
    }
  .icon {
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
