import { connect } from 'react-redux';
import SettingsPage from './SettingsPage';
import {
  changeSettings,
  CHANGE_SETTINGS_DEFAULT,
} from '../../store/settings'

const mapStateToProps = state => {
  return {
    ...state.settings
  };
}

const mapDispatchToProps = {
  changeSettings,
  onReset: e => dispatch => dispatch({type: CHANGE_SETTINGS_DEFAULT})
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
