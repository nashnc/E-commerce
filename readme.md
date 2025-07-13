# consumerSide Directory Structure

```plaintext
consumerSide/
├── .gitignore
├── .prettierrc
├── .vscode/
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── american_express.png
│   ├── banner1.webp
│   ├── banner2.webp
│   ├── banner3.webp
│   ├── banner4.webp
│   ├── banner5.webp
│   ├── banner6.webp
│   ├── banner7.webp
│   ├── bannerSmall.png
│   ├── carte_bleue.png
│   ├── logo.jpg
│   ├── master_card.png
│   ├── paypal.png
│   └── visa.png
├── README.md
├── spam.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── BlogSection/
│   │   │   └── BlogSection.jsx
│   │   ├── BreadCrumbs/
│   │   │   └── BreadCrumbs.jsx
│   │   ├── CategoryCollapse/
│   │   │   └── CategoryCollapse.jsx
│   │   ├── Footer/
│   │   │   ├── BottomStrip.jsx
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Part1.jsx
│   │   │   ├── Part2.jsx
│   │   │   └── Part3.jsx
│   │   ├── FreeShipping/
│   │   │   └── FreeShipping.jsx
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Navigation/
│   │   │       ├── CategoryPanel.jsx
│   │   │       ├── Navigation.css
│   │   │       └── Navigation.jsx
│   │   ├── ProductDetailsSub/
│   │   │   ├── AdditionalDetailsOfProducts/
│   │   │   │   ├── AdditionalDetailsOfProducts.css
│   │   │   │   ├── AdditionalDetailsOfProducts.jsx
│   │   │   │   ├── AdditionalDetailsOfProductsReviewTextField.jsx
│   │   │   │   ├── AdditionalDetailsProductDescription.jsx
│   │   │   │   ├── AdditionalDetailsProductDetails.jsx
│   │   │   │   └── AdditionalDetailsProductReview.jsx
│   │   │   ├── ImageZoomSlider/
│   │   │   │   ├── ImageZoomSlider.css
│   │   │   │   └── ImageZoomSlider.jsx
│   │   │   ├── ProductContent/
│   │   │   │   ├── ProductContent.css
│   │   │   │   └── ProductContent.jsx
│   │   │   ├── ProductZoom/
│   │   │   │   └── ProductZoom.jsx
│   │   │   └── VerticalImageSlider/
│   │   │       ├── VerticalImageSlider.css
│   │   │       └── VerticalImageSlider.jsx
│   │   ├── ProductPagination/
│   │   │   ├── ProductPagination.css
│   │   │   └── ProductPagination.jsx
│   │   ├── ProdutscSortBy/
│   │   │   └── ProductsSortBy.jsx
│   │   ├── QuanitiyBox/
│   │   │   ├── QuantityBox.css
│   │   │   └── QuantityBox.jsx
│   │   ├── Search/
│   │   │   ├── Search.css
│   │   │   └── Search.jsx
│   │   ├── Sections/
│   │   │   ├── LeftSection.jsx
│   │   │   ├── RightSection.jsx
│   │   │   └── Section.css
│   │   ├── ShowProductDetailsModal/
│   │   │   ├── ShowProductDetailsModal.css
│   │   │   └── ShowProductDetailsModal.jsx
│   │   ├── SideBar/
│   │   │   ├── SideBar.css
│   │   │   ├── SideBar.jsx
│   │   │   └── ShopBy/
│   │   │       ├── ShopByAvailability.jsx
│   │   │       ├── ShopByCategory.jsx
│   │   │       ├── ShopByRange.jsx
│   │   │       ├── ShopByRating.jsx
│   │   │       └── ShopBySize.jsx
│   │   ├── Sliders/
│   │   │   ├── AdsBannerSlider/
│   │   │   │   ├── AdsBannerSlider.css
│   │   │   │   ├── AdsBannerSlider.jsx
│   │   │   │   └── BannerBox/
│   │   │   │       └── BannerBox.jsx
│   │   │   ├── AdsBannerSliderV2/
│   │   │   │   ├── AdsBannerSliderV2.css
│   │   │   │   ├── AdsBannerSliderV2.jsx
│   │   │   │   └── BannerBoxV2/
│   │   │   │       ├── BannerBoxV2.css
│   │   │   │       └── BannerBoxV2.jsx
│   │   │   ├── BlogSlider/
│   │   │   │   ├── BlogSlider.css
│   │   │   │   ├── BlogSlider.jsx
│   │   │   │   └── BlogItem/
│   │   │   │       └── BlogItem.jsx
│   │   │   ├── HomeCatSlider/
│   │   │   │   ├── HomeCatSlider.css
│   │   │   │   ├── HomeCatSlider.jsx
│   │   │   ├── HomeSlider/
│   │   │   │   ├── HomeSlider.css
│   │   │   │   ├── HomeSlider.jsx
│   │   │   ├── HomeSliderV2/
│   │   │   │   ├── HomeSliderV2.css
│   │   │   │   ├── HomeSliderV2.jsx
│   │   │   ├── ProductSlider/
│   │   │   │   ├── ProductItemRating.jsx
│   │   │   │   ├── ProductSlider.css
│   │   │   │   ├── ProductSlider.jsx
│   │   │   │   ├── ProductItem/
│   │   │   │   │   ├── ProductItem.css
│   │   │   │   │   ├── ProductItem.jsx
│   │   │   │   ├── ProductItemListView/
│   │   │   │   │   ├── ProductItemListView.css
│   │   │   │   │   └── ProductItemListView.jsx
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   └── Home.jsx
│   │   │   ├── ProductListing/
│   │   │   │   ├── ProductListing.css
│   │   │   │   └── ProductListing.jsx
│   │   ├── ProductDetails/
│   │   │   ├── ProductDetails.css
│   │   │   └── ProductDetails.jsx
