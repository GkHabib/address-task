const generateActionTypes = name => ({
  request: `${name}_REQUESTED`,
  receive: `${name}_RECEIVED`,
  error: `${name}_FAILURE`,
  create: `${name}_CREATED`,
  delete: `${name}_DELETED`,
  update: `${name}_UPDATED`,
  requestItem: `${name}_REQUESTED_ITEM`,
  receivedItem: `${name}_RECEIVED_ITEM`,
  errorItem: `${name}_FAILURE_ITEM`,
  filteredDataRequest: `${name}_FILTERED_REQUEST`,
  filteredDataReceive: `${name}_FILTERED_RECEIVE`,
  filteredDataError: `${name}_FILTERED_ERROR`,
});

export default generateActionTypes;
