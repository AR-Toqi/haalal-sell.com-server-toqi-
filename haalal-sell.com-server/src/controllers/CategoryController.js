const {AllCategory} = require("../services/ProductService");
const CategoryModel = require("../models/CategoryModel");
exports.CategoryList = async (req, res) => {
  let result = await AllCategory(req)
  return res.status(200).json(result);
};

// Create Category

exports.createCategory = async (req, res) => {
  
  const { categoryName, categoryImg } = req.body;

  try {
   
    const category = await CategoryModel.create({
      categoryName,
      categoryImg,
    });

    return res.status(200).json(category);
  } catch (error) {
  
    return res.status(500).json({ error: "Failed to create category" });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  const { categoryID, categoryName, categoryImg } = req.body;

  try {
    const category = await CategoryModel.findByIdAndUpdate(
      categoryID,
      {
        categoryName,
        categoryImg,
      },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }else {
      return res.status(200).json({ message: "Category updated successfully" });
    }

  } catch (error) {
    return res.status(500).json({ error: "Failed to update category" });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  const { categoryID } = req.body;
  try{
    const category = await CategoryModel.findByIdAndDelete(categoryID);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }else {
      return res.status(200).json({ message: "Category deleted successfully" });
    }
  }
catch(error){
  return res.status(500).json({ error: "Failed to update category" });
  }
}


