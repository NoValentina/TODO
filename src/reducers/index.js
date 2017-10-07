import { combineReducers } from 'redux';

import tasks from './tasks';
import targets from './targets';
import filterTasks from './filterTasks';

export default combineReducers ( {
  tasks,
  targets,
  filterTasks
})
