import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHander.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
const generateAccessAndRefreshToken=asyncHandler(async(userId)=>{
try {
    const user=await User.findById(userId)
    const accessToken=user.accessToken()
    const refreshToken=user.refreshToken()
    user.refreshToken=refreshToken
    await user.save({validateBeforeSave:false})
    return {accessToken,refreshToken}
} catch (error) {
    throw new ApiError(500,"Something went wrong while generating access and refreshToken")
}
})
const registerUser=asyncHandler(async(req,res)=>{
const {fullName,username,email,password}=req.body
if(!username||!email||!password||!fullName)
{
    throw new ApiError(401,"All fields are required")
}
const isUserPresent = await User.findOne({
    $or: [
        { username: username },
        { email: email }
    ]
})
if(isUserPresent)
{
    throw new ApiError(409,"User Already Existed")
}
const user=await User.create({
    fullName,
    username,
    email,
    password,
})
if(!user)
{
    throw new ApiError(500,"Something went wrong while creating the User")
}
const createdUser=await User.findById(user._id).select("-password -refreshToken")
return res
.status(200)
.json(new ApiResponse(200,createdUser,"User Successfully Created"))
})
const loginUser=asyncHandler(async(req,res)=>{
const {username,password}=req.body
if(!password)
{
    throw new ApiError(409,"Password is compulsory")
}
if(!username)
{
    throw new ApiError(409,"Enter a username Please")
}
const user=await User.findOne({username}).select("+password")
  if(!user)
  {
    throw new ApiError(404,"Usename not found")
  }
const checkPassword=await user.isPasswordCorrect(password)
if(!checkPassword)
{
    throw new ApiError(401,"Password is incorrect")
}
const accessToken=user.generateAccessTokens()
  const refreshToken=user.generateRefreshTokens()
  console.log("Refresh Token is",refreshToken)
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });
  
  const safeUser={
    _id:user._id,
    name:user.name,
    username:user.username,
    email:user.email,
    role:user.role
  }
  const options={
        httpOnly:true,
        secure:true,
        sameSite:"Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 
    }
  return res
  .status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",refreshToken,options)
  .json(new ApiResponse(200,{safeUser,accessToken},"User logged in successfully"))
})
const logoutUser=asyncHandler(async(req,res)=>{
   console.log("The user is comming as",req.user) 
   const userId=req.user?._id
   if(!userId)
   {
    throw new ApiError(401,"The given user is undefined or null or empty")
   }
   await User.findByIdAndUpdate(userId,
    { $set:
      {
      refreshToken: undefined
      }
    },
      {
      new : true
      })
      const options={
      httpOnly:true,
      secure:true
      }
   return res
   .status(200)
   .clearCookie("accessToken",options)
   .clearCookie("refreshToken",options)
   .json(new ApiResponse(200,{},"User Successfully Logged Out"))
})
export {
    generateAccessAndRefreshToken,
    registerUser,
    loginUser,
    logoutUser
}