import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

import { colors, textStyles } from '../../../theme';
import { styles } from './style';

interface ICarouselCardItem {
  item: {
    imgUrl: ImageSourcePropType;
    title: string;
    subtitle?: string;
  };
  index: number;
}

const CarouselCardItem = ({ item, index }: ICarouselCardItem) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgUrl} style={styles.image} resizeMode='stretch' />

      <View style={styles.cardFooter}>
        <View style={styles.container}>
          <Text style={[textStyles.h3, { color: colors.white }]}>{item.title}</Text>
          {item.subtitle ? <Text style={[textStyles.h3, { color: colors.white }]}>{item.subtitle}</Text> : null}
        </View>
      </View>
    </View>
  );
};

export default CarouselCardItem;
