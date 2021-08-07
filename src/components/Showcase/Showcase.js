import React from "react";
import showcaseImg from "../../assets/showcase-img.jpg";

function Showcase(props) {
  return (
    <div className=" showcase-section p-5 bg-image d-flex">
      <div className="container d-flex justify-content-center align-items-center">
        <div class="row">
          <div class="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="bg-dark text-light h3 text-center p-2">
              <p className="lead m-0 ">
                High quality instruments, at the right price.
              </p>
            </div>
            <a
              href="#products"
              className="btn btn-success btn d-none d-sm-block"
            >
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
