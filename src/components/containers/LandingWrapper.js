// import React from 'react';
// import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Landing from '../Landing';
import { appIsInteractive } from '../../actions/appInteractive';
  
  const mapStateToProps = (state) => ({
    appInteractive: state.appMeta.appIsInteractive
  });

  const mapDispatchToProps = (dispatch) => bindActionCreators({ appIsInteractive } , dispatch);
  // bindActionCreators docs says first arg can be function but in practice it destructures the action it returns so always use an object
  
  const LandingWrapper = connect(
    mapStateToProps, 
    mapDispatchToProps
  )(Landing);

  export default LandingWrapper;