import React from "react";

const CardsTemplate = ({ item }) => {
  return (
    <div className="cardTemplate">
      <div className="card mb-4 shadow-sm">
        <img
          className="card-img-top mt-2 cardImg"
          src={item.imgUrl}
          alt="Card cap"
          // style="max-height: 200px; max-width: 200px;margin: auto"
        />
        <div className="card-body">
          <h6 className="card-text">
            {" "}
            <strong> {item.name}</strong>
          </h6>
          <p className="card-desc">{item.designation}</p>
          <p className="card-desc">{item.location}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span
              className="text-muted"
              // style="color:crimson !important"
            >
               {item.serviceType}
            </span>

            <div className="btn-group"></div>
            {item.isLicensed ? (
              <small className="text-muted footerIcons">
                <a href="#fsdgd" className="p-2">
                  <i className="fa fa-check-double"></i>
                </a>
              </small>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTemplate;
