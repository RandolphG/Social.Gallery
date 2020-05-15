import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

import { Gallery } from "./Gallery";
import Modal from "./Modal/Modal";
import { Image, PhotoGrid } from "./GlobalStyles";
import { Posts } from "./Posts";

/**
 *
 * @returns {*}
 * @constructor
 */
export default function ModalGallery() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

/**
 * This piece of state is set when one of the
 * gallery links is clicked. The `background` state
 * is the location that we were at when one of
 * the gallery links was clicked. If it's there,
 * use it as the location for the <Switch> so
 * we show the gallery in the background, behind
 * the modal.
 * @returns {*}
 * @constructor
 */
function ModalSwitch() {
  let location = useLocation();

  let background = location.state && location.state.background;
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route
          path="/gallery"
          children={({ match, location }) => <Gallery />}
        />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>
      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

/**
 *
 * @returns {*}
 * @constructor
 */
function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
    </div>
  );
}

/**
 *
 * @returns {*}
 * @constructor
 */
function ImageView() {
  let { id } = useParams();
  let image = Posts[parseInt(id, 10) - 1];
  if (!image) return <div>Image not found</div>;
  return (
    <div>
      <h1>{image.title}</h1>
      <Image index={image.id} />
    </div>
  );
}
