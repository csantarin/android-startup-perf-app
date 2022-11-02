import React from 'react';
import { Text, TextProps } from 'react-native';

interface ConditionalTextProps extends TextProps {
  show?: boolean;
}
const ConditionalText = (props: ConditionalTextProps) => {
  const { show = false, ...rest } = props;

  if (!show) {
    return null;
  }

  // eslint-disable-next-line prettier/prettier
  return (
    <Text {...rest as unknown as TextProps} />
  );
};

export default ConditionalText;
