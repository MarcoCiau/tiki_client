import styled from 'styled-components'

const Wrapper = styled.article`
  padding: 1rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${(props) => props.color};
  width: 300px;
  margin: 1rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }

  @media (min-width: 400px) {
    width: 450px;
    .count {
    font-size: 40px;
    }
    .title {
      margin-top: 0.2rem;
    }
  }

   @media (min-width: 768px) {
    width: 300px;
    .count {
    font-size: 50px;
    }
    .title {
      margin-top: 0.5rem;
    }
  }
  /*

  @media (min-width: 1120px) {
    width: 500px;
  }  */
`

export default Wrapper
