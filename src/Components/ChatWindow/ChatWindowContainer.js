import { connect } from "react-redux";
import ChatWindow from './ChatWindow';

const mapStateToProps = state => {
  return {
    ...state.home,
    messages: [...state.home.messages].reverse(),
    is12Hours: state.settings.is12Hours,
  }
};

export default connect(mapStateToProps)(ChatWindow);
