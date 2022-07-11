import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { propsNavigationStack } from '../../routes/types';
import { colors, textStyles } from '../../theme';
import { AirbnbRating, Button } from '@rneui/base';
import { styles } from './style';
import { useFilter } from '../../contexts/filters.context';
import { isIOS } from '../../helpers/deviceInfo';
import RadioButton from '../../components/RadioButton';
import checkBoxData from './checkBoxData';

const Filter = () => {
  const { sortBy, setSortBy, rating, setRating } = useFilter();
  const navigation = useNavigation<StackNavigationProp<propsNavigationStack>>();

  useLayoutEffect(() => {
    if (isIOS) {
      navigation.setOptions({
        headerTitle: () => <Text style={[textStyles.h1, textStyles.bold]}>Filters</Text>,
      });
    }
  }, [navigation]);

  const resetFilters = () => {
    setSortBy('');
    setRating(0);
  };

  console.log('sortBy: ', sortBy);

  return (
    <View>
      <View>
        <View style={styles.header}>
          <Text style={[textStyles.body, textStyles.bold, { color: colors.disabled }]}>SORT BY</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <RadioButton data={checkBoxData} onSelect={value => setSortBy(value)} />
        </View>
      </View>

      <View style={styles.header}>
        <Text style={[textStyles.body, textStyles.bold, { color: colors.disabled }]}>FILTER BY</Text>
      </View>

      <View style={styles.ratingContainer}>
        <AirbnbRating size={35} defaultRating={rating} showRating={false} onFinishRating={value => setRating(value)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title='Reset'
          size='lg'
          radius={15}
          color={colors.disabled}
          style={styles.buttonSize}
          onPress={() => resetFilters()}
        />
        <Button title='Apply' size='lg' radius={15} style={styles.buttonSize} />
      </View>
    </View>
  );
};

export default Filter;
