import React from "react";
import team1 from "../../team/FB_IMG_1636560542387.jpg";
import team2 from "../../team/FB_IMG_1664769684428.jpg";
import team3 from "../../team/FB_IMG_1664784128908.jpg";
import team4 from "../../team/FB_IMG_1664975532254.jpg";
import team5 from "../../team/FB_IMG_1664975638595.jpg";
import team6 from "../../team/FB_IMG_1667111244409.jpg";
import team7 from "../../team/FB_IMG_1667111259743.jpg";
import team8 from "../../team/FB_IMG_1667111460522.jpg";
import team9 from "../../team/FB_IMG_1667111507667.jpg";
import team10 from "../../team/FB_IMG_1667581496732.jpg";
import team11 from "../../team/FB_IMG_1667640146215.jpg";
import team12 from "../../team/FB_IMG_1667733509336.jpg";
import team13 from "../../team/FB_IMG_1667765418032.jpg";
import team14 from "../../team/FB_IMG_1668216363806.jpg";
import team15 from "../../team/FB_IMG_1668216580003.jpg";
import team16 from "../../team/FB_IMG_1668220499377.jpg";
import team17 from "../../team/FB_IMG_1668221284848.jpg";
import team18 from "../../team/FB_IMG_1668226334689.jpg";
import team19 from "../../team/FB_IMG_1668226713236.jpg";
import team20 from "../../team/FB_IMG_1668226728924.jpg";
import team21 from "../../team/FB_IMG_1668259139535.jpg";
import team22 from "../../team/IMG-20220619-WA0049.jpg";
import team23 from "../../team/IMG-20220619-WA0055.jpg";
import team24 from "../../team/IMG-20220914-WA0023.jpg";
import team25 from "../../team/IMG-20220914-WA0054.jpg";
import team26 from "../../team/IMG-20220914-WA0055.jpg";
import team27 from "../../team/IMG-20220914-WA0056.jpg";
import team28 from "../../team/IMG-20220915-WA0037.jpg";
import team29 from "../../team/IMG-20220915-WA0038.jpg";
import team30 from "../../team/IMG-20220915-WA0039.jpg";
import team31 from "../../team/IMG-20221103-WA0014.jpg";
import team32 from "../../team/IMG-20221103-WA0025.jpg";
import team33 from "../../team/IMG-20221103-WA0059.jpg";
import team34 from "../../team/IMG-20221103-WA0061.jpg";
import team35 from "../../team/IMG-20221103-WA0062.jpg";
import team36 from "../../team/IMG-20221104-WA0059.jpg";
import team37 from "../../team/IMG-20221104-WA0067.jpg";
import team38 from "../../team/IMG-20221111-WA0105.jpg";
import team39 from "../../team/IMG-20221111-WA0133.jpg";
import team40 from "../../team/IMG-20221112-WA0007.jpg";
import team41 from "../../team/IMG-20221112-WA0008.jpg";
import team42 from "../../team/IMG-20221112-WA0033.jpg";
import team43 from "../../team/IMG-20221112-WA0034.jpg";
import team44 from "../../team/IMG-20221112-WA0035.jpg";
import team45 from "../../team/IMG-20221112-WA0036.jpg";
import team46 from "../../team/IMG-20221112-WA0037.jpg";
import team47 from "../../team/IMG-20221112-WA0039.jpg";
import team48 from "../../team/IMG-20221112-WA0040.jpg";
import team49 from "../../team/IMG-20221112-WA0041.jpg";
import team50 from "../../team/IMG-20221112-WA0042.jpg";
import team51 from "../../team/IMG-20221112-WA0043.jpg";
import team52 from "../../team/IMG-20221112-WA0045.jpg";
import team53 from "../../team/IMG-20221112-WA0046.jpg";
import team54 from "../../team/IMG-20221112-WA0048.jpg";
import team55 from "../../team/Screenshot_20221104_201336.jpg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const TeamCards = () => {
  const team = [
    { img: team1, name: "John Doe 1" },
    { img: team2, name: "John Doe 2" },
    { img: team3, name: "John Doe 3" },
    { img: team4, name: "John Doe 4" },
    { img: team5, name: "John Doe 5" },
    { img: team6, name: "John Doe 6" },
    { img: team7, name: "John Doe 7" },
    { img: team8, name: "John Doe 8" },
    { img: team9, name: "John Doe 9" },
    { img: team10, name: "John Doe 10" },
    { img: team11, name: "John Doe 11" },
    { img: team12, name: "John Doe 12" },
    { img: team13, name: "John Doe 13" },
    { img: team14, name: "John Doe 14" },
    { img: team15, name: "John Doe 15" },
    { img: team16, name: "John Doe 16" },
    { img: team17, name: "John Doe 17" },
    { img: team18, name: "John Doe 18" },
    { img: team19, name: "John Doe 19" },
    { img: team20, name: "John Doe 20" },
    { img: team21, name: "John Doe 21" },
    { img: team22, name: "John Doe 22" },
    { img: team23, name: "John Doe 23" },
    { img: team24, name: "John Doe 24" },
    { img: team25, name: "John Doe 25" },
    { img: team26, name: "John Doe 26" },
    { img: team27, name: "John Doe 27" },
    { img: team28, name: "John Doe 28" },
    { img: team29, name: "John Doe 29" },
    { img: team30, name: "John Doe 30" },
    { img: team31, name: "John Doe 31" },
    { img: team32, name: "John Doe 32" },
    { img: team33, name: "John Doe 33" },
    { img: team34, name: "John Doe 34" },
    { img: team35, name: "John Doe 35" },
    { img: team36, name: "John Doe 36" },
    { img: team37, name: "John Doe 37" },
    { img: team38, name: "John Doe 38" },
    { img: team39, name: "John Doe 39" },
    { img: team40, name: "John Doe 40" },
    { img: team41, name: "John Doe 41" },
    { img: team42, name: "John Doe 42" },
    { img: team43, name: "John Doe 43" },
    { img: team44, name: "John Doe 44" },
    { img: team45, name: "John Doe 45" },
    { img: team46, name: "John Doe 46" },
    { img: team47, name: "John Doe 47" },
    { img: team48, name: "John Doe 48" },
    { img: team49, name: "John Doe 49" },
    { img: team50, name: "John Doe 50" },
    { img: team51, name: "John Doe 51" },
    { img: team52, name: "John Doe 52" },
    { img: team53, name: "John Doe 53" },
    { img: team54, name: "John Doe 54" },
    { img: team55, name: "John Doe 55" },
  ];

  return (
    <div className="my-5">
      <Container>
      <h1 className="mb-4">Our Team</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
          {team.map((elem, ind) => (
            <Col>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src={elem.img}
                  className="object-fit-cover"
                  height={300}
                />
                <Card.Body className="text-center">
                  <Card.Title>{elem.name}</Card.Title>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamCards;
