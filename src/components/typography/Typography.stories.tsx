import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Typography component provides a consistent and accessible way to display text across the application.
It supports various variants, weights, and colors, and can be customized using the \`as\` prop to render as different HTML elements.

### Accessibility
- Uses semantic HTML elements by default
- Maintains proper heading hierarchy
- Supports screen readers with appropriate ARIA attributes
- Ensures sufficient color contrast

### Usage
\`\`\`tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="p" color="secondary">Paragraph text</Typography>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'caption', 'helper'],
      description: 'The typography variant to use',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
      description: 'The font weight to apply',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
      description: 'The text color to apply',
    },
    as: {
      control: 'text',
      description: 'The HTML element to render as',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph of text that demonstrates the typography component.',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Form Label',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text',
  },
};

export const HelperText: Story = {
  args: {
    variant: 'helper',
    children: 'Helper text for form fields',
  },
};

export const WithCustomWeight: Story = {
  args: {
    variant: 'p',
    weight: 'bold',
    children: 'Bold paragraph text',
  },
};

export const WithCustomColor: Story = {
  args: {
    variant: 'p',
    color: 'error',
    children: 'Error message text',
  },
};

export const CustomElement: Story = {
  args: {
    variant: 'p',
    as: 'span',
    children: 'This text is rendered as a span element',
  },
}; 