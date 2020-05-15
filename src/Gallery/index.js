import UserGrid from "../Profile/UserGrid";
import { Image, LinkGrid, PhotoGrid, TabLink } from "../GlobalStyles";
import { Posts } from "../Posts";
import React from "react";

import { Link, useLocation } from "react-router-dom";

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

/**
 * photo gallery
 * @returns {*}
 * @constructor
 */
export function Gallery() {
  let location = useLocation();
  return (
    <div>
      <UserGrid />
      <LinkGrid>
        {["square", "cascade"].map((value) => (
          <TabLink>{value}</TabLink>
        ))}
      </LinkGrid>
      <PhotoGrid>
        {Posts.map((i) => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location },
            }}
          >
            <Image index={i.id} />
            {/*<p>{i.title}</p>*/}
          </Link>
        ))}
      </PhotoGrid>
    </div>
  );
}
