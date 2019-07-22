import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { _fetchUser } from './index';
export const fetchUser = id => dispatch => _fetchUser();
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});
