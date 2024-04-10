import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { alertActions, alertSelector } from "../redux/reducers/alertReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Timer = () => {
  // get alert message here
  const message = useSelector(alertSelector);
  console.log("mes", message);
  const dispatch = useDispatch();

  // create effect to reset alert message here
  useEffect(()=>{
    if(message){
      setTimeout(()=>{
        dispatch(alertActions.reset());
      },2000 )
    }
  }, [message])
  
  

  return (
    <div className="page">
    {message && <div className="alert">{message}</div>}
      <div className="alert"></div>
      <h1>Simple Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
