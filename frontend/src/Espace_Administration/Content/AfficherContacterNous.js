import React, { Component, Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import person from "./images/person.jpg";
import axios from "axios";
import Spinner from "../../Components/Spinner";

export class AfficherContacterNous extends Component {
  constructor(props) {
    super(props);
    this.state = { listeContact: [], isLoaded: false };
    // this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    axios
      .get("/ContacterNous/")
      .then((response) => {
        this.setState({ listeContact: response.data, isLoaded: true });
      })
      .catch((err) => {});
  }
  async handleClose(id) {
    this.setState({
      listeContact: this.state.listeContact.filter((items) => items._id !== id),
    });
    await axios.delete("/ContacterNous/msg/" + id);
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoaded ? (
          <div className="col p-3  ">
            {this.state.listeContact.length > 0 ? (
              <div className="container">
                <h1 className="mb-4">Tout Les Messages Des Visiteurs : </h1>
                <ul className="list-unstyled">
                  {this.state.listeContact.map((contact, index) => (
                    <div
                      style={{
                        backgroundColor: "#f2f2f2",
                        marginBottom: "35px",
                        borderRadius: "10px",
                        boxShadow:
                          " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    >
                      <svg
                        className="bi bi-x"
                        width="2em"
                        height="2em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ float: "right" }}
                        onClick={this.handleClose.bind(this, contact._id)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <li className="media" key={index}>
                        <img
                          src={person}
                          className="mr-3"
                          alt="..."
                          style={{
                            borderRadius: "30%",
                            height: "4.5rem",
                            display: "block",
                            margin: "auto",
                            paddingLeft: "7px",
                          }}
                        />
                        <div className="media-body">
                          <h5 className="mt-0 mb-1">{contact.nomVisiteur}</h5>
                          <p
                            style={{
                              marginBottom: "2px",
                              color: "#6e6e6e",
                              fontWeight: "bold",
                            }}
                          >
                            Email : {contact.emailVisiteur}
                          </p>
                          <p>
                            Message : <br /> {contact.messageDuVisiteur}
                          </p>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            ) : (
              <h2 className="text-center mt-5 "> aucun messages</h2>
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

export default AfficherContacterNous;
