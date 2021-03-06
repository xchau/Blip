import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadContainer: {
    backgroundColor: '#2a2a2a',
    flex: 1,
  },
  loadHeroBox: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: -100,
  },
  sceneContainer: {
    // borderWidth: 1,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20
  },
  heroBox: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'flex-end'
  },
  logo: {
    backgroundColor: 'transparent',
    height: 120,
    resizeMode: 'contain',
    width: 200
  },
  formBox: {
    flex: 0.7,
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20
  },
  inputField: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    height: 44,
  },
  inputRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
    marginTop: 7,
    marginBottom: 7,
  },
  inputLabel: {
    color: '#555',
    fontFamily: 'Raleway',
    fontWeight: 'normal',
    fontSize: 16,
    marginTop: -4,
    textAlign: 'center',
    width: 226
  },
  inputStyle: {
    color: '#1d2228',
    fontFamily: 'Raleway',
    fontSize: 16,
    marginLeft: -12,
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: '#44ecba',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    marginTop: 12
  },
  submitContent: {
    color: '#fff',
    fontFamily: 'Raleway',
    fontSize: 16,
  },
  registrationBox: {
    marginTop: 120
  },
  registerPrompt: {
    fontFamily: 'Raleway',
    textAlign: 'center',
    marginBottom: 8
  },
  registerLink: {
    color: '#44ecba',
    fontFamily: 'Raleway',
    fontSize: 18,
    textAlign: 'center'
  }
});
