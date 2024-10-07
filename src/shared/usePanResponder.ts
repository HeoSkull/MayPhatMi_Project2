import { PanResponder } from 'react-native';

const usePanResponder = (navigation: any, targetRoute: string) => {
  const recognizeDrag = ({ dx }: { dx: number }) => {
    if (dx > 200) return 1; 
    return 0;
  };

  return PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderEnd: (e, gestureState) => {
      if (recognizeDrag(gestureState) === 1) {
        navigation.navigate(targetRoute);
      }
      return true;
    }
  });
};

export default usePanResponder;