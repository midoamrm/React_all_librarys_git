/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line no-unused-vars, prettier/prettier
import React from 'react';
import  { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
export default function HomeS({ route,navigation }) {
    const data1=[];
    var cardescrption={};
    const data2=[
      { id:1,
        CardTitle: "BMW F30",
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
        CardTitle: "Fiat Tipo",
        subtitle: "500k Egyption pound",
        descrpition: "Model::2022  KM::10k  In new condtiont",
        srcimg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadiH9dCZtrTsDETbHsy3aEQQWN9zHMe3QVA&usqp=CAU",
      },
      {id:4,
        CardTitle: "Hond civic",
        subtitle: "800k Egyption pound",
        descrpition: "Model::2022  KM::3k  In new condtiont",
        srcimg:
          "https://www.honda-mideast.com/ar/-/media/honda/new-civic2022/highlights/highlight-img-1.jpg",
      },
    ];

return(
// eslint-disable-next-line react/self-closing-comp
<View>
      
<FlatList
  data={[
    { id:1,
      CardTitle: "BMW F30",
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
      CardTitle: "Fiat Tipo",
      subtitle: "500k Egyption pound",
      descrpition: "Model::2022  KM::10k  In new condtiont",
      srcimg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadiH9dCZtrTsDETbHsy3aEQQWN9zHMe3QVA&usqp=CAU",
    },
    {id:4,
      CardTitle: "Hond civic",
      subtitle: "800k Egyption pound",
      descrpition: "Model::2022  KM::3k  In new condtiont",
      srcimg:
        "https://www.honda-mideast.com/ar/-/media/honda/new-civic2022/highlights/highlight-img-1.jpg",
    },
  ]}
  renderItem={({ item }) => (
    
    <Card
    style={{
          
      backgroundColor: 'white',
     
      
      }}
    >
     
      <Card.Title
        title={item.CardTitle}
        subtitle={item.descrpition}
      />
      <Card.Cover source={{ uri: item.srcimg }} />
      <Card.Content>
        <Text style={styles.item} variant="bodyMedium">
          {item.subtitle}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button  onPress={()=>{
          if(!data1.find(e=>e.id==item.id)){
            data1.push(item);
          };
         
}}>Add To Wishlist</Button>
        <Button onPress={() => navigation.navigate("CarCardDescrption",{v:item})}>
          View
        </Button>
      </Card.Actions>
      {item.id==data2.length? (  <Button   onPress={()=>{
          
          navigation.navigate("WhishList",{
                                              arr: data1,
})}}>
        Save Item To Whiishlist 
      </Button>):null}
    </Card>
    
)}
/>

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