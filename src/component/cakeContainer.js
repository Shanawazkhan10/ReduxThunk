import React from "react";
import { addCake } from "../redux/Action/addCake";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addCake());
  };
  return (
    <div>
      {/* <h1>{props.numberOfCake}</h1> */}
      <button>Buy Cake </button>
      <button onClick={handleClick}>Add Cake </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     numberOfCake: state.numberOfCake,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCake: () => dispatch(addCake()),
//   };
// };

export default CakeContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
