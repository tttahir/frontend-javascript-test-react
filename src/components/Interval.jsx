import { connect } from "../slomux/connect";

import { changeInterval } from "../actions";

function IntervalComponent({ currentInterval, changeInterval }) {
  return (
    <div>
      <span>Интервал обновления секундомера: {currentInterval} сек.</span>
      <span>
        <button onClick={() => changeInterval(-1)}>-</button>
        <button onClick={() => changeInterval(1)}>+</button>
      </span>
    </div>
  );
}

// TODO: swapped mapStateToProps and mapDispatchToProps
export const Interval = connect(
  (state) => ({
    currentInterval: state,
  }),
  (dispatch) => ({
    changeInterval: (value) => dispatch(changeInterval(value)),
  })
)(IntervalComponent);
