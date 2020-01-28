import { connect } from "react-redux";
import NavBar from './NavBar';
import {withRouter} from 'react-router-dom';
import {
  getConnect,
  changeHome,
  addMessage,
} from '../../store/home';

const mapStateToProps = state => {
  return {
    unread: state.home.unread,
    isLight: state.settings.isLight,
  }
};

const mapDispatchToProps = {
  getConnect,
  changeHome,
  addMessage,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
