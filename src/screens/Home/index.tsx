import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { colors, textStyles } from '../../theme';
import { Button, Divider } from '@rneui/base';
import { getUniverses } from '../../services/universes.service';
import { IFighter, IUniverse } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from '../../components/Icon';
import { getFighters } from '../../services/fighters.service';
import { propsNavigationStack } from '../../routes/types';
import { StackNavigationProp } from '@react-navigation/stack';

const Home = () => {
  const [universes, setUniverses] = useState<IUniverse[]>([]);
  const [fighters, setFighters] = useState<IFighter[]>([]);
  const navigation = useNavigation<StackNavigationProp<propsNavigationStack>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => <CustomIcon name='filter-list' size={30} color={colors.background} />,
    });
  }, [navigation]);

  useEffect(() => {
    universesResponse();
    fightersResponse();
  }, []);

  const universesResponse = async () => {
    const response = await getUniverses();
    setUniverses(response);
  };

  const fightersResponse = async () => {
    const response = await getFighters();
    setFighters(response);
  };

  const RenderItem = ({ item }: { item: IUniverse }) => {
    return (
      <View>
        <Button title={item.name} containerStyle={styles.button} />
      </View>
    );
  };

  const RenderFighters = ({ item }: { item: IFighter }) => {
    return (
      <TouchableOpacity style={styles.fightersContainer} onPress={() => navigation.navigate('Detail', { ...item })}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: item.imageURL, cache: 'only-if-cached' }} style={styles.fightersImage} />

          <View>
            <Text style={[textStyles.title, textStyles.bold]}>{item.name}</Text>
            <Text>{item.universe}</Text>
          </View>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text>Price: ${item.price}</Text>
          <Text>Rate: {item.price}</Text>
          <Text>Downloads: {item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[textStyles.h1, textStyles.bold, { marginLeft: 15 }]}>Fighters</Text>
        <Divider />

        <FlatList data={universes} renderItem={RenderItem} horizontal showsHorizontalScrollIndicator={false} />
      </View>

      <View>
        <FlatList
          data={fighters}
          keyExtractor={item => item.objectID}
          renderItem={RenderFighters}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
