import { useEffect, useState } from 'react';
import { StyleSheet  , Image , Button, ScrollView , TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View  } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [click, setClick] = useState(false)
  const [loading , setLoading ]  = useState(false )
  const [data, setData] = useState<any >([])
 
  useEffect(() => {
    setLoading(true)
    fetch("https://test-nft.hectagon.finance/api/listings?limit=12&sort=LATEST")
    .then((res: any ) => res.json()).then(dataraw => {

      setData(dataraw.results)
      setLoading(false)
    })
  }, [])
  return (
    <View >

      
      <Button 
      title="Learn More"
      color="#841584"
      onPress={() => {
         alert("Yến vở vẩn vl ")
      }}/>
      { loading ? <Text>Loading ...</Text>: <ScrollView>
        {data.map((item : any , key: number  )  => {
          return <View key={key}>
            <Text>{item.data.name}</Text>
            <Text>{item.data.symbol}</Text>
            <Image style={styles.tinyLogo} source ={{
              uri : item.data.image
            }} />
            </View>
          
        })}
        </ScrollView>
      }

     <Text>
       Trading
     </Text>
       {click ? <Text></Text>  : <Text>No state </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {

    width: 300,
    height: 300,
  },
  
 

});
