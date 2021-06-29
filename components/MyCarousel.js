import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import { titleContext } from "../pages/index";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useContext } from "react";
import sanityClient from "../sanityClient";

export default function MyCarousel() {
  const posts = useContext(titleContext);
  // console.log(posts);

  // IMAGE URL BUILDER
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  // -- CAROUSEL -- //
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {posts.map((post, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={urlFor(post.mainImage).url()}
              alt="First slide"
              width={600}
              height={400}
            />
            <Carousel.Caption>
              <h3>{post.title}</h3>
              <BlockContent blocks={post.body} />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
