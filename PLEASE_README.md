# Login_Profile
  > A project by athreyanmks

**ALERT! Before running please make sure the correct credentials for your DBMS are in the database_cred.txt file so the MySQL queries are successful**
## Register/Login Page

The **Register** and **Login** form are on the same page and can be accesed using the appropriate toggle buttons


#### Register form features
  > - Accepts submission and sends an **AJAX request** to store values.
  > - Checks if username already exists in database dynamically and disables submission if it does.
  > - Checks if passwords match dynamically and prevents submission if they don't.
  > - Doesn't allow submission with empty fields.
  
#### Login form features
  > - Accepts submission and sends an **AJAX request** to retrieve token for the user. The token is stored locally using **cookies**.
  > - On submission, user is redirected to the **Profile** page.
  
## Profile Page

The Profile page has three elements, the **Navbar**, the **Profile Display**, the **Profile Edit** form.

#### Navbar
 > - Is a simple Navbar with the title of the page and a **Logout** button.
 > - The **Logout** button will destroy current session and redirect to the **Login** page.
 
#### Profile Display
 > - A simple profile window with a **Profile pic**, **Name**, **Username**, **DOB**, **Age** and **Contact Details**.
 > - The profile pic is an **incomplete feature** that would let a user upload a picture and dynamically display it.
 > - All the content in the **Profile Display** is dynamically pulled from the server under certain conditions.
 > - The **Edit Details** button can be used for bringing up the form to edit DOB, Age and Contact details.
 
#### Profile Edit
 > - **The Profile Edit** contains a type date input for **DOB**, type number input for **Age** and textarea input for **Contact details**.
 > - The contents of the fields in the **Profile Edit** form are dynamically updated in the front end and back end as the user types.
 > - The **Submit** button sends a final request before closing the form while the **Back** button simply closes the form.
