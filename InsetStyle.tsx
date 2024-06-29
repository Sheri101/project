import { useSafeAreaInsets,SafeAreaProvider, } from 'react-native-safe-area-context';

export default function UseInsetStyle() {
  const insets = useSafeAreaInsets();
  
  return {
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  };
}
