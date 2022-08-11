import React from "react";

function Preview({ imageUrl, title }) {
  return (
    <div>
      <div className="relative">
        <div className="ml-5">
          <div>
            <img src={imageUrl} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
