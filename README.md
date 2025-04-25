# Design System

A scalable, reusable design system built with React, TypeScript, and TailwindCSS.

## Features

- Typography system with consistent heading hierarchy
- Data entry components (Text Input, Select Menu)
- Feedback components (Toast, Modal)
- Fully typed with TypeScript
- Accessible by default
- Responsive design
- Dark mode support
- Storybook documentation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

### Building

```bash
# Build the project
npm run build

# Build Storybook
npm run build-storybook
```

## Component Documentation

Each component is documented in Storybook with:
- Usage examples
- Props documentation
- Accessibility notes
- Best practices
- Variants and states

## Project Structure

```
design-system/
├── src/
│   ├── components/
│   │   ├── typography/
│   │   ├── data-entry/
│   │   └── feedback/
│   ├── styles/
│   └── types/
├── .storybook/
└── public/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
