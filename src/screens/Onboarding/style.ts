import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A90F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: colors.white,
  },
});
