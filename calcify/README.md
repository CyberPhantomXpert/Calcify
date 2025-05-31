# Calcify

Calcify is a comprehensive web-based calculator suite designed to be a versatile mathematical assistant. Built with Next.js, React, TypeScript, ShadCN UI components, and Tailwind CSS, Calcify offers a modern and responsive interface that ensures a seamless experience across desktops, tablets, and mobile devices. The application features a toggleable light/dark theme, with the dark mode styled in a "Cyberpunk Neon" aesthetic.

## Features

### Matrix Pilot
- **Dynamic Matrix Input**: Create and manage a list of matrices (up to 5). Adjust dimensions (rows and columns, up to 5x5) dynamically. Input cells accept numeric values and symbolic/algebraic terms.
- **Sequential Matrix Operations**: Perform addition, subtraction, and multiplication on defined matrices, intelligently handling symbolic terms using math.js.
- **Individual Matrix Functions**: Calculate the determinant and transpose of individual matrices.

### Simple Calculator
- Supports basic arithmetic operations: addition, subtraction, multiplication, and division.
- Features a clear display for current input and results.

### Trigonometry Calculator
- Calculates fundamental trigonometric functions (sin, cos, tan) based on input angles in degrees.
- Basic error handling for invalid inputs.

### Calculus Calculator
- Offers tools for symbolic differentiation and integration using math.js.
- Requires a mathematical expression and the variable for differentiation/integration.

### Symbolic Algebra Calculator
- Enables basic algebraic manipulation of expressions, including addition, subtraction, and multiplication.
- Automatically simplifies results.

## Installation

To get started with Calcify, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd calcify
npm install
```

## Usage

After installation, you can run the application in development mode:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to start using Calcify.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.