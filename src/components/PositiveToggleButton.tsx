import React, { useState } from 'react';
import { Button, ButtonProps } from 'react-native';

const PositiveToggleButton = () => {
  const [positive, setPositive] = useState(false);
  const positiveButtonPropsTruthTable: Record<`${boolean}`, ButtonProps> = {
    false: {
      title: 'Negative state',
      color: '#FF0187',
    },
    true: {
      title: 'Positive state',
      color: '#018786',
    },
  };
  const positiveButtonPropsKey = positive.toString() as keyof typeof positiveButtonPropsTruthTable;
  const positiveButtonProps = positiveButtonPropsTruthTable[positiveButtonPropsKey];
  const handlePositiveButtonClick = () => {
    setPositive(!positive);
  };

  return (
    <Button
      // multiline
      {...positiveButtonProps}
      onPress={handlePositiveButtonClick}
    />
  );
};

export default PositiveToggleButton;
