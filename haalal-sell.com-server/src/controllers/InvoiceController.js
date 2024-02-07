const {
  ProcessInvoice,
  PaymentSuccessService,
  PaymentFailService,
  PaymentCancel,
  PaymentIPN,
  InvoiceListService,
} = require("../services/InvoiceService");
exports.InvoiceCreate = async (req, res) => {
  let result = await ProcessInvoice(req);
  return res.status(200).json(result);
};

exports.InvoiceList = async (req, res) => {
  let result = await InvoiceListService(req);
  return res.status(200).json(result);
};

exports.InvoiceProductList = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "InvoiceCreate",
  });
};

exports.PaymentSuccess = async (req, res) => {
  let result = await PaymentSuccessService(req);
  return res.status(200).json(result);
};

exports.PaymentFail = async (req, res) => {
  let result = await PaymentFailService(req);
  return res.status(200).json(result);
};

exports.PaymentCancel = async (req, res) => {
  let result = await PaymentCancel(req);
  return res.status(200).json(result);
};

exports.PaymentIPN = async (req, res) => {
  let result = await PaymentIPN(req);
  return res.status(200).json(result);
};
