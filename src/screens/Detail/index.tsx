import React, { useLayoutEffect } from 'react';
import { Image, Platform, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AirbnbRating } from '@rneui/base';

import { propsNavigationStack } from '../../routes/types';
import { colors, textStyles } from '../../theme';
import { styles } from './style';

const Detail = () => {
  const { params } = useRoute<RouteProp<propsNavigationStack, 'Detail'>>();
  const navigation = useNavigation<StackNavigationProp<propsNavigationStack>>();

  useLayoutEffect(() => {
    if (Platform.OS === 'ios') {
      navigation.setOptions({
        headerBackTitleVisible: false,
        headerTintColor: colors.background,
        headerTitleAlign: 'left',
        headerTitle: () => <Text style={[textStyles.h1, textStyles.bold]}>{params.name}</Text>,
        headerBackground: () => <View style={{ flex: 1, backgroundColor: colors.white }} />,
      });
      return;
    }
    navigation.setOptions({
      headerTitle: () => <Text style={[textStyles.h3, { color: colors.white }]}>{params.name}</Text>,
    });
  }, [navigation, params.name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={[textStyles.h3, textStyles.bold]}>{params.name}</Text>
          <Text>{params.universe}</Text>

          <View style={styles.fighterInfo}>
            <AirbnbRating size={18} showRating={false} defaultRating={params.rate} isDisabled={true} />

            <Text style={styles.downloadsText}>Downloads: {params.downloads}</Text>

            <View style={styles.price}>
              <Text style={[textStyles.h3, textStyles.bold, { color: colors.white }]}>$ {params.price}</Text>
            </View>
          </View>
        </View>

        <Image source={{ uri: params.imageURL }} resizeMode='stretch' style={styles.fighterImage} />
      </View>

      <Text style={styles.descriptionText}>{params.description}</Text>
    </View>
  );
};

export default Detail;
