import React from "react";
import { useEffect, useState } from "react";


const AccountPage = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);


     return (
        <div class="new-user-sign-up-containter">
        <h1 class="sign-up-header">Sign Up Here!</h1>
        <div class="sign-up-fields-container">
            <input type="text" id="firstname" placeholder="First Name"> </input>
        </div>
    </div>
    ) 
}

export default AccountPage;