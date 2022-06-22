import { useSelector } from "react-redux";
const Alert = () => {
  const { alertType, alertText } = useSelector((state) => state.ui); //get events from redux's store
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
};

export default Alert;
