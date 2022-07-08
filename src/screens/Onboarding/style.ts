import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  carousel: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: colors.white,
  },
  button: {
    width: 300,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
