import { Box, Heading, ScrollView, View } from "native-base";
import React from "react";
import Colors from "../../color";
import OrderInfo from "../components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../components/OrderItem";
import OrderModel from "../components/OrderModel";

const OrderScreen = () => {
  return (
    <Box safeArea bg={Colors.subGreen} flex={1} pt={6}>
     

      {/* ORDER ITEM */}

      <Box px={6} flex={1} pb={3}>
        <Heading bold isTruncated fontSize={20} my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* TOTAL  */}
        <OrderModel />
      </Box>
    </Box>
  );
};

export default OrderScreen;
