import React, { useState } from "react";

import { Form, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";

function CallUsForm({ title, fields, field_groups, submit_button }) {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const mainFields = fields.filter((el) => el.group === "main");
  const additionalFields = fields.filter((el) => el.group === "additional");
  const agreement = fields[fields.length - 1];

  const handleChange = (date) => {
    setDate(date);
  };

  function submitHandle(e) {
    e.preventDefault();

    const data = {
      name,
      phone,
      email,
      date,
      comment
    };

    console.log(data);

    setName("");
    setPhone("");
    setEmail("");
    setDate("");
    setComment("");
    setIsAgreed(false);
  }

  return (
    <div className="call-us">
      <h2 className="content__title">{title}</h2>

      <Form onSubmit={submitHandle}>
        <Form.Row>
          <Col lg={8} md={12}>
            <Form.Row>
              <Form.Group
                controlId="formGridName"
                className="col-xs-12 col-sm-6"
              >
                <Form.Label>{mainFields[0].label}</Form.Label>
                <Form.Control
                  className="form__field"
                  value={name}
                  type={mainFields[0].type}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>{mainFields[1].label}</Form.Label>
                <Form.Control
                  className="form__field"
                  value={phone}
                  type={mainFields[1].type}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group
                controlId="formGridEmail"
                className="col-xs-12 col-sm-6"
              >
                <Form.Label>{mainFields[2].label}</Form.Label>
                <Form.Control
                  className="form__field"
                  value={email}
                  type={mainFields[2].type}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="date-label">
                  {mainFields[3].label}
                </Form.Label>
                <DatePicker
                  locale={ru}
                  className="form__field form-control"
                  selected={date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form.Row>
          </Col>

          <Col lg={4} md={12}>
            <Form.Group controlId="TextArea">
              <Form.Label>
                {additionalFields[0].label} (не обязательно)
              </Form.Label>
              <Form.Control
                className="form__field "
                as={additionalFields[0].type}
                rows="5"
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Form.Row>

        <div>
          <label className="call-us__agreement-label" htmlFor={agreement.name}>
            <input
              type="checkbox"
              checked={isAgreed}
              id={agreement.name}
              name={agreement.name}
              required
              onChange={() => setIsAgreed(!isAgreed)}
            />
            <span
              className="span"
              dangerouslySetInnerHTML={{ __html: agreement.label }}
            ></span>
          </label>
        </div>

        <button className="btn btn-submit" type="submit">
          {submit_button.text}
        </button>
      </Form>
    </div>
  );
}

export default CallUsForm;
