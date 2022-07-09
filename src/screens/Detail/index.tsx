import React from 'react';
import { Image, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { propsNavigationStack } from '../../routes/types';
import { styles } from './style';
import { colors, textStyles } from '../../theme';

const Detail = () => {
  const { params } = useRoute<RouteProp<propsNavigationStack, 'Detail'>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={[textStyles.h3, textStyles.bold]}>{params.name}</Text>
          <Text>{params.universe}</Text>

          <Text>Downloads: {params.downloads}</Text>

          <View style={styles.price}>
            <Text style={[textStyles.h3, textStyles.bold, { color: colors.white }]}>$ {params.price}</Text>
          </View>
        </View>

        <Image
          source={{ uri: params.imageURL, cache: 'only-if-cached' }}
          resizeMode='stretch'
          style={styles.fighterImage}
        />
      </View>

      <Text style={styles.descriptionText}>{params.description}</Text>
    </View>
  );
};

export default Detail;
