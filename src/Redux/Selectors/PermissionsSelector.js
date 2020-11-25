import { createSelector } from 'reselect';
import has from 'lodash/has';

const baseDataSelector = state => state.baseData;

const PermissionSelector = createSelector(
  baseDataSelector,
  baseData => ({
    baseData,
    hasPerm: (permissionToken) => {
      if (permissionToken === '' || permissionToken === undefined || permissionToken === null) {
        return false;
      }
      if (has(baseData, 'data.la_user.user_permissions')) {
        return (
          baseData.data.la_user.user_permissions.some(
            permissionObject => permissionObject.codename.localeCompare(permissionToken) === 0,
          )
        );
      }
      return false;
    },
  }),
);

export default PermissionSelector;
