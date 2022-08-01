import { useAppContext } from "../context/appContext";
const Alert = () => {
  const { alertType, alertText } = useAppContext(); //get events from app context
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
};

export default Alert;
