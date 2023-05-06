import React, {useState} from 'react';
import {View,  StyleSheet, Text, FlatList, Alert} from 'react-native';
import Header from './components-1/Header';
import ListItem from './components-1/ListItem'
import AddItem from './components-1/AddItem';

const App = () =>{
  const [items, setItems] = useState([
    {id: 111, text: 'Milk'},
    {id: 12, text: 'Eggs'},
    {id: 13, text: 'Bread'},
    {id: 14, text: 'Juice'},
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id !=id);
    });
  };

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', {text: "ok"})
    }else{
      setItems(prevItems =>{
        return [{id: 20, text}, ...prevItems];
      });
    }
  };

return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) =>
          <ListItem item = {item} deleteItem={deleteItem} />

      }/>

    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
  },
})

export default App;

// import HomePage from './components/HomePage';
// import MyStack from './components/MyStack';

// export default function App() {
//   return (
//     <MyStack/>
//   );
// }
