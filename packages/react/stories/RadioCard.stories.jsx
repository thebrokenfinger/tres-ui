import React from 'react';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text'; 
import { RadioCardGroup, RadioCard } from '../components/RadioCard';

export default {
  title: 'RadioCard',
  component: RadioCard,
  argTypes: {
    colorScheme: {
      options: ['gray', 'blue'],
      control: {type: 'select'}
    },
  }
};

const Template = (props) => (
  <RadioCardGroup defaultValue="1">
    <Flex direction="column" gap="2">
      <RadioCard value="1" css={{ mr: '$5' }} {...props}>
        <Flex css={{ alignItems: 'center' }}>
          <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray">
            -$1600
          </Text>
        </Flex>
      </RadioCard>
      <RadioCard value="2" css={{ mr: '$5' }} {...props}>
        <Flex css={{ alignItems: 'center' }}>
          <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="4" color="gray">
            -$1600
          </Text>
        </Flex>
      </RadioCard>
    </Flex>
  </RadioCardGroup>
);

export const Default = Template.bind({});
Default.args = {
  colorScheme: 'gray',
};
