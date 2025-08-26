import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
// import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

enum SignInType{
  phone,Email,Google,Apple
}



const LoginScreen = () => {
  const [countryCode, setCountryCode] = useState('+49');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 80;
  const router = useRouter();
  // const { signUp } = useSignUp();

  const onSignIn = async (SignInType) => {
    if(SignInType.phone){

    }
   
  };
  

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome Back</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your phone number. We will send you a confirmation code there
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignIn}> <Text> Continue </Text>
         </TouchableOpacity>
         <View style={{flexDirection:"row",alignItems:"center",gap:16}}>
         <View style={{flex:1, height:StyleSheet.hairlineWidth, backgroundColor:Colors.gray}}/>
          <Text style={{ color:Colors.gray,fontSize:20}}>Or continue with</Text>
         <View style={{flex:1, height:StyleSheet.hairlineWidth, backgroundColor:Colors.gray}}/>
         </View>
         <TouchableOpacity onPress={() => onSignIn(SignInType.Email)} style={[defaultStyles.pillButton,{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:16,marginTop:20,backgroundColor:'white'}]}>
          <Ionicons name='mail' size={24} color={"#000"}/>
          <Text style={[defaultStyles.buttonText,{color:"#000"}]}>Continue with email</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => onSignIn(SignInType.Google)} style={[defaultStyles.pillButton,{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:16,marginTop:8,backgroundColor:'white'}]}>
          <Ionicons name='logo-google' size={24} color={"#000"}/>
          <Text style={[defaultStyles.buttonText,{color:"#000"}]}>Continue with Google</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={() => onSignIn(SignInType.Email)} style={[defaultStyles.pillButton,{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:16,marginVertical:8,backgroundColor:'white'}]}>
          <Ionicons name='logo-apple' size={24} color={"#000"}/>
          <Text style={[defaultStyles.buttonText,{color:"#000"}]}>Continue with Apple</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default LoginScreen;