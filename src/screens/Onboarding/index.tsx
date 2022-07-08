import React, { useRef, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Carousel, Pagination } from 'react-native-snap-carousel';
import { Button } from '@rneui/base';
import { useFirstAccess } from '../../context/firstAccess.context';

import CarouselCardItem from './CarouselCardItem';
import mockData from './mockData';
import { ITEM_WIDTH, SLIDER_WIDTH, styles } from './style';
import { colors } from '../../theme';

const Onboarding = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isCarousel = useRef(null);
  const { setFirstAccess } = useFirstAccess();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carousel}>
        <Carousel
          layout='stack'
          layoutCardOffset={400}
          ref={isCarousel}
          data={mockData}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          vertical={false}
          onSnapToItem={index => setCarouselIndex(index)}
        />

        <Pagination
          dotsLength={mockData.length}
          activeDotIndex={carouselIndex}
          carouselRef={isCarousel}
          dotStyle={styles.paginationDots}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />

        {carouselIndex === 2 ? (
          <Button
            title='Let`s  Go'
            size='lg'
            radius='xl'
            color={colors.white}
            containerStyle={styles.button}
            titleStyle={{
              color: colors.background,
            }}
            onPress={() => {
              if (setFirstAccess) {
                setFirstAccess(false);
              }
            }}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
