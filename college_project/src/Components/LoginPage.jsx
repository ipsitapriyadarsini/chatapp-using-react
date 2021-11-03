import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const LoginPage = () => {
  return (
    <>
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          USER LOGIN
        </h1>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form inline>
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" hidden>
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder=" Enter Password"
                  type="password"
                />
              </FormGroup>
              <Button color="success">Click Me</Button>
            </Form>
            If you Have not registered then please register first Sign UP
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
