import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  author = 'Isneha Manandhar'
}) => {
  const siteTitle = 'Isneha Manandhar | Fullstack Developer';
  const fullTitle = title ? `${title} | Isneha Manandhar` : siteTitle;
  const siteDescription = description || 'Isneha Manandhar - Fullstack Developer based in Pokhara, Nepal. Specializing in React, Tailwind CSS, and modern web development.';
  const siteUrl = url || 'https://isnehamanandhar.com.np';
  const siteImage = image || 'https://isnehamanandhar.com.np/images/og-image.jpg';
  const siteKeywords = keywords || 'Isneha Manandhar, Fullstack Developer, React Developer, Web Developer, Pokhara Nepal';

  return (
    <Helmet>
      <html lang="en" />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEO;