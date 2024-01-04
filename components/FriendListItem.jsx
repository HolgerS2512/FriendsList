import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const FriendListItem = ({ friend, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image 
        source={{ uri: friend.picture.thumbnail }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{friend.name.first} {friend.name.last}</Text>
        <Text style={styles.email}>{friend.name.email}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    gap: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 20,
  },
  email: {
    fontSize: 16,
    fontWeight: '100',
  },
});

export default FriendListItem;