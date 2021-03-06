import { StyleSheet } from 'react-native';

export const menustyles = StyleSheet.create({
  menuIcon: {
    backgroundColor: 'transparent',
    right: 15,
    position: 'absolute',
    top: 25,
  },
  scrollViewStyles: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  userBox: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 4
  },
  avatarBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#44ecba',
    borderRadius: 50,
    marginTop: 20,
    overflow: 'hidden'
  },
  avatar: {
    borderRadius: 30,
    height: 95,
    width: 95,
  },
  editBox: {
    alignItems: 'center',
    backgroundColor: '#44ecba',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
    bottom: 15,
    height: 28,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 2,
    left: 32,
    width: 28,
  },
  horizontalBar: {
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 5,
    width: 160
  },
  optionText: {
    color: '#fff',
    fontFamily: 'Raleway',
    fontSize: 20,
    fontWeight: '300',
    paddingTop: 5,
    marginTop: -5
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
    marginBottom: 25,
    overflow: 'hidden',
    paddingRight: 5
  },
  signoutRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 140,
    overflow: 'hidden',
    paddingRight: 5
  }
});
