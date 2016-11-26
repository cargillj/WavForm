// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as SettingsActions from '../../../shared/actions/settings';

function mapStateToProps({ settings }) {
  return { settings };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
