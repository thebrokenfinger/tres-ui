import React from 'react';
import { Button } from '../components/Button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator
} from '../components/DropdownMenu';

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    colorScheme: {
      options: ['gray', 'blue'],
      control: {type: 'select'}
    }
  }
};

const Template = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Dropdown Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuItem>React</DropdownMenuItem>
        <DropdownMenuItem>Vue</DropdownMenuItem>
        <DropdownMenuItem>Svelte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Ava</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Jest</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Mocha</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Choose the fastest</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="bun">
          <DropdownMenuRadioItem value="node">NodeJS</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="deno">Deno</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bun">Bun</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
