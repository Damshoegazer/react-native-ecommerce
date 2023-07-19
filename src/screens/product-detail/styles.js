import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  name: {
    fontFamily: "HelveticaNowDisplayRegular",
    fontSize: 18,
  },
  description: {
    fontFamily: "HelveticaNowDisplayRegular",
    fontSize: 14,
  },
  tagTitle: {
    fontFamily: "HelveticaNowDisplayRegular",
    fontSize: 16,
  },
  price: {
    fontFamily: "HelveticaNowDisplayRegular",
    fontSize: 20,
  },
  containerTags: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
  },
  containerTag: {
    padding: 10,
    borderRadius: 10,
  },
  tag: {
    color: COLORS.white,
  },
});