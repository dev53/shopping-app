import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = (state /*, ownProps */) => {
  return {
    error: state.error
  }
}

export default connect(
  mapStateToProps
)(Home)
