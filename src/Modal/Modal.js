import {
  Image,
  InfoGrid,
  MiniUserGrid,
  ModalStyled,
  OverFlowHidden,
  PostGrid,
  ProfileImage,
} from "../GlobalStyles";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory, useParams } from "react-router-dom";
import { Posts } from "../Posts";
/**
 * Modal
 * @returns {null|*}
 * @constructor
 */
export default function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = Posts[parseInt(id, 10) - 1];

  if (!image) return null;

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "5000px",
        background: "rgba(0, 0, 0, 0.65)",
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          onClick={back}
        >
          <ModalStyled top={window.scrollY + window.innerHeight / 2 - 50}>
            <OverFlowHidden />
            <PostGrid>
              <Image index={image.id} inModal />
              <InfoGrid>
                <MiniUserGrid>
                  <ProfileImage mini />
                  <h2>poplogics</h2>
                </MiniUserGrid>
                <h1>{image.title}</h1>
                <p>comments</p>
                <p>45 likes</p>
                <button onClick={(e) => back(e)}>close</button>
              </InfoGrid>
            </PostGrid>
          </ModalStyled>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
