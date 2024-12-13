# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript error related to type coercion when performing arithmetic operations with mixed data types (numbers and strings).  The bug showcases unexpected behavior depending on whether strict mode is enabled or disabled.  The solution provides a way to prevent this type of error. 

## Bug Description:
The `foo` function attempts to add a number and a string.  In non-strict mode, JavaScript performs implicit type coercion, concatenating the values instead of adding them numerically. However, in strict mode, this will result in a type error.

## Solution:
The solution enforces type checking to ensure both inputs are numbers before performing addition. 