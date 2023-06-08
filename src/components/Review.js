import {
  Box,
  Heading,
  VStack,
  Text,
  FormControl,
  CheckIcon,
  Select,
  TextArea,
} from "native-base";
import React, { useState } from "react";
import Colors from "../../color";
import Rating from "./Rating";
import Message from "../components/Notifications/Message";
import ButtonProp from "./ButtonProp";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={20} mb={2}>
        Reviews
      </Heading>
     
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={20} color={Colors.black}>
          Çağrı Yılmaz
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={15}>
          Jun 4 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={15}
          children="Great Product! Just Delivered"
        />
      </Box>
    
    </Box>
  );
};

export default Review;
