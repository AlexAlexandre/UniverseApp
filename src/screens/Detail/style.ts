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
  fighterInfo: {
    marginTop: 20,
  },
  fighterImage: {
    width: 200,
    height: 200,
  },
  price: {
    width: 70,
    height: 38,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadsText: {
    marginTop: 5,
  },
  descriptionText: {
    lineHeight: 30,
    marginTop: 30,
    textAlign: 'justify',
  },
});
