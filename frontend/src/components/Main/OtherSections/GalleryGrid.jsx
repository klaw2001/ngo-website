import React from "react";
import gall1 from "../../gallery/gallery-1.jpg";
import gall3 from "../../gallery/gallery-3.jpg";
import gall4 from "../../gallery/gallery-4.jpg";
import gall5 from "../../gallery/gallery-5.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
const GalleryGrid = () => {
  const gallery = [
    { img: gall1 },
    { img: gall3 },
    { img: gall4 },
    { img: gall5 },
  ];
  return (
    <div className="my-5">
      <Container>
        <h1 className="mb-3">Gallery</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {gallery.map((elem, ind) => (
            <Col key={ind}>
              <Card>
                <Card.Img
                  src={elem.img}
                  alt="image gallery 1"
                  className=" object-fit-cover"
                  height={300}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryGrid;
