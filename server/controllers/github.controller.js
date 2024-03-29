import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2'; // Assuming you are using 'passport-github2' for OAuth2.0
import User from '../modals/user.modal.js';
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "/api/v1/auth/github/callback",
            scope: ['user:email'],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await findOrCreateUser(profile);
                done(null, user);
            } catch (error) {
                done(new ApiError('Error finding or creating user', 500), false);
            }
        }
    )
);

async function findOrCreateUser(profile) {
    try {
        let user = await User.findOne({ id: profile.id });

        if (!user) {
            user = await User.create({
                user: profile.displayName,
            });
        }

        return user;
    } catch (error) {
        throw new ApiError('Error finding or creating user', 500);
    }
}

// GitHub OAuth authentication route
const GitHubOAuth = passport.authenticate('github', { scope: ['user:email'] });

// GitHub OAuth callback route
const GitHubOAuthCallback = passport.authenticate('github', {
    successRedirect: 'http://localhost:3000/search',
    failureRedirect: '/',
});

export  {
    GitHubOAuth,
    GitHubOAuthCallback,
};
