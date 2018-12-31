# About this Project

This is a registration form for a made-up tech conference. The idea is to fill out all input fields, sign up for workshops and chose your payment option. All fields must be filled out and valid before submitting.

Submitting validations are:
*	Name 
*	Valid email
*	At least one workshop is chosen
*	Payment option is selected.

The payment option has 3 choices, credit card, PayPal and Bitcoin. The credit card option has validation as well. Credit card number must be between 13 and 19 digits, zip code must be 5 digits and ccv must be 3 digits. If either PayPal or Bitcoin is chosen, then the credit card field is hidden and a short message is displayed that the user will be redirected to either site when selecting the “Register” button. **NOTE: this will not happen.** Maybe in the future I will add links to PayPal and Bitcoin but for now it was a practice for selecting different payment options.

It was built with **jQuery**, **HTML** and **CSS** with the focus being on **jQuery** and the **DOM**.  I could have done this in **JavaScript** but I chose not to because I wanted to learn and use **jQuery** for at least one project.

I also did not go to heavily into **CSS**. I wanted to keep it simple and plain. Maybe in the future I will change the look around but for now I will leave it as it is.

---
## What I could have done differently


**Object Oriented Programming** was not used in this project. At the time I wrote the program I was not comfortable with using O.O.P..  Building the validation and error messages with classes would have been the better option because I violated the “DRY” principle quite a few times.  

