var mockApiData = [
  {
    id: 1,
    name: 'gmfgd'
  },
  {
    id: 2,
    name: 'mfdgfd'
  },
  {
    id: 3,
    name: 'fdffsd'
  }
];

export const getTasks = () => dispatch => {
  setTimeout( () => {
    console.log('I got tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: mockApiData });
  },200)
}
