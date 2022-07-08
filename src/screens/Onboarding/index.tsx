import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Carousel, Pagination } from 'react-native-snap-carousel';

import CarouselCardItem from './CarouselCardItem';
import mockData from './mockData';
import { ITEM_WIDTH, SLIDER_WIDTH, styles } from './style';

const Onboarding = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isCarousel = useRef(null);

  console.log('carouselIndex: ', carouselIndex);

  return (
    <SafeAreaView style={styles.container}>
      <View>
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
      </View>

      <Text>adadasd</Text>
    </SafeAreaView>
  );
};

export default Onboarding;
