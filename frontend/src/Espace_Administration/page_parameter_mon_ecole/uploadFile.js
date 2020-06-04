import React from "react";
import "./uploadFile.css";

class uploadFile extends React.Component {
  onFormSabmit = event => {};
  render() {
    return (
      <div>
        <div className="row ">
          <div className=" col-sm-9 col-md-7 col-lg-6 col-xl-5 mt-5 p-5 ">
            <form>
              <div className="form-group ">
                <label>
                  <h5>Select a file</h5>
                </label>
                <div className="input-group">
                  <input type="file" id="fileName" className="form-control" />
                  <span>
                    <label
                      htmlFor="fileName"
                      className="btn btn-default browse-border "
                    >
                      Browse
                    </label>
                  </span>
                </div>
              </div>

              <div>
                <button type="reset" className="btn btn-danger btn-md">
                  Reset{" "}
                </button>
                <button
                  type="submit"
                  className="btn btn-success  btn-md"
                  onClick={this.onFormSabmit}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default uploadFile;
