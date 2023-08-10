import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 35,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: "HelveticaNowDisplayRegular",
    marginBottom: 5,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 5,
  },
  error: {
    fontSize: 12,
    fontFamily: "HelveticaNowDisplayRegular",
    paddingVertical: 5,
    color: COLORS.error,
  },
});