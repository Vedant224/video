import {
    asyncHandler
} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {
    User
} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

    const {
        fullName,
        email,
        username,
        passsword
    } = req.body

    if (
        [fullName, email, username, passsword].some((field) =>
            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{
            username
        }, {
            email
        }]
    })
    if(existedUser){
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const avatarImage = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar file is required")
    }

    User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        passsword,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(username._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "user registered sucessfully")
    )

})

export {
    registerUser
}