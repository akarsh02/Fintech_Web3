import { View, StyleSheet, useWindowDimensions,Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={{ width:"100%", height:"100%", position:"absolute", overflow:"hidden" }}
    
        />
      )}
      <View style={{marginTop:80,padding:20}}>
       <Text style={styles.header}>Ready to change the way you mney?</Text>
      </View>
      <View style={styles.buttons}>
        <Link href ={'/login'} style={[defaultStyles.pillButton,{flex:1,backgroundColor:Colors.dark}]} asChild>
          <TouchableOpacity>
             <Text style={{color:"white",fontSize:22,fontWeight:500}}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link href ={'/signup'} style={[defaultStyles.pillButton,{flex:1,backgroundColor:'white'}]} asChild>
          <TouchableOpacity>
             <Text style={{fontSize:22,fontWeight:500}}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  'video-contianer':{
    maxWidth:"100%",
    maxHeight:"100%"
  },
  header:{
    fontSize: 40,
    fontWeight: '700',
    textTransform: "uppercase",
    color:"white"
  },
  buttons:{
    flexDirection:"row",
    justifyContent:"center",
    padding:20
  }
});

export default Page;
