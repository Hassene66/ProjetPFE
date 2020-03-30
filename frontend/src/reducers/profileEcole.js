import { GET_PROFILE_ECOLE, PROFILE_ECOLE_ERROR } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
  errors: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE_ECOLE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ECOLE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };
    default:
      return state;
  }
}
