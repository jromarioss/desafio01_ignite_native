import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  inputArea: {
    marginTop: -25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 271,
    height: 54,
    backgroundColor: '#333333',
    borderRadius: 6,
    marginRight: 4,
    paddingLeft: 16,
    color: '#f2f2f2',
  },
  inputButton: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    color: '#fff'
  },
  todoInfo: {
    flexDirection: 'row',
    width: 327,
    marginTop: 32,
    justifyContent: 'space-between',
  },
  todoText: {
    flexDirection: 'row',
  },
  textCreated: {
    color: '#1e6f9f',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8
  },
  textDone: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8
  },
  todoTextNumber: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    color: '#d9d9d9',
    textAlign: 'center',
    borderRadius: 9,        
  }
});