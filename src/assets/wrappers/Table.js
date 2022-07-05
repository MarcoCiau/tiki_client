import styled from "styled-components";

const Wrapper = styled.main`
  table {
    background-color: var(--grey-100);
    border: 1px solid var(--grey-200);
    border-collapse: collapse;
    color: var(--grey-800);
    width: 100%;
  }
  td {
    color: var(--grey-500);
  }
  th,
  td {
    border-bottom: 1px solid var(--grey-200);
    padding: 10px;
    text-align: left;
  }
  tbody {
    border-bottom: 1px solid lightgray;
  }

  /* th {
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 2px 4px;
  }

  tfoot {
    color: gray;
  }

  tfoot th {
    font-weight: normal;
  }  */
`;
export default Wrapper;
