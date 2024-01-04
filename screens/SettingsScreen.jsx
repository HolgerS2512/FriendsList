import { SectionList, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'Version', data: [{ name: '1.0' }]},
          {title: 'Impressum', data: [{ name: 'Firma XYZ' }, { name: `© ${new Date().getFullYear()}` }]},
        ]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
    paddingTop: 50,
	},
  section: {
    backgroundColor: 'whitesmoke',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    fontSize: 18,
    padding: 5,
    marginVertical: 10,
  },
});

export default SettingsScreen;