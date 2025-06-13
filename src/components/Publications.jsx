import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { publicationData, resume } from "../config";

// #region component
const Publications = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name="Publications" id="publications">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size="h2" text="📚 Publications" />
          </Container>

          <Row className="mt-4 justify-content-center">
            <Col md={8}>
              <ul className="text-start" style={{ listStyleType: "none", paddingLeft: 0 }}>
                {publicationData.map((pub) => (
                  <li key={pub.id} style={{ marginBottom: "20px" }}>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "16px",
                        textDecoration: "none",
                        color: theme === "light" ? "#1a0dab" : "#66ccff"
                      }}
                    >
                      {pub.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>

          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Publications;
