import React, { useState } from "react";

const ContenuPageParameterEcole = () => {
  const [formData, setFormData] = useState({
    logo: "",
    nom_ecole: "",
    num_tel: "",
    email: "",
    location: "",
    facebook_link: "",
    twitter_link: "",
    linkedIn_link: "",
    nb_élèves: "",
    nb_ens_certifiés: "",
    taux_de_réussite: "",
    qui_somme_nous: "",
    mot_du_directeur: ""
  });

  const {
    logo,
    nom_ecole,
    num_tel,
    email,
    location,
    facebook_link,
    twitter_link,
    linkedIn_link,
    qui_somme_nous,
    mot_du_directeur,
    nb_élèves,
    nb_ens_certifiés,
    taux_de_réussite
  } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="row">
          {/* //LOGO */}
          <div className="  col-sm-6 ">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0   ">
                <div className="form-group ">
                  <label>
                    <h5>Lien du logo de l'école</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="logo de l'école ici"
                      value={logo}
                      name="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//NOM DE L'ECOLE */}
          <div className="col-sm-6">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0 ">
                <div className="form-group ">
                  <label>
                    <h5>Nom de l'école</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="nom de l'ecole "
                      value={nom_ecole}
                      name="nom_ecole"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* //INFO-DE-CONTACT */}
          <div className="col-sm-6  px-5 my-4 ">
            <label className="mb-0">
              <h5 className="mb-0">Info de contact</h5>
            </label>
            <div className="infoElm">
              <div className="row ">
                <div className="col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="vaadin:phone-landline"
                  ></span>
                  <input
                    onChange={e => onChange(e)}
                    className="form-control y"
                    type="text"
                    placeholder="Numéro de téléphone"
                    value={num_tel}
                    name="num_tel"
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ic:outline-email"
                  ></span>
                  <input
                    onChange={e => onChange(e)}
                    className="form-control y"
                    type="text"
                    placeholder="Email "
                    name="email"
                    value={email}
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-8  x ">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ic:sharp-location-on"
                  ></span>
                  <input
                    onChange={e => onChange(e)}
                    className="form-control y"
                    type="text"
                    placeholder="Emplacement de l'école"
                    name="location"
                    value={location}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/* //RESEAUX-SOCIAUX */}
          <div className="col-sm-6 px-5 my-4 ">
            <label className="mb-0">
              <h5 className="mb-0">Réseaux sociaux</h5>
            </label>
            <div className="infoElm">
              <div className="row ">
                <div className=" col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ant-design:facebook-filled"
                  ></span>
                  <input
                    id="reseauSociaux"
                    className="form-control y"
                    type="text"
                    name="facebook_link"
                    value={facebook_link}
                    onChange={e => onChange(e)}
                    placeholder="Lien vers la page Facebook"
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className=" col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="uil:twitter"
                  ></span>
                  <input
                    className="form-control y"
                    type="text"
                    placeholder="Lien vers la page Twitter"
                    name="twitter_link"
                    value={twitter_link}
                    onChange={e => onChange(e)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className=" col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ant-design:linkedin-filled"
                  ></span>
                  <input
                    className="form-control y"
                    type="text"
                    placeholder="Lien vers la page LinkedIn"
                    name="linkedIn_link"
                    value={linkedIn_link}
                    onChange={e => onChange(e)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* //QUI SOMME NOUS */}
          <div className="  col-sm-6 ">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0   ">
                <div className="form-group">
                  <label>
                    <h5>Qui somme nous ?</h5>
                  </label>
                  <textarea
                    className="form-control aa"
                    rows="6"
                    value={qui_somme_nous}
                    name="qui_somme_nous"
                    onChange={e => onChange(e)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/*//MOT DU DIRECTEUR */}
          <div className="col-sm-6">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0 ">
                <div className="form-group">
                  <label>
                    <h5>Mot du directeur</h5>
                  </label>
                  <textarea
                    onChange={e => onChange(e)}
                    className="form-control aa"
                    rows="6"
                    value={mot_du_directeur}
                    name="mot_du_directeur"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* //nombre d'élèves */}
          <div className="  col-lg-3 ">
            <div className="row p-5 ">
              <div className="col-sm-8    px-0   ">
                <div className="form-group ">
                  <label>
                    <h5>Nombre d'élèves </h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="nombre d'élèves ici"
                      value={nb_élèves}
                      name="nb_élèves"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//nombre d'enseignants certifiés */}
          <div className="col-lg-6">
            <div className="row p-5 ">
              <div className="col-sm-8    px-0 ">
                <div className="form-group ">
                  <label>
                    <h5>Nombre d'enseignants certifiés</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="nombre d'enseignants certifiés ici"
                      value={nb_ens_certifiés}
                      name="nb_ens_certifiés"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//taux de réussite */}
          <div className="col-lg-3">
            <div className="row p-5 ">
              <div className="col-sm-8   px-0 ">
                <div className="form-group ">
                  <label>
                    <h5>Taux de réussite</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="taux de réussite ici "
                      value={taux_de_réussite}
                      name="taux_de_réussite"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="button mt-3 mb-5 ">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContenuPageParameterEcole;
