import React, { useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style';
import { colors, textStyles } from '../../theme';
import { Button, Divider } from '@rneui/base';
import { getUniverses } from '../../services/universes.service';
import { IUniverse } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from '../../components/Icon';

const Home = () => {
  const [universes, setUniverses] = useState<IUniverse[]>([]);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerRight: () => <CustomIcon name='filter-list' size={30} color={colors.background} />,
    });
  }, [navigation]);

  useEffect(() => {
    universesResponse();
  }, []);

  const universesResponse = async () => {
    const response = await getUniverses();
    setUniverses(response);
  };

  const RenderItem = ({ item }: { item: IUniverse }) => {
    return (
      <View>
        <Button title={item.name} containerStyle={styles.button} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[textStyles.h1, textStyles.bold, { marginLeft: 15 }]}>Fighters</Text>
        <Divider />

        {/*<View style={{ flexDirection: 'row' }}>*/}
        {/*  <Button title='All' containerStyle={[styles.button, { width: 60 }]} />*/}

        {/*  <FlatList data={universes} renderItem={RenderItem} horizontal />*/}
        {/*</View>*/}

        <FlatList data={universes} renderItem={RenderItem} horizontal showsHorizontalScrollIndicator={false} />
      </View>
    </View>
  );
};

export default Home;
