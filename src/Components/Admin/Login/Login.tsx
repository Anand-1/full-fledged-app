import React, { useState } from "react";
import { Button, Heading } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Box,
  Stack,
  ButtonGroup,
  Divider,
  Input,
} from "@chakra-ui/react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginAction = () => {
    console.log("Login clicked !");
    if (username === "anand" && password === "raj") {
      console.log(username, password);
      navigate("/users");
    } else if (username === "admin" && password === "admin") {
      navigate("/admin");
    }
  };
  return (
    <>
      <div className="main-content">
        <Card className="add-margin-top">
          <CardHeader>
            <Heading size="md">Welcome to Login Page </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase" marginBlockEnd={2}>
                  User Name :
                </Heading>
                <Input
                  placeholder="Enter user name !"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" marginBlockEnd={2}>
                  Password :
                </Heading>
                <Input
                  placeholder=" Enter password here !"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => loginAction()}
              >
                Login
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
      <div className="password-generator-section">
        <PasswordGenerator />
      </div>
    </>
  );
};

export default Login;
