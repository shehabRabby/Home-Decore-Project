export const loadWishList = () => {
  try {
    const data = localStorage.getItem("wishList");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};


