import asyncHandler from "../utils/asyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Archives } from "../models/archives.model.js";

const fetchAllArchives = asyncHandler(async (req, res) => {
  const archives = await Archives.find();

  if (!archives || archives.length === 0) {
    throw new ApiError(404, "No monasteries found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, archives, "Monasteries fetched successfully"));
});

export {fetchAllArchives};