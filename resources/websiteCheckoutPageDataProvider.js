module.exports = {
  // PRODUCT SEARCH NAMES
  BRAND_NAME_PARTIAL: 'Nik',
  BRAND_NAME1: 'Nike',
  BRAND_NAME2: 'Adidas',
  PRODUCT_SEARCH: 'SHOES',
  PRODUCT_NAME_4: '192751F128015',
  Story_4_data: '',
  PRODUCT_NAME_3: '192751F045002',
  EMAIL_ID: 'clarionone@test.com', // QA Enviornment
  PASSWORD: '123456', // QA Enviornment
  PROD_EMAIL_ID: 'ssense.qa@gmail.com',
  PROD_PASSWORD: '098765Rt',
  FIRST_NAME: 'Riddhi',
  LAST_NAME: 'Naik',
  STREET_ADDRESS: '3123  Doctors Drive',
  CITY: 'Los Angeles',
  ZIP_CODE: '90017',
  PHONE_NUMBER: '310-341-3203',
  TYPO_PRODUCT_SEARCH: 'gucki',
  INCOMPLETE_PRODUCT_SEARCH: 'gu',
  CORRECT_PRODUCT_NAME: 'Gucci',
  CARD_NUMBER: '5105105105105100', // '4111111111111111',
  EXPIRY_MONTH: '02',
  EXPIRY_YEAR: '2025',
  CARD_HOLDER_NAME: 'Riddhi Naik',
  SECURITY_CODE: '123',
  TEST_DATA_8: '191451M193019',
  lang_array: ['English', 'Français', '日本語', '中文'],
  message_array: [
    'This item has been added to your bag.',
    'Cet article a été ajouté à votre panier.',
    'サイズをお選びください。',
    '本产品已添加到您的购物袋。',
  ],
  // Test Account for PayPal:
  PP_Username: 'utest@ssense.com',
  PP_Password: 'utest123',
  // AVAILABLE_PRODUCT: '192451M180002',
  AVAILABLE_PRODUCT: '201011M220165',
  AVAILABLE_PROD_SIZE: '44_192451M18000201',
  SIZE_COMBO: ['9', '42'],
  // Test data for register new user
  REG_EMAIL_ID: 'hsneha30@gmail.com',
  REG_PASSWORD: 'Testingssense@123',
  Payment_Heading: 'PAYMENT SUCCESSFUL',
  Exp_Order_Confirmation_Text:
    'is being processed and will be shipped shortly.',
  OrderTotalAlert:
    'Your order total has changed to reflect the import duties of your new destination. Please check your Order Summary for details.',
  Sorted_Product_list_Url:
    'https://qa.ssense.com/en-us/men/socks?sort=price-asc',
  // SignUp
  MENS_PROMO: 'Men',
  WOMENS_PROMO: 'Women',
  NO_THANKS_PROMO: 'NoThanks',
  // Payment Method
  CREDIT_CARD: 'credit',
  ALIPAY: 'alipay',
  PAYPAL: 'paypal',
  // Assertions
  OrderConfirmationMsg: 'processed and will be shipped shortly.',
  OrderConfirmationPay: 'Paypal',
  OrderConfirmationAlipay: 'Alipay',
  OrderConfirmationCC: 'Credit Card',
  // Login
  LOGIN_TITLE: 'Login | SSENSE Canada',
  LOGIN_URL: 'account/login',
  LOGIN_PAGE_LOADING_ERROR: 'login/Signup page page is not loaded yet',
  COUNTRY: 'China',
  STATE: 'Gansu',
  CITY_NAME: 'Bejing',
  Paypal_Method_Type: 'paypal',

  // Test Data for error messages, success messages, validation messages, page hading, page title
  orderConfirmationTitle: 'Order Confirmation | SSENSE Canada',
  Expected_Paypal_payment_method_order_confirmation: 'Paypal',
  IncorrectAccessoriesHeadingMessage: 'Heading on Accessories does not match',
  IncorrectSocsHeadingMessage: 'Heading on Socs category page does not match',
  CheckoutPageLoadingMessage: 'Checkout Page is not loaded yet',
  OrderConfirmationPageLoadingMessage:
    'Order Confirmation page is not displayed',
  PaymentTypeTextDisplayMessage:
    'Incorrect payment method is displayed on Order confirmation',
  PasswordInputDisplayMessage:
    'Failed::Password inputbox should not present on order confirmation for member user',
  CreateAccountButtonDisplayMessage:
    'Failed::Create Account button should not present on order confirmation for member user',
  CheckoutPageTitle: 'Checkout | SSENSE Canada',
  AccessoriesPageHeading: 'Accessories',
  SocsPageHeading: 'Socks',
  Expected_alipay_payment_method_order_confirmation: 'Alipay',
  alipay_payment_method: 'alipay',
  PDP_PAGE_LOADING_ERROR: 'Product description page is not loaded yet',
  CREDIT_CARD_PAYMENT_METHOD: 'credit',
  Exp_cc_payment_method_order_confirmation: 'MASTERCARD',
  /**
   * Gmail
   */
  GMAIL_URL: 'https://mail.google.com/mail/',
  GMAIL_SIGNIN_TXT: 'Sign in',
  GMAIL_INBOX_URL: 'https://mail.google.com/mail/u/0/#inbox',
  GMAIL_EMAIL: 'autowebdriverio@gmail.com',
  GMAIL_PASSWORD: 'AKtest1234',
  GMAIL_NO_MESSAGE: 'No messages matched your search',
  
  Exp_Banner_Text_WishList:
    'To use the Wishlist, please log in or create an account.',
  Banner_Text_Error: 'FAILED: Incorrect banner text/message is displayed',
  Banner_Display_Error: 'FAILED: Banner is not displayed on login page!!',
  Login_page_heading: 'Login',
  Login_Page_Heading_Error:
    'FAILED: Incorrect heading or User is not redirected on Login page!! ',
  Login_Link_Display_Error:
    'FAILED: Either Login link is not displayed OR User is logged in!! ',
  Expected_WishListButton_Text: 'IN WISHLIST',
  WishListButtonTextError:
    'FAILED: Incorrect text is displayed for WishList button!!',
  Exp_Banner_Text_logged_in_user: 'Added to Wishlist',
  Exp_WishList_Heading: 'Wishlist',
  WishListHeading_Error: 'FAILED: Incorrect wish list page hading is displayed',
  WishListProductError:
    'FAILED: Product on wishlist is different than selected from PDP',
  RemainOnPDP_onWishListClick_Error:
    'FAILED: User does not remain on PDC on Add to Wishlist button click',
  Login_SameEmail_Error: 'A member with same email already exists',
};
