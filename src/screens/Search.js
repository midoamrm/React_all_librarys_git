/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line no-unused-vars, prettier/prettier


import React, { useState, useEffect } from 'react';
import { StyleSheet,View,ScrollView, Image,FlatList} from 'react-native';
import { Card, Button, Avatar } from "react-native-paper"
import { SearchBar } from 'react-native-elements';

export default function Search() {
    const [search, setState] = useState(null);
    
    const [filtercar, setfiltercar] = useState(null);
    
     const  updateSearch = (search) => {
        setState({ search });
        const  filtered = data.filter(function (str) { return str.CardTitle.includes(search) });
   
        setfiltercar(filtered)
      };
    //
    const data=[
        { id:1,
          CardTitle: "bmw F30",
          subtitle: "415k Egyption pound ",
          descrpition: "Model::2010  KM::200k  In good condtion ",
          srcimg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2012_BMW_318d_Sport_Automatic_2.0.jpg/280px-2012_BMW_318d_Sport_Automatic_2.0.jpg",
         
        },
        {id:2,
          CardTitle: "Mercedes c180 ",
          subtitle: "400k Egyption pound",
          descrpition: "Model::2010  KM::150k  In good condtion",
          srcimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Cxawm5Js9U8pNyHE0_yw_zLIq_35D8bOjGQHRNSV&s",
        
        },
        {id:3,
          CardTitle: "bmw m30",
          subtitle: "500k Egyption pound",
          descrpition: "Model::2022  KM::10k  In new condtiont",
          srcimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Cxawm5Js9U8pNyHE0_yw_zLIq_35D8bOjGQHRNSV&s",
         
        },
        {id:4,
          CardTitle: "Hond civic",
          subtitle: "800k Egyption pound",
          descrpition: "Model::2022  KM::3k  In new condtiont",
          srcimg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadiH9dCZtrTsDETbHsy3aEQQWN9zHMe3QVA&usqp=CAU",
         
        },
        {id:5,
            CardTitle: "verna",
            subtitle: "150k Egyption pound",
            descrpition: "Model::2016  KM::1500k  In good condtiont",
            srcimg:
            "https://www.honda-mideast.com/ar/-/media/honda/new-civic2022/highlights/highlight-img-1.jpg",
           
          },
      ];
    //
 
   //console.log('arre',filtered)
        //const { search } = this.state;
        console.log(search)

return(
// eslint-disable-next-line react/self-closing-comp
<View 
style={{
    
    backgroundColor: 'white',
   
    
    }}
>
<SearchBar
lightTheme={true}
placeholder="Type Here..."
onChangeText={updateSearch}
value={search}
/>
<FlatList
style={{
    
    backgroundColor: 'white',
   
    
    }}
data={filtercar}
renderItem={({ item }) => (

<Card
style={{
    
    backgroundColor: 'white',
   
    
    }}
onPress={() => navigation.navigate("CarCardDescrption",{v:item})}
>
 
  <Card.Title
   
    title={item.CardTitle}
    subtitle={item.descrpition}
    
  />


  
  
</Card>

)}

></FlatList>
</View>

);

// eslint-disable-next-line eol-last
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });