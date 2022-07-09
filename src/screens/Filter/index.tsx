import React, { useLayoutEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { propsNavigationStack } from '../../routes/types';
import { colors, textStyles } from '../../theme';
import { AirbnbRating, Button, CheckBox, Divider } from '@rneui/base';
import { styles } from './style';

const Filter = () => {
  const [nameCheck, setNameCheck] = useState(false);
  const [priceCheck, setPriceCheck] = useState(false);
  const [rateCheck, setRateCheck] = useState(false);
  const [downloadCheck, setDownloadCheck] = useState(false);
  const [rating, setRating] = useState(0);
  const navigation = useNavigation<StackNavigationProp<propsNavigationStack>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => <Text style={[textStyles.h1, textStyles.bold]}>Filters</Text>,
    });
  }, [navigation]);

  return (
    <View>
      <View>
        <View style={styles.header}>
          <Text style={[textStyles.body, textStyles.bold, { color: colors.disabled }]}>SORT BY</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            title='Name'
            checked={nameCheck}
            iconRight
            iconType='material-community'
            uncheckedIcon='checkbox-blank-circle-outline'
            checkedIcon='checkbox-marked-circle-outline'
            wrapperStyle={styles.checkBoxDirection}
            onPress={() => setNameCheck(!nameCheck)}
          />

          <Divider inset={true} />

          <CheckBox
            title='Price'
            checked={priceCheck}
            iconRight
            iconType='material-community'
            uncheckedIcon='checkbox-blank-circle-outline'
            checkedIcon='checkbox-marked-circle-outline'
            wrapperStyle={styles.checkBoxDirection}
            onPress={() => setPriceCheck(!priceCheck)}
          />

          <Divider inset={true} />

          <CheckBox
            title='Rate'
            checked={rateCheck}
            iconRight
            iconType='material-community'
            uncheckedIcon='checkbox-blank-circle-outline'
            checkedIcon='checkbox-marked-circle-outline'
            wrapperStyle={styles.checkBoxDirection}
            onPress={() => setRateCheck(!rateCheck)}
          />

          <Divider inset={true} />

          <CheckBox
            title='Downloads'
            checked={downloadCheck}
            iconRight
            iconType='material-community'
            uncheckedIcon='checkbox-blank-circle-outline'
            checkedIcon='checkbox-marked-circle-outline'
            wrapperStyle={styles.checkBoxDirection}
            onPress={() => setDownloadCheck(!downloadCheck)}
          />
        </View>
      </View>

      <View style={styles.header}>
        <Text style={[textStyles.body, textStyles.bold, { color: colors.disabled }]}>FILTER BY</Text>
      </View>

      <View style={styles.ratingContainer}>
        <AirbnbRating size={35} defaultRating={rating} showRating={false} onFinishRating={value => setRating(value)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title='Reset' size='lg' color={colors.disabled} radius={15} style={styles.buttonSize} />
        <Button title='Apply' size='lg' radius={15} style={styles.buttonSize} />
      </View>
    </View>
  );
};

export default Filter;
