/* eslint-disable react/react-in-jsx-scope */
import type { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
  //   value: number;
  //   symbol: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text> {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 4,
  },

  country: {
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CurrencyButton;
