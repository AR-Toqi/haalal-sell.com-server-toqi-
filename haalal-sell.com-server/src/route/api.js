const express = require("express");
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const InvoiceController = require("../controllers/InvoiceController");
const AuthVerification = require("../middleware/AuthVerification");

const router = express.Router();

// Brand Category
router.get("/BrandList", BrandController.BrandList);
router.get("/CategoryList", CategoryController.CategoryList);
router.post("/CreateCategory", CategoryController.createCategory);
router.put("/UpdateCategory/:categoryID", CategoryController.updateCategory);
router.delete("/DeleteCategory/:categoryID", CategoryController.deleteCategory);
// // Product
router.get("/SliderList", ProductController.SliderList);
router.get("/ListByCategory/:categoryID", ProductController.ListByCategory);
router.get("/ListBySmilier/:categoryID", ProductController.ListBySmilier);
router.get("/ListByBrand/:brandID", ProductController.ListByBrand);
router.get("/ListByKeyword/:keyword", ProductController.ListByKeyword);
router.get("/ListReview", ProductController.ListReview);
router.get("/ProductDetails/:id", ProductController.ProductDetails);

// product CRUD
router.post("/CreateProduct", ProductController.createProduct);
router.put("/UpdateProduct/:id", ProductController.updateProduct);
router.delete("/DeleteProduct/:id", ProductController.deleteProduct);

// router.post("/ProductDetails", ProductController.CreateProductDetails);
router.get("/ListByRemark/:remark", ProductController.ListByRemark);
router.get("/SuggestionProducts", ProductController.AllProductsList);
router.get("/AllProduct", ProductController.AllProducts);

router.get("/WishList", AuthVerification, ProductController.WishList);
router.post(
  "/CreateWishList",
  AuthVerification,
  ProductController.CreateWishList
);
router.post(
  "/RemoveWishList",
  AuthVerification,
  ProductController.RemoveWishList
);

router.get("/CartList", AuthVerification, ProductController.CartList);
router.post(
  "/CreateCartList",
  AuthVerification,
  ProductController.CreateCartList
);
router.post(
  "/RemoveCartList",
  AuthVerification,
  ProductController.RemoveCartList
);

router.post("/signUp", UserController.SignUp);
router.post("/login", UserController.login);
// // User
// router.post("/UserLogin/:email", UserController.UserLogin);
// router.post("/VerifyLogin/:email/:otp", UserController.VerifyLogin);
router.get("/UserLogout", UserController.UserLogout);
// router.get("/UserLogout", UserController.UserLogout);

// // Profile
router.post(
  "/CreateProfile",
  AuthVerification,
  ProfileController.CreateProfile
);
router.get("/ReadProfile", AuthVerification, ProfileController.ReadProfile);
router.post(
  "/UpdateProfile",
  AuthVerification,
  ProfileController.UpdateProfile
);

// // Invoice
router.post(
  "/InvoiceCreate",
  AuthVerification,
  InvoiceController.InvoiceCreate
);
router.get("/InvoiceList", AuthVerification, InvoiceController.InvoiceList);
router.get(
  "/InvoiceProductList",
  AuthVerification,
  InvoiceController.InvoiceProductList
);
router.get(
  "/PaymentSuccess/:trxId",
  AuthVerification,
  InvoiceController.PaymentSuccess
);
router.get(
  "/PaymentCancel/:trxId",
  AuthVerification,
  InvoiceController.PaymentCancel
);
router.get(
  "/PaymentFail/:trxId",
  AuthVerification,
  InvoiceController.PaymentFail
);
router.get(
  "/PaymentIPN/:trxId",
  AuthVerification,
  InvoiceController.PaymentIPN
);

module.exports = router;
