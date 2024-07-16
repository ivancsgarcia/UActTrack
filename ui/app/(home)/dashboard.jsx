import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Home = () => {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.email}</Text>
      <Text>{item.password}</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

export default Home