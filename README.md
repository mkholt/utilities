# TS Utilities

[![npm](https://img.shields.io/npm/v/@mkholt/utilities)](https://www.npmjs.com/package/@mkholt/utilities)
![License](https://img.shields.io/npm/l/@mkholt/utilities)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)


## Overview

The TS Utilities is a collection of small common utility functions to simplify common programming tasks.
It is designed to be lightweight, efficient, and easy to use.

The functions are fully typescript typed, and implement type-assertion where relevant.

## Installation

You can install the library using npm:

```bash
npm install @mkholt/utilities
```

or using yarn:
```bash
yarn add @mkholt/utilities
```

## Usage

Here is an example of how to use the Utilities Library:

```typescript
import { chunkArray } from "@mkholt/utilities";

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 for (const chunk of chunkArray(arr, 3)) {
    console.log(chunk)
 }
 // [1, 2, 3]
 // [4, 5, 6]
 // [7, 8, 9]

 const arr2 = [1, 2, 3, 1, 2, 3, 4, 5]
 const unique = arr2.filter(isUnique)
 // unique = [1, 2, 3, 4, 5]
```

## Features

- **assert**: `assert(condition, "error")`: Given a boolean condition, checks the condition and throws and error if it is false.
- **chunkArray**: `chunkArray(arr, size)`: Given an array, returns an iterator which returns the array in chunks of the given `size`
- **isDefined**: `isDefined(obj)`: Returns `true` if the object is defined and non-null.
- **isUnique**: `isUnique(value, index, arr)`: Returns `true` if this is the first occurence of the `value` in the given array `arr`, `false` otherwise.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please open an issue on GitHub.
