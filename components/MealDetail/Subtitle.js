import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};
export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 8,
    marginHorizontal: 24,
  },
  subtitle: {
    color: 'darkgreen',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',
  },
});
