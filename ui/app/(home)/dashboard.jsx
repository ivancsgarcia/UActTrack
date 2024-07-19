import { View, Text, FlatList } from 'react-native'
import React from 'react'
import axios from 'axios'

const Home = () => {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:8081/users')
    .then(res => setData(res.data))
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