// from enum import Enum

// # Define an Enum for different operations
// class Operation(Enum):
//     ADD = 1
//     SUBTRACT = 2
//     MULTIPLY = 3
//     DIVIDE = 4

// # Define a function to perform arithmetic operations based on the operation provided
// def perform_operation(operation, x, y):
//     operations = {
//         Operation.ADD: lambda x, y: x + y,
//         Operation.SUBTRACT: lambda x, y: x - y,
//         Operation.MULTIPLY: lambda x, y: x * y,
//         Operation.DIVIDE: lambda x, y: x / y if y != 0 else float('inf')  # Handle division by zero
//     }
//     return operations[operation](x, y)

// # Example usage
// result_add = perform_operation(Operation.ADD, 5, 3)
// result_subtract = perform_operation(Operation.SUBTRACT, 10, 4)
// result_multiply = perform_operation(Operation.MULTIPLY, 2, 6)
// result_divide = perform_operation(Operation.DIVIDE, 8, 2)

// print("Result of addition:", result_add)
// print("Result of subtraction:", result_subtract)
// print("Result of multiplication:", result_multiply)
// print("Result of division:", result_divide)
