import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 145,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    maxWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailContainer: {
    justifyContent: 'space-between',
    maxWidth: 190,
    gap: 5,
  },
  name: {
    fontSize: 13,
    fontFamily: "HelveticaNowDisplayRegular",
  },
  price: {
    fontSize: 13,
    fontFamily: "HelveticaNowDisplayBold",
  },
  qty: {
    fontSize: 12,
    fontFamily: "HelveticaNowDisplayRegular",
  },
  stock: {
    fontSize: 12,
    fontFamily: "HelveticaNowDisplayRegular",
  },
  actionContainer: {
    gap: 20,
    flexDirection: 'row',
  },
  increaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secodary,
    borderRadius: 20,
  },
  increaseButtonText: {
    color: COLORS.white,
    fontFamily: "HelveticaNowDisplayBold",
    fontSize: 14,
  },
  decreaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  decreaseButtonText: {
    color: COLORS.white,
    fontFamily: "HelveticaNowDisplayBold",
    fontSize: 14,
  },
  deleteButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
  deleteContainer: {},
});