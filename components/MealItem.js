import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => 
          pressed ? styles.buttonPressed : null
        }
        android_ripple={{ color: '#cccccc' }}
        // onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}'</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderRadius: 8,
    // borderColor: 'black',
    // borderWidth: 2,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'white',
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 5,
  },
  detailItem: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
