import React, { useState } from "react";
import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ContactCard = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Pass the updated values to the state setters
    axios.post("http://localhost:3001/support/", {
        name: name,
        surname: surname,
        email: email,
        message: message,
      })
      .then(result => {
        console.log(res);
        // Optionally, reset the form fields after successful submission
        setName(" ");
        setSurname("");
        setEmail("");
        setMessage("");
        toast.success('Message sent')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card p="6" borderRadius="1rem" bg="black">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm" color="white">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack>
          <FormControl>
            <FormLabel color="white">Name</FormLabel>
            <Input color={"white"}
              placeholder="Enter Your Name.."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="white">Surname</FormLabel>
            <Input color={"white"}
              placeholder="Enter Your Surname.."
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </FormControl>
        </HStack>
        <FormControl color="white">
          <FormLabel color="white">Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter Your Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl color="white">
          <FormLabel color="white">Message</FormLabel>
          <Textarea
            placeholder="Enter Your Message.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xs" color="white">
            I agree with{" "}
            <Box as="span" color="purple.500">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm" onClick={handleSubmit}>
            Send a Message
          </Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
