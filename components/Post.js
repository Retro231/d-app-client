import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";

const Post = ({ imgUrl, caption }) => {
  return (
    <View style={tw`p-3 bg-gray-300 my-2 mx-3`}>
      <Image style={{ height: 180 }} source={{ uri: imgUrl }} />
      <Text style={tw`mt-2 text-base`}>{caption}</Text>
      <Text style={tw`mt-2 text-[#c705fc] font-bold`}>See More</Text>
    </View>
  );
};

export default Post;
