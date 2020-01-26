import { connect } from "react-redux";
import HomePage from "./HomePage";
import {
  changeHome,
  sendMessage,
} from '../../store/home';

const mapStateToProps = state => {
  return {
    ...state.home,
    username: state.settings.userName,
    isShortCut: state.settings.isShortCut,
  };
}

const mapDispatchToProps = {
  changeHome,
  sendMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
