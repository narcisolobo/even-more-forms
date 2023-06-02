# Even More Forms

*Difficulty: Intermediate*  
*Expected time to complete: 1 to 2 hours*  
*Full-Time Schedule Placement: Week 1, Thursday*

This proposed practice assignment builds upon the More Forms assignment. It introduces handling the form state as an object, rather than handling each input as a separate piece of state. It also introduces the `onBlur` event to check validity, so users are not presented with validation errors until the input loses focus. The `onBlur` event is handled in with a `switch` statement. The code is slightly modularized by splitting the validation functions into a separate helpers file.

This JavaScript React code represents a form component that allows users to enter their personal information, such as their first name, last name, email, password, and confirm password. The code includes validation functions to check the input values for various requirements.

Three validation functions are defined in `/utils/form-helpers.js`:

- The `checkLength` function checks if a given string meets the minimum length requirement.
- The `checkEmail` function validates if a string is a valid email address.
- The `checkPasswords` function verifies if two password inputs match.
Two event handler functions are defined:

`handleChange` is called when the value of an input field changes, and it updates the form state accordingly.

`handleBlur` is triggered when an input field loses focus (`onBlur` event). It checks for errors based on the field's name and updates the error state accordingly.

Each input field includes event handlers for `onChange` and `onBlur` events. The error messages are conditionally rendered as `<small>` elements with the `.error` class if there are any errors for the corresponding field.
