import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import tasks from './tasks';
import targets from './targets';
import filterTasks from './filterTasks';

export default combineReducers ( {
  routing: routeReducer,
  tasks,
  targets,
  filterTasks
})
