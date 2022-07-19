import Wrapper from "../assets/wrappers/StatItem";

function StatItem({ count, title, color, bcg }) {
  return (
    <Wrapper color={color} bcg={bcg}>
      <h5 className="title">{title}</h5>
      <header>
        <span className="count">{count}</span>
      </header>
    </Wrapper>
  );
}

export default StatItem;
