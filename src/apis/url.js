const getAllListings =
  process.env.NODE_ENV === "production"
    ? "http://ddunn40495server/rentals-api/api/rent"
    : "http://ddunn40495server/rentals-api/api/rent";

export { getAllListings };
