import { View, Text, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { useState } from 'react'
import Background from './Background'
import Field from './Field';
import Btn from './Btn';
import { button1 } from './common/button';

export default function Signup(props) {
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
})

const [errormsg, setErrormsg] = useState(null);

const Sendtobackend = () => {
   //console.log(fdata);

   if (fdata.name == '' ||
   fdata.email == '' ||
   fdata.phone == '' ||
   fdata.password == '' ||
   fdata.cpassword == '') 
    {
        setErrormsg('All fields are required');
        return;
    }
    else 
    {
      if (fdata.password != fdata.cpassword) 
      {
          setErrormsg('Password and Confirm Password must be same');
          return;
      }
      else 
      {
          fetch('http://192.168.1.5:5000/verify', 
          {
              method: 'POST',
              headers: 
              {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(fdata)
          })
              .then(res => res.json()).then
              (
                  data => 
                  {
                      //console.log(data);
                      if (data.error === 'Invalid Credentials')
                      {
                          // alert('Invalid Credentials')
                          setErrormsg('Email Already exists')
                      }
                      else if (data.message === "Verification Code Sent to your Email") {
                        // console.log(data.udata);
                        alert(data.message);
                        props.navigation.navigate('verification', { userdata: data.udata })
                    }
                  }
              )
      }
    }

}
  return (
    <Background>
      <View style={{width: 350, alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginTop: 150}}>
        <Text style={{color: "white", fontSize: 25}}>Sign Up</Text>
        <View style={{backgroundColor: 'white', height: 600, width: 365, borderRadius:25, paddingTop: 18, marginVertical: 10, alignItems: 'center'}}>
          <Text style={{color: 'rgb(42, 99, 137)', fontSize: 24}}>Register now</Text>
          {
                        errormsg ? <Text style={{color: 'red', fontSize: 15}}>{errormsg}</Text> : null
          }
          <Field placeholder="Full name" keyboardType={'default'} onPressIn={() => setErrormsg(null)} onChangeText={(text) => setFdata({ ...fdata, name: text })}/>
          <Field placeholder="Email address" keyboardType={'email-address'} onPressIn={() => setErrormsg(null)} onChangeText={(text) => setFdata({ ...fdata, email: text })}/>
          <Field placeholder="Phone number" keyboardType={'number-pad'} onPressIn={() => setErrormsg(null)} onChangeText={(text) => setFdata({ ...fdata, phone: text })}/>
          <Field placeholder="Password" secureTextEntry={true} onPressIn={() => setErrormsg(null)} onChangeText={(text) => setFdata({ ...fdata, password: text })}/>
          <Field placeholder="Confirm Password" secureTextEntry={true} onPressIn={() => setErrormsg(null)} onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}/>
          {
          /*<Btn textColor='white' bgColor="rgb(42, 99, 137)" btnLabel="Register" Press={() => alert("Account Created")} onPress={() => {
                            Sendtobackend();
                        }}/>
                      */
            }            
            <TouchableOpacity
                        onPress={() => {
                            Sendtobackend();
                        }}
                    >
                        <Text style={button1}

                        >Register</Text>
                    </TouchableOpacity>
          <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: "rgb(42, 99, 137)", fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </Background>
  )
}