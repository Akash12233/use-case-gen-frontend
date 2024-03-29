import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import User from '../modals/user.modal.js';

const register = asyncHandler(async (req, res, next) => { 
    const { user, name_org, name_role_timestamp, agree } = req.body;
 
    if (!user || !name_org || !name_role_timestamp || !agree) {
        return next(new ApiError('All fields are required', 400));
    }

    try {
        const newUser = new User({ user, name_org, name_role_timestamp, agree });
        await newUser.save();

        res.status(200).json(new ApiResponse(200, newUser, 'User created successfully'));
    } catch (error) {
        return next(new ApiError('Error creating user', 500));
    }
});

export {register} ; 