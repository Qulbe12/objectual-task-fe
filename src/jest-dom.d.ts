import '@testing-library/jest-dom/extend-expect';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
            // Add other matchers here if needed
        }
    }
}