import { useWindowDimensions,  ScrollView, Image, StyleSheet, Text } from 'react-native';

const FriendScreen = ({ navigation, route }) => {
	const { width } = useWindowDimensions();
	const imageWidth = width * .8;
	const { friend } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
			<Image 
        source={{ uri: friend.picture.large }}
        style={{ width: imageWidth, height: imageWidth }}
      />
      <Text>{friend.name.first} {friend.name.last}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollView: {
		backgroundColor: 'white',
	},
});

export default FriendScreen;