import * as React from "react";

const UploadImg = () => {
    return (
      <>
        <input
        type="file"
        />
        <div className="display_img">
            <img className="img_admin" src="" alt="" />
        </div>
      </>
    );
    };
  export default UploadImg;