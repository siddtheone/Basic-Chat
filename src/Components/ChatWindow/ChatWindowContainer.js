import { connect } from "react-redux";
import ChatWindow from './ChatWindow';

const mapStateToProps = state => {
  return {
    ...state.home,
  }
};

export default connect(mapStateToProps)(ChatWindow);
