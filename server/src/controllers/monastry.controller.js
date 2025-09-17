import { Monastry } from "../models/monastry.model.js";
import asyncHandler from "../utils/asyncHander.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Fetch all monasteries
const fetchAllMonastry = asyncHandler(async (req, res) => {
  const monasteries = await Monastry.find();

  if (!monasteries || monasteries.length === 0) {
    throw new ApiError(404, "No monasteries found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, monasteries, "Monasteries fetched successfully"));
});

// Fetch single monastery by ID
const fetchMonasteryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const monastery = await Monastry.findById(id);

  if (!monastery) {
    throw new ApiError(404, "Monastery not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, monastery, "Monastery fetched successfully"));
});

export { fetchAllMonastry, fetchMonasteryById };