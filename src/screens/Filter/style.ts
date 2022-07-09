import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
    marginTop: 20,
  },
  checkBoxContainer: {
    marginTop: 10,
    backgroundColor: colors.white,
  },
  checkBoxDirection: {
    justifyContent: 'space-between',
  },
  ratingContainer: {
    marginTop: 10,
    height: 80,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 200,
  },
  buttonSize: {
    width: 150,
  },
});
