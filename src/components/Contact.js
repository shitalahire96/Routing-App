import React from 'react';

function Contact(props) {
    return (
        <div>
            <h1>Contact page</h1>
            <form>
                <label>Email:- </label>
                <input type='email' placeholder='Enter Email'></input>

                <label>Password:- </label>
                <input type='password' placeholder='Enter Pass'></input>

                <label>Feedback:- </label>
                <textarea></textarea>

                <button>Reset</button>
                <button>Submit</button>

            </form>
        </div>
    );
}

export default Contact;