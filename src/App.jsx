import Dashboard from "./component/Dashboard";
import NotFound from "./component/NotFound";
import SideBar from "./component/SideBar";
import Labtest from "./component/Labtest";
import Appointment from "./component/Appointment";
import Medicine from "./component/Medicine";
import Message from "./component/Message";
import Payment from "./component/Payment";
import Settings from "./component/Settings";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Help from "./component/Help";

function App() {
  return (
    <>
      {/* <div className="sidebar">
        <SideBar />
      </div> */}
      <Row>
        <Col>
          {" "}
          <SideBar />
        </Col>
      </Row>

      <div style={{ width: "75%" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/labTest" element={<Labtest />} />
          <Route path="/appoibtMent" element={<Appointment />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/message" element={<Message />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
