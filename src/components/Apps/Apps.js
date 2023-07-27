import React from "react";
import "./Apps.scss";
import everyday from "../../assets/apps/sm-logo.png";
import anbu from "../../assets/apps/anbu-logo.png";
import github from "../../assets/apps/github-logo.png";
import linkedin from "../../assets/apps/linkedin-logo.png";
import mallow from "../../assets/apps/mallow-logo.png";
// import waseem from "../../assets/apps/waseem-logo.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Apps() {
  const showAlert = () => {
    alert(
      "This site is was my capstone project & is currently under construction. Please check back soon for updates. Thanks for visiting!"
    );
  };

  return (
    <DragDropContext>
      <div className="apps">
        {/* <a
                                    className="apps__link"
                                    target="_blank"
                                    href="https://www.waseemkhalo.com"
                                    rel="noopener noreferrer"
                                  >
                                    <div className="apps__container">
                                      <img className="apps__logo" src={waseem} alt="everyday logo" />
                                    </div>
                                    <h4 className="apps__header">My Blog</h4>
                                          </a> */}

        <Droppable droppableId="apps" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="apps__drag"
            >
              <Draggable draggableId="everyday" index={0}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <a
                      className="apps__link"
                      target="_blank"
                      href="https://www.everydaytodo.com"
                      rel="noopener noreferrer"
                      
                    >
                      <div className="apps__container">
                        <img
                          className="apps__logo"
                          src={everyday}
                          alt="everyday logo"
                        />
                      </div>
                      <h4 className="apps__header">Everyday</h4>
                    </a>
                  </div>
                )}
              </Draggable>

              <Draggable draggableId="anbu" index={1}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <a
                      className="apps__link"
                      target="_blank"
                      href="https://www.anbu.co"
                      rel="noopener noreferrer"
                    >
                      <div className="apps__container apps__container--anbu ">
                        <img
                          className="apps__logo apps__anbu"
                          src={anbu}
                          alt="anbu logo"
                        />
                      </div>
                      <h4 className="apps__header">Anbu</h4>
                    </a>
                  </div>
                )}
              </Draggable>

              <Draggable draggableId="mallow" index={2}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <a
                      className="apps__link"
                      href="https://www.waseemkhalo.com"
                      rel="noopener noreferrer"
                      onClick={showAlert}
                    >
                      <div className="apps__container apps__container--mallow">
                        <img
                          className="apps__logo apps__mallow"
                          src={mallow}
                          alt="anbu logo"
                        />
                      </div>
                      <h4 className="apps__header">Mallow</h4>
                    </a>
                  </div>
                )}
              </Draggable>

              <Draggable draggableId="github" index={3}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <a
                      className="apps__link"
                      target="_blank"
                      href="https://www.github.com/waseemkhalo"
                      rel="noopener noreferrer"
                    >
                      <div className="apps__container">
                        <img
                          className="apps__logo"
                          src={github}
                          alt="anbu logo"
                        />
                      </div>
                      <h4 className="apps__header">My Github</h4>
                    </a>
                  </div>
                )}
              </Draggable>

              <Draggable draggableId="linkedin" index={4}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <a
                      className="apps__link"
                      target="_blank"
                      href="https://www.linkedin.com/in/waseemkhalo"
                      rel="noopener noreferrer"
                    >
                      <div className="apps__container">
                        <img
                          className="apps__logo"
                          src={linkedin}
                          alt="anbu logo"
                        />
                      </div>
                      <h4 className="apps__header">My LinkedIn</h4>
                    </a>
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default Apps;
