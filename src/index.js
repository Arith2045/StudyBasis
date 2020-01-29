import React from 'react';
import ReactDOM from 'react-dom';

import main from './main';

import LoginForm from './auth_management/user_management/login/LoginForm';
import user_reducer from './auth_management/user_management/user_reducer';

const rootElement = document.getElementById("root");
// ReactDOM.render(<LoginForm />, rootElement);

main(LoginForm, user_reducer);
