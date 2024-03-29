import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import User from '../modals/user.modal.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/v1/auth/google/callback",
            scope: ['profile', 'email'],
        },
        asyncHandler(async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await findOrCreateUser(profile);
                done(null, user);
            } catch (error) {
                done(new ApiError('Error finding or creating user', 500), false);
            }
        })
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

// Google OAuth authentication route
const GoogleOAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

// Google OAuth callback route
const GoogleOAuthCallback = passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/search', 
    failureRedirect: '/login/failed', 
});
export {
    GoogleOAuth,
    GoogleOAuthCallback,
};