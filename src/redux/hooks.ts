import {Dimensions} from 'react-native';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import 'intl';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const ScreenHeight = Dimensions.get('window').height;
export const ScreenWidth = Dimensions.get('window').width;
export const currency = function (number: any) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(number);
};
