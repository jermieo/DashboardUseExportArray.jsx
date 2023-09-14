import React from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaSistrix } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { FaBell } from "react-icons/fa6";
import { ArrayData } from "./ArrayData";

const Dashboard = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <InputGroup className="mb-5">
              <InputGroup.Text id="basic-addon1">
                <FaSistrix />
              </InputGroup.Text>
              <Form.Control placeholder="Search" />
            </InputGroup>
          </Col>
          <Col></Col>
          <Col>
            <FaBell />
          </Col>
        </Row>
        <div>
          <h2>Sales information</h2>
        </div>
        <br />
        <div>
          <Row>
            <Col>
              <span className="fw-bold">Customer</span>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </Col>
            <Col>
              <span className="fw-bold">invoiceID</span>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </Col>
            <Col>
              <span className="fw-bold">Start Date</span>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </Col>
            <Col>
              <span className="fw-bold">End Data</span>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </th>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              {ArrayData.map((value) => {
                return (
                  <>
                    <tr>
                      <td>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      </td>
                      <td>{value.invoice}</td>
                      <td>{value.date}</td>
                      <td>{value.customer}</td>
                      <td>{value.payableAmt}</td>
                      <td>{value.paidAmt}</td>
                      <td>{value.due}</td>
                    </tr>
                  </>
                );
              })}
              {/* <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
