import { reviews } from "../../data/reviews";

export const googleRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);
