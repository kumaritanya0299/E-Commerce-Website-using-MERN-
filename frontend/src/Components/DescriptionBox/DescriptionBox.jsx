import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is a platform where goods and services are traded between buyers and sellers over the internet. It is any site that facilitates the buying and selling of products and services. E-commerce can take place within a company's smartphone app, on a social media platform, or in an online marketplace</p>
        <p>
        Some popular ecommerce platforms include Shopify, WooCommerce, Magento, and BigCommerce. They offer various features such as customizable templates, secure payment gateways, and integrations with other business tools.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
