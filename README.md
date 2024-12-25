# JavaScript Bug: Unexpected NaN Result with Undefined Argument

This repository demonstrates a common JavaScript bug involving unexpected `NaN` results when using the `+` operator with `undefined` values.

## Bug Description

The `foo` function is designed to add two numbers.  It correctly handles `null` arguments by returning `null`. However, when an `undefined` argument is passed, it results in `NaN` due to type coercion in the `+` operation.

## Bug Solution

The solution involves explicitly checking for `undefined` and handling it appropriately, either by returning `null`, throwing an error, or using a default value.