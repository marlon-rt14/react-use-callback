# React useCallback Hook Demo

This project demonstrates the practical usage of React's `useCallback` hook along with `memo` for optimizing component performance.

## Overview

This application showcases a simple counter implementation that demonstrates how to properly use the `useCallback` hook to memoize callback functions and prevent unnecessary re-renders in React components.

## Project Setup

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-use-callback.git

# Navigate to project directory
cd react-use-callback

# Install dependencies
npm install
```

### Running the Project

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Understanding useCallback

### What is useCallback?

`useCallback` is a React Hook that returns a memoized version of a callback function. The memoized function only changes if one of the dependencies in the dependency array has changed. This is useful for optimizing performance in cases where a component frequently re-renders and passes callbacks to expensive child components that rely on reference equality to prevent unnecessary renders.

### Project Implementation

In this project, we demonstrate useCallback through:

1. A parent `App` component that manages the counter state
2. A child `Counter` component wrapped in `memo` that receives an increment callback
3. Proper memoization of the increment function to prevent unnecessary re-renders

### Code Example

```typescript
// App.tsx
const increment = useCallback(() => {
  setCount((count) => count + 1);
}, []); // Empty dependency array since this callback doesn't depend on any values

// Counter.tsx
export const Counter = memo(({ increment }: CounterProps) => {
  console.log("Rendering Counter");
  return <button onClick={increment}>Increment</button>;
});
```

### When to Use useCallback

Use useCallback when:

1. You're passing callbacks to optimized child components that rely on reference equality
2. You want to prevent recreating functions on every render
3. You're working with memoized components (using React.memo)

### Benefits in This Project

- Prevents unnecessary re-renders of the Counter component
- Optimizes performance by memoizing the increment function
- Demonstrates proper integration with React.memo

## Project Structure

```
src/
├── components/
│   └── Counter.tsx    # Memoized counter component
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Technologies Used

- React 19
- TypeScript
- Vite
- ESLint
- React Hooks

## Best Practices Demonstrated

1. Proper usage of TypeScript for type safety
2. Integration of useCallback with memo for optimization
3. Clean project structure and organization
4. Modern React patterns and hooks usage

## License

MIT

## Contributing

Feel free to submit issues and pull requests to improve the demonstration.
