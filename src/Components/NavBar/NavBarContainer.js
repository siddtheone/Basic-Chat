import { connect } from "react-redux";
import NavBar from './NavBar';
import {
  changeHome,
  addMessage,
} from '../../store/home';

const mapStateToProps = state => {
  return {
    unread: state.home.unread,
  }
};

const mapDispatchToProps = {
  changeHome,
  addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
