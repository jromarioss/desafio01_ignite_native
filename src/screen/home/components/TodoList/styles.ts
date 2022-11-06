import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 327,
    marginTop: 20
  },
  list: {
    width: '100%',
    height: 64,
    backgroundColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  checkBox: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginLeft: 12,
  },
  ListText: {
    color: '#f2f2f2',
    fontSize: 14,
    marginRight: 8,
    marginLeft: 8,
    flex: 1,
    textAlign: 'center',
  },
  ListTextlineThrough: {
    color: '#808080',
    fontSize: 14,
    marginRight: 8,
    marginLeft: 8,
    flex: 1,
    textAlign: 'center',
    textDecorationLine: "line-through",
  },
  empty: {
    marginTop: 20,
    paddingTop: 56,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#808080',
    fontSize: 14,

  },
  emptyTextBold: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold',
  },
});