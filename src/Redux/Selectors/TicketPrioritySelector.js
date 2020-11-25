import { createSelector } from 'reselect';

const prioritiesSelector = state => state.priorities;

const getTicketPriority = createSelector(
  prioritiesSelector,
  (priorities) => {
    if (priorities.isFetching) { return { isFetching: true }; }
    return {
      priorities,
      getPriority: (priorityId) => {
        if (priorityId === '' || priorityId === undefined || priorityId === null) {
          return { error: true };
        }
        if (priorities && priorities.data && priorities.data.data) {
          return (
            priorities.data.data.find(priorityObject => priorityObject.id === priorityId)
          );
        }
        return { error: true };
      },
    };
  },
);

export default getTicketPriority;
