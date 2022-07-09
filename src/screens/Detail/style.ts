import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    width: 70,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fightersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  fighterImage: {
    width: 200,
    height: 200,
  },
  descriptionText: {
    lineHeight: 30,
    marginTop: 30,
    textAlign: 'justify',
  },
});
