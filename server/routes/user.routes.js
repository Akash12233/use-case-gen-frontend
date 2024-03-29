import Router from "express";
import {register} from "../controllers/user.controller.js";

import {GoogleOAuth,
    GoogleOAuthCallback} from "../controllers/google.controller.js";
/*import {FacebookOAuth,
    FacebookOAuthCallback} from "../controllers/meta.controller.js";
import {GitHubOAuth,
    GitHubOAuthCallback} from "../controllers/github.controller.js";
*/
const userrouter = Router();

// Routes for authentication with each provider

userrouter.post('/register', register);


userrouter.get('/google', GoogleOAuth);
userrouter.get('/google/callback', GoogleOAuthCallback, (req, res) => {
    // Successful authentication, redirect to dashboard or homepage
    res.redirect('http://localhost:3000/search');
});
/*
userrouter.get('/facebook', FacebookOAuth);
userrouter.get('/facebook/callback', FacebookOAuthCallback, (req, res) => {
    // Successful authentication, redirect to dashboard or homepage
    res.redirect('http://localhost:3000/search');
});

userrouter.get('/github', GitHubOAuth);
userrouter.get('/github/callback', GitHubOAuthCallback, (req, res) => {
    // Successful authentication, redirect to dashboard or homepage
    res.redirect('http://localhost:3000/search');
});
*/
export default userrouter;



