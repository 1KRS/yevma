import { StyleSheet, Text, View } from 'react-native';

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    padding: 4,
    marginVertical: 1,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
