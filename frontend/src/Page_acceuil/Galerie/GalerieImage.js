import React, { useState, useEffect, Fragment } from "react";
import Gallery from "react-grid-gallery";
import axios from "axios";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";

const PageGalerie = () => {
  const [formData, setFormData] = useState({ ListeImage: [] });
  const { ListeImage } = formData;

  useEffect(() => {
    trackPromise(
      axios.get("/GalerieImages/getFiles").then((res) => {
        setFormData({
          ...formData,
          ListeImage: res.data,
        });
      })
    );
  }, []);
  var IMAGES = [];
  if (ListeImage.length > 0) {
    ListeImage.map((image) => {
      IMAGES.push({
        src: `http://localhost:5000/GalerieImages/files/${image._id}`,
        thumbnail: `http://localhost:5000/GalerieImages/files/${image._id}`,
        thumbnailWidth: 1920,
        thumbnailHeight: 1080,
      });
    });
  }

  return (
    <div className="container">
      <Gallery images={IMAGES} />
    </div>
  );
};
export default PageGalerie;
