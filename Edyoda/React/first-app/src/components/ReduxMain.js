import React from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import App from "../App";
import { decrement, increment } from "../redux/store";

// using redux hooks
function ReduxMain(props) {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
export default ReduxMain;
// using connect
// function ReduxMain(props) {
//   return (
//     <div>
//       <h1>{props.count}</h1>
//       <button onClick={props.decrement}>-</button>
//       <button onClick={props.increment}>+</button>
//     </div>
//   );
// }
// // direct usage
// export default connect((state) => ({ count: state }), { increment, decrement })(
//   ReduxMain
// );

// using mapStateToProps and mapDispatchToProps
// const mapStateToProps = (state) => {
//   return {
//     count: state,
//   };
// };

// const mapDispatchToProps = {
//   increment: increment,
//   decrement: decrement,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxMain);
