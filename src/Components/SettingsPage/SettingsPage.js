import React from 'react';
import styles from './SettingsPage.module.css';

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = name => ({target: {value}})  => {
      this.props.changeSettings({name, value});
    }
  }

  render() {
    const {
      userName,
      language,
      isLight,
      is12Hours,
      isShortCut,
      onReset,
    } = this.props;
    return (
      <>
        <div className={styles.settings}>
          <div className={styles.formRow}>
            <div className={styles.fieldHeader}><label htmlFor="username">Username</label></div>
            <div><input onChange={this.onChange('userName')} value={userName} /></div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.fieldHeader}>Interface color</div>
            <div>
              <label htmlFor="indoor">
                <input
                  onChange={this.onChange('isLight')}
                  id="indoor" type="radio" value="true"
                  checked={isLight === 'true'}
                /> Light
              </label>
              <label htmlFor="outdoor">
                <input
                  onChange={this.onChange('isLight')}
                  id="outdoor" type="radio" value="false"
                  checked={isLight === 'false'}
                /> Dark
              </label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.fieldHeader}>Clock Display</div>
            <div>
              <label htmlFor="hours12">
                <input
                  onChange={this.onChange('is12Hours')}
                  id="hours12" type="radio" value="true"
                  checked={is12Hours === 'true'}
                /> 12 Hours
              </label>
              <label htmlFor="hours24">
                <input
                  onChange={this.onChange('is12Hours')}
                  id="hours24" type="radio" value="false"
                  checked={is12Hours === 'false'}
                /> 24 Hours
              </label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.fieldHeader}>Send messages on CTRL+ENTER</div>
            <div>
              <label htmlFor="shortOn">
                <input
                  onChange={this.onChange('isShortCut')}
                  id="shortOn" type="radio" value="true"
                  checked={isShortCut === 'true'}
                /> On
              </label>
              <label htmlFor="shortOff">
                <input
                  onChange={this.onChange('isShortCut')}
                  id="shortOff" type="radio" value="false"
                  checked={isShortCut === 'false'}
                /> Off
              </label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.fieldHeader}><label htmlFor="language">Language</label></div>
            <div>
              <select id="language" value={language} onChange={this.onChange('language')}>
                <option value="English">English</option>
              </select>
            </div>
          </div>
        </div>
        <button className={styles.resetButton} onClick={onReset}>
          Reset to defaults
        </button>
      </>
    );
  }
}

export default SettingsPage
