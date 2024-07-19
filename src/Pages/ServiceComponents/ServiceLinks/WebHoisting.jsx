import React from 'react';

function WebHoisting() {
  return (
    <div className="p-4 sm:p-8 bg-black min-h-screen">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-cyan-400 mb-20">Website Hoisting, Domain Purchasing, and SEO Optimization</h2>

      <section className="mb-12 bg-gradient-to-r from-transparent via-gray-900 to-transparent sm:p-6 p-2 rounded-lg shadow-lg ">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 tracking-wider">Website Hoisting with <span className="text-blue-600">Hoistinger</span></h3>
        <p className="mb-4 text-lg sm:text-xl tracking-wider">
          involves making your website accessible on the internet.
          <span className="italic"> Hoistinger provides the infrastructure to store and serve your website files.</span>
          It includes:
        </p>
        <ul className="list-disc pl-6 mb-4 leading-loose tracking-wider text-gray-400 text-md sm:text-lg">
          <li>Uploading website files (HTML, CSS, JavaScript) to Hoistinger's servers.</li>
          <li>Configuring domain settings and ensuring security measures are in place.</li>
          <li>Deploying updates and managing scalability as your website grows.</li>
        </ul>
        <div className="mt-2 text-blue-500 hover:text-blue-700 cursor-pointer">Learn more about hosting solutions</div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-transparent via-gray-900 to-transparent sm:p-6 p-2 rounded-lg shadow-lg ">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-green-500 tracking-wider">Domain Purchasing</h3>
        <p className="mb-4 text-lg sm:text-xl tracking-wider">
          involves registering a unique domain name (e.g., www.yourwebsite.com) to establish your
          online presence. <span className="text-green-600">Key aspects include:</span>
        </p>
        <ul className="list-disc pl-6 mb-4 leading-loose tracking-wider text-gray-400 text-md sm:text-lg">
          <li>Choosing a domain name that reflects your brand or business.</li>
          <li>Registering the domain through a registrar like <span className="italic">GoDaddy or directly through AWS Route 53.</span></li>
          <li>Linking the domain to your hosting provider (Hoistinger or AWS) using DNS settings.</li>
          <li>Managing domain renewals and privacy settings.</li>
        </ul>
        <div className="mt-2 text-green-500 hover:text-green-700 cursor-pointer">Explore domain registration options</div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-transparent via-gray-900 to-transparent sm:p-6 p-2 rounded-lg shadow-lg ">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-purple-500 tracking-wider">SEO Optimization with <span className="text-purple-600">AWS</span></h3>
        <p className="mb-4 text-lg sm:text-xl tracking-wider">
          SEO optimization using AWS enhances your website's visibility and performance in search engine results.
          <span className="italic"> AWS offers:</span>
        </p>
        <ul className="list-disc pl-6 mb-4 leading-loose tracking-wider text-gray-400 text-md sm:text-lg">
          <li>Scalable hosting solutions to handle traffic spikes and improve site speed.</li>
          <li>Content delivery network (CDN) services like <span className="italic">Amazon CloudFront for faster content delivery.</span></li>
          <li>Security services to protect against cyber threats and ensure compliance.</li>
          <li>Analytics tools (e.g., Amazon CloudWatch) to monitor website performance and SEO metrics.</li>
        </ul>
        <div className="mt-2 text-purple-500 hover:text-purple-700 cursor-pointer">Learn more about AWS services for SEO</div>
      </section>

      <section className="bg-gradient-to-r from-transparent via-gray-900 to-transparent sm:p-6 p-2 rounded-lg shadow-lg ">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-500 tracking-wider">Importance of SEO for Any Website</h3>
        <p className="mb-4 text-lg sm:text-xl tracking-wider">
          SEO (Search Engine Optimization) is crucial for maximizing your website's reach and impact. It:
        </p>
        <ul className="list-disc pl-6 mb-4 leading-loose tracking-wider text-gray-400 text-md sm:text-lg">
          <li>Increases organic traffic by improving search engine rankings.</li>
          <li>Builds credibility and authority in your industry.</li>
          <li>Enhances user experience through optimized content and site performance.</li>
          <li>Boosts conversion rates by attracting relevant visitors.</li>
        </ul>
        <div className="mt-2 text-yellow-500 hover:text-yellow-700 cursor-pointer">Understand more about the importance of SEO</div>
      </section>
    </div>
  );
}

export default WebHoisting;
