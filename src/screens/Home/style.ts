import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
  },
  header: {
    backgroundColor: colors.white,
  },
  iconHeader: {
    marginRight: 10,
  },
  button: {
    margin: 10,
  },
  fightersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  fightersTitle: {
    marginLeft: 15,
  },
  fightersDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fightersInfo: {
    alignItems: 'flex-end',
  },
  fightersImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
