import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink

// import todoApp from './reducers'
// import { createStore } from 'redux'
// let store = createStore(todoApp)
// class FilterLink extends Component {
//   componentDidMount() {
//     const { store } = this.props;
//     this.unsubscribe = store.subscribe(() => this.forceUpdate())
//   }
//
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const props = this.props;
//     const state = store.getState();
//
//     return (
//         <Link active={props.filter === state.visibilityFilter}
//               onClick={() => store.dispatch({
//                 type: 'SET_VISIBILITY_FILTER',
//                 filter: props.filter
//               })
//         >
//               {props.children}
//               </Link>
//     );
//   }
// }
