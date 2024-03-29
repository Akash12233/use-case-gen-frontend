
/*
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from '../modals/user.modal.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "/api/v1/auth/facebook/callback",
            profileFields: ['id', 'displayName'],
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

// Facebook OAuth authentication route
const FacebookOAuth = passport.authenticate('facebook', { scope: ['email'] });

// Facebook OAuth callback route
const FacebookOAuthCallback = passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3000/search',
    failureRedirect: '/',
});
*/