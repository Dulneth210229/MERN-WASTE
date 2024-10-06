import React from 'react';

function Footer() {
  return (
    <div className="bg-blue-600 text-white text-center py-4">
      <p>&copy; 2024 Fresh Colombo. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
        <a href="/terms-of-service" className="hover:underline"> Terms of Service</a>
      </p>
    </div>
  );
}

export default Footer;
