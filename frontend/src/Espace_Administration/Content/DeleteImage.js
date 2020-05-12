import React, { useState, useEffect, Fragment } from "react";
import img from "./imagesForGallerie/IMG_20190529_104205.jpg";
import axios from "axios";
import Spinner from "../../Components/Spinner";

function ImagesGrid() {
  const [formData, setFormData] = useState({ ListeImage: [] });
  const [State, setState] = useState(false);
  const { ListeImage } = formData;
  const deleteImage = async (id) => {
    await axios.delete("/GalerieImages/deleteFiles/" + id);

    setState(!State);
  };
  useEffect(() => {
    axios.get("/GalerieImages/getFiles").then((res) => {
      setFormData({
        ...formData,
        ListeImage: res.data,
      });
    });
  }, [State]);
  return ListeImage.length === 0 ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <h3 className="mb-3">Liste des images</h3>
      <div className="row">
        {ListeImage.map((elem) => {
          return (
            <div className="col-lg-2 col-sm-3 pb-4 ">
              <div className="thumbnail">
                <img
                  src={`http://localhost:5000/GalerieImages/files/${elem._id}`}
                  className="img-thumbnail"
                  style={{
                    height: "130px",
                    width: "100%",
                    backgroundSize: "cover",
                  }}
                />
                <button
                  type="button"
                  className="btn btn-danger  btn-block mt-1"
                  onClick={() => deleteImage(elem._id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImagesGrid;
