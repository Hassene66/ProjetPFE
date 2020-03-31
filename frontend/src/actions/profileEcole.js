import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE_ECOLE, PROFILE_ECOLE_ERROR } from "./types";

//Get current school profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/ParameterMonEcole/getProfile");
    dispatch({
      type: GET_PROFILE_ECOLE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ECOLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//create or update school profile
//history has a method called push that will redirect us to a specific root when submitting form
//edit is to see if we are updating or adding a profile
export const CreateProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/ParameterMonEcole", formData, config);
    dispatch({
      type: GET_PROFILE_ECOLE,
      payload: res.data
    });
    dispatch(
      setAlert(
        edit
          ? "Le profil de l'école a été mis à jour"
          : "Le profil de l'ecole a été créé",
        "success"
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ECOLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
