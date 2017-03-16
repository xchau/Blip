import React, { Component } from 'react';
import { AlertIOS, AsyncStorage, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { authenticateUser } from '../state/actions/auth';
import { styles } from '../styles/login';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Kohana } from 'react-native-textinput-effects';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.navigate = this.navigate.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  navigate(route) {
    this.props.navigator.push({name: route});
  }

  async storeJWT(item, jwt) {
    try {
      await AsyncStorage.setItem(item, jwt);
    }
    catch (err) {
      console.error(`AsyncStorage Error: ${err.message}`);
    }
  }

  async redirectIfAuth() {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      this.navigate('tripslist');
    }
  }

  handleLoginSubmit() {
    if (!this.state.email.trim()) {
      AlertIOS.alert('Please fill out your email.');
    }
    else if (!this.state.password.trim()) {
      AlertIOS.alert('Please fill out your password.');
    }
    else if (!this.state.email.trim() && !this.state.password.trim()) {
      AlertIOS.alert('Please sign in with your email and password.');
    }
    else {
      this.props.dispatch(authenticateUser(this.state))
        .then(async (res) => {
          this.storeJWT('token', res.value.data.token);

          if (res.value.data.isTraveling) {
            this.navigate('protected');
          }
          else {
            console.log(this.props);
            // this.navigate('tripslist');
          }
        })
        .catch((err) => {
          AlertIOS.alert(err.response.data.output.payload.message);
        });
    }
  }

  render() {
    console.log(this.props);
    // { this.redirectIfAuth() } // SUPER JANKY
    return <View style={styles.sceneContainer}>
      <View style={styles.heroBox}>
        <Text>Hero Box</Text>
      </View>

      <View style={styles.formBox}>
        <View style={styles.inputRow}>
          <Kohana
            label={'Email'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'email'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            autoCapitalize='none'
            onChangeText={(email) => this.setState({email})}
            style={styles.inputField}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputRow}>
          <Kohana
            secureTextEntry={true}
            label={'Password'}
            labelStyle={styles.inputLabel}
            iconClass={MaterialCommunityIcon}
            iconName={'key-variant'}
            iconColor={'lightcoral'}
            inputStyle={styles.inputStyle}
            autoCapitalize='none'
            onChangeText={(password) => this.setState({password})}
            style={styles.inputField}
            value={this.state.password}
          />
        </View>

        <Button
          onPress={this.handleLoginSubmit}
          containerStyle={styles.submitContainer}
          style={styles.submitContent}
        >
          Sign In
        </Button>

        <Button
          onPress={async ()=> {
            try {
              await AsyncStorage.removeItem('token');
              AlertIOS.alert('Removed token')
            }
            catch (err) {
              console.error(err);
            }
          }}
          containerStyle={styles.submitContainer}
          style={styles.submitContent}
        >
          DELETE TOKEN
        </Button>

        <View style={styles.registrationBox}>
          <Text style={styles.registerPrompt}>
            Not a member?
          </Text>
          <TouchableHighlight
            onPress={() => this.navigate('registration')}
          >
            <Text style={styles.registerLink}>
              Sign up
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  }
};

const mapStateToProps = function(store) {
  return {
    user: store.user
  };
};

export default connect(mapStateToProps)(Login);
