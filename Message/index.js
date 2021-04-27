import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import styles from './style.js';
import { Color, BasicStyles } from 'common';
import { Dimensions } from 'react-native';
import {connect} from 'react-redux';
class Message extends Component{
  
  constructor(props){
    super(props);
  }

  redirect = (route) => {
    this.props.navigation.navigate(route);
  };

  validate = () => {
    Alert.alert(
      'Message',
      'In order to Create Request, Please Verify your Account.',
      [
        {text: 'Ok', onPress: () => console.log('Ok'), style: 'cancel'}
      ],
      { cancelable: false }
    )
  }

  render () {
    const { theme, user } = this.props.state;
    return (
      <View style={{marginTop: '27%', justifyContent: 'center', alignContent: 'center'}}>
      <View style={{
        ...styles.CardContainer,
        backgroundColor: theme ? theme.primary : Color.primary,
        borderWidth: 1,
        borderColor: theme ? theme.primary : Color.primary
        }}>
          <View style={[styles.description, {
            paddingTop: '5%',
            paddingRight: '30%',
            marginLeft: '3%'
          }]}>
            <Text
              style={{
                ...styles.descriptionText,
                fontSize: BasicStyles.titleText.fontSize,
                color: Color.white
              }}>
              {this.props.message}
            </Text>
          </View>
          <TouchableOpacity
          onPress={() => {user.status == 'NOT_VERIFIED' ? this.validate() : this.redirect('createRequestStack')}}
          style={{
            top: '5%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            borderRadius: 20,
            marginRight: '35%',
            color: Color.primary,
            backgroundColor: Color.white,
            borderColor: theme ? theme.primary : Color.primary,
            borderWidth: 1,
            width: '50%'
          }}
          >
          <Text style={{
            color:theme ? theme.primary : Color.primary,
            fontSize: 11,
            textAlign: 'center'
          }}>Create Request</Text>
          </TouchableOpacity>
          <Image source={require('assets/Partners.png')} style={{
            height: 230,
            width: 230,
            // marginRight: '20%',
            marginLeft: '30%',
            // position: 'absolute',
            marginTop: '-9%'
          }}/>
            
      </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({state: state});

const mapDispatchToProps = (dispatch) => {
  const {actions} = require('@redux');
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);