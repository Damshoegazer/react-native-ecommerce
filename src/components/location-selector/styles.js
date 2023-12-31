import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 15,
  },
  text: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: "HelveticaNowDisplayRegular",
  },
  location: {
    color: COLORS.text,
    fontSize: 14,
    fontFamily: "HelveticaNowDisplayBold",
  },
});