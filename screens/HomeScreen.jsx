import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import FriendListItem from '../components/FriendListItem';
import { useState, useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api?results=20');
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      alert('Fehler beim Laden');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size='large' color='grey' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={data} 
        renderItem={({ item }) => (
            <FriendListItem
              onPress={() => navigation.navigate('Friend', { friend: item })}
              friend={item}
            />
        )}
        keyExtractor={(item) => item.email}
        refreshing={isLoading}
        onRefresh={fetchData}
        ItemSeparatorComponent={<View style={styles.listSeparator} />}
        ListEmptyComponent={<Text style={styles.listEmpty}>Keine Daten geladen</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
	container: {
		flex: 1,
		backgroundColor: '#fff',
    paddingTop: 50,
	},
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
  },
  listEmpty: {
    fontSize: 26,
    paddingTop: 100,
    textAlign: 'center',
  },
});

export default HomeScreen;