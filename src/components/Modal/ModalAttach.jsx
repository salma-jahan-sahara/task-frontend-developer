import React from "react";
import "./ModalAttach.css";
import { FaPaperclip } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const ModalAttach = () => {
  // Javascripts codes starts
  window.addEventListener("load", () => {
    const input = document.getElementById("file");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change", (e) => {
      let fileName = e.target.files[0].name;
      let filetype = e.target.value.split(".").pop();
      // console.log(filetype);
      fileshow(fileName, filetype);
    });
    const fileshow = (fileName, filetype) => {
      const showfileboxElem = document.createElement("div");
      showfileboxElem.classList.add("showfilebox");
      const leftElem = document.createElement("div");
      leftElem.classList.add("left");
      const fileTypeElem = document.createElement("span");
      fileTypeElem.classList.add("filetype");
      fileTypeElem.innerHTML = filetype;
      leftElem.append(fileTypeElem);
      const filetitleElem = document.createElement("h3");
      filetitleElem.innerHTML = fileName;
      leftElem.append(filetitleElem);
      showfileboxElem.append(leftElem);
      const rightElem = document.createElement("div");
      rightElem.classList.add("right");
      showfileboxElem.append(rightElem);
      const crossElem = document.createElement("span");
      crossElem.innerHTML = "X";
      rightElem.append(crossElem);
      filewrapper.append(showfileboxElem);
      crossElem.addEventListener("click", () => {
        filewrapper.removeChild(showfileboxElem);
      });
    };
  });
  // Javascript codes ends
    return (
      <div>
        <button
          type="button"
          className="btn__attach"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => console.log("Button clicked")}
        >
          <FaPaperclip />
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Upload Files
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  action="http://127.0.0.1:8000/api/upload-files"
                  method="post"
                  encType="multipart/form-data"
                >
                  <input
                    type="file"
                    className="btn"
                    id="file"
                    name="files[]"
                    multiple
                  />
                  <input type="hidden" name="user" value="admin" />
                  <input type="submit" className="btn btn-primary" />
                </form>
              </div>
              <div className="modal-body" id="filewrapper">
                <h3 className="uploaded">Uploaded Files</h3>
                {/* <div className="showfilebox">
                  <div className="left">
                    <span className="filetype">Pdf</span>
                    <h3>sahara.pdf</h3>
                  </div>
                  <div className="right">
                    <span>&#215</span>
                  </div>
                </div> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ModalAttach;
