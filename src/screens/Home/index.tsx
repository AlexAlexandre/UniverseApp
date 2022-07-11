import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
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
import { isIOS } from '../../helpers/deviceInfo';
import { useFilter } from '../../contexts/filters.context';

const Home = () => {
  const [universes, setUniverses] = useState<IUniverse[]>([]);
  const [fighters, setFighters] = useState<IFighter[]>([]);
  const [loading, setLoading] = useState(false);
  const { universeFiltered, setUniverseFiltered, sortBy } = useFilter();
  const navigation = useNavigation<StackNavigationProp<propsNavigationStack>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Filter')} style={styles.iconHeader}>
          <CustomIcon name='filter-list' size={30} color={isIOS ? colors.background : colors.white} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const fightersResponse = useCallback(
    async (universe: string) => {
      setLoading(true);
      const response = await getFighters(universe, sortBy);
      setFighters(response);
      setLoading(false);
    },
    [sortBy],
  );

  const onRefreshFighters = async () => {
    await filterUniverses('All');
  };

  useEffect(() => {
    universesResponse();
    fightersResponse(universeFiltered);
  }, [fightersResponse, universeFiltered]);

  const universesResponse = async () => {
    const response = await getUniverses();
    response.unshift({ name: 'All', description: '', objectID: '0' });
    setUniverses(response);
  };

  const filterUniverses = async (name: string) => {
    setUniverseFiltered(name);
    await fightersResponse(name);
  };

  const RenderUniverses = ({ item }: { item: IUniverse }) => {
    return (
      <View>
        <Button
          title={item.name}
          containerStyle={styles.button}
          color={universeFiltered === item.name ? colors.darkBlue : colors.background}
          onPress={() => filterUniverses(item.name)}
        />
      </View>
    );
  };

  const RenderFighters = ({ item }: { item: IFighter }) => {
    return (
      <TouchableOpacity style={styles.fightersContainer} onPress={() => navigation.navigate('Detail', { ...item })}>
        <View style={styles.fightersDetail}>
          <Image source={{ uri: item.imageURL }} style={styles.fightersImage} />

          <View>
            <Text style={[textStyles.title, textStyles.bold]}>{item.name}</Text>
            <Text>{item.universe}</Text>
          </View>
        </View>

        <View style={styles.fightersInfo}>
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
        {isIOS ? <Text style={[textStyles.h1, textStyles.bold, styles.fightersTitle]}>Fighters</Text> : null}
        <Divider />

        <FlatList data={universes} renderItem={RenderUniverses} horizontal showsHorizontalScrollIndicator={false} />
      </View>

      <View>
        <FlatList
          data={fighters}
          // Warning: the right thing is use the keyExtractor comment
          // but we have some duplicate values, which cause a lot of problems
          // keyExtractor={item => item.objectID}
          keyExtractor={(item, index) => index.toString()}
          renderItem={RenderFighters}
          ItemSeparatorComponent={() => <Divider />}
          refreshing={loading}
          onRefresh={onRefreshFighters}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
