import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaList } from "react-icons/fa6";
import "./SideBar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaBorderAll } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaWhmcs } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { BiQuestionMark } from "react-icons/bi";

const SideBar = () => {
  return (
    <>
      <Container>
        <div className="p-5">
          <Row>
            <Col>
              <Navbar className="bg-body-tertiary">
                <NavLink to="/" className="nav">
                  {" "}
                  <FaBorderAll className="mx-3 mt-1" />
                  Dashboard
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Navbar className="bg-body-tertiary">
                <NavLink to="/labTest" className="nav">
                  {" "}
                  <FaCalendarCheck className="mx-3 mt-1" />
                  LabTest
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              {" "}
              <Navbar className="bg-body-tertiary">
                <NavLink to="/appoibtMent" className="nav">
                  {" "}
                  <FaAddressCard className="mx-3 mt-1" />
                  AppointMent
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              {" "}
              <Navbar className="bg-body-tertiary">
                <NavLink to="/medicine" className="nav">
                  {" "}
                  <FaBriefcaseMedical className="mx-3 mt-1" />
                  Medicine Order
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Navbar className="bg-body-tertiary">
                <NavLink to="/message" className="nav">
                  {" "}
                  <FaEnvelope className="mx-3 mt-1" />
                  Message
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              {" "}
              <Navbar className="bg-body-tertiary">
                <NavLink to="/payment" className="nav">
                  {" "}
                  <FaWallet className="mx-3 mt-1" />
                  Payment
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Navbar className="bg-body-tertiary">
                <NavLink to="/setting" className="nav">
                  {" "}
                  <FaWhmcs className="mx-3 mt-1" />
                  Setting
                </NavLink>
              </Navbar>
            </Col>
          </Row>
          <br />
          <Row className="position-relative">
            <Col>
              {" "}
              <Navbar className="bg-body-tertiary">
                <NavLink to="/help" className="nav">
                  {" "}
                  <BiQuestionMark className="mx-3 mt-1" />
                  Help
                </NavLink>
              </Navbar>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SideBar;
