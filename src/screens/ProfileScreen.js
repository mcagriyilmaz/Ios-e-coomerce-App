import React from "react";
import { Center, Heading, Image, Text } from "native-base";
import Colors from "../../color";
import Tabs from "../components/Profile/Tab";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        
        <Heading bold isTruncated fontSize={15} my={2} color={Colors.white}>
          Çağrı Yılmaz
        </Heading>
       
      </Center>

      {/* TABS */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
