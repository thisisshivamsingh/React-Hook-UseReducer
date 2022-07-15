import { useReducer } from "react";

const Reducer = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "Increment":
          return {
            ...state,
            count: state.count + action.payload,
            clicks: state.clicks + 1,
          };
        case "Decrement":
          return {
            ...state,
            count: state.count - action.payload,
            clicks: state.clicks + 1,
          };
        case "change_name":
          return { ...state, user: action.payload };
        default:
          return state;
      }
    },
    { user: "Steve", count: 0, clicks: 0 }
  );
  return (
    <div className="container">
      <div>current user:{state.user}</div>
      <div>current count:{state.count}</div>
      <div>current clicks:{state.clicks}</div>
      <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "change_name", payload: "Ron" })}>
        Name
      </button>
    </div>
  );
};

export default Reducer;
