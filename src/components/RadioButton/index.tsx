import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider, Icon } from '@rneui/base';
import { colors, textStyles } from '../../theme';
import { ISortBy } from '../../interfaces';
import { styles } from './style';

interface IRadioButton {
  data: ISortBy[];
  onSelect: (value: string) => void;
}

const RadioButton = ({ data, onSelect }: IRadioButton) => {
  const [userOption, setUserOption] = useState('');

  const selectHandler = (value: string) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View>
      {data.map((item: ISortBy) => {
        return (
          <TouchableOpacity key={item.title} onPress={() => selectHandler(item.value)}>
            <View style={styles.container}>
              <Text style={[textStyles.title]}>{item.title}</Text>

              <Icon
                name={userOption !== item.value ? 'checkbox-blank-circle-outline' : 'checkbox-marked-circle-outline'}
                color={userOption === item.value ? colors.background : colors.disabled}
                type='material-community'
              />
            </View>

            <Divider inset />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default RadioButton;
