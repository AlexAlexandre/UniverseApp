import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MappedIcons from 'react-native-vector-icons/glyphmaps/MaterialIcons.json';
MaterialIcon.loadFont();

export type TIconNames = keyof typeof MappedIcons;

interface IIcon {
  name: TIconNames;
  size: number;
  color: string;
}

const CustomIcon = ({ name, size, color }: IIcon) => <MaterialIcon name={name} size={size} color={color} />;

export default CustomIcon;
