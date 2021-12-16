import React, { useState } from "react";
import "./BlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const BlogItem = (props) => {
  const { icon, image, title, description } = props.blog;
  const [descriptionCollapse, setDescriptionCollapse] = useState(true);

  const showMore = () => {
    setDescriptionCollapse(false);
  };

  const showLess = () => {
    setDescriptionCollapse(true);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img className="card-img-top" src={image} alt="blog-image" />
        <div className="card-body">
          <div className="d-flex">
            {descriptionCollapse ? (
              <img className="mr-2" height="40px" src={icon[1]} alt="icon" />
            ) : (
              <img className="mr-2" height="40px" src={icon[0]} alt="icon" />
            )}
            <div>
              <h5>{title}</h5>
              <p>
                {descriptionCollapse ? description.substr(0, 100) : description}
              </p>
              {descriptionCollapse ? (
                <span onClick={showMore} className="card-link collapse-btn">
                  See More{" "}
                  <FontAwesomeIcon
                    className="icon"
                    icon={faArrowAltCircleRight}
                  />
                </span>
              ) : (
                <span onClick={showLess} className="card-link collapse-btn">
                  {" "}
                  See Less{" "}
                  <FontAwesomeIcon
                    className="icon"
                    icon={faArrowAltCircleLeft}
                  />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
