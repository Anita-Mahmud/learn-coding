import React from 'react';
const Blog = () => {
    return (
        <div>
           <div className="hero m-8" style={{ backgroundImage: `url("187161.webp")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold">What is `cors`</h1>
      <p className="mb-5 text-xl">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
    </div>
  </div>
</div>
<div className="hero mb-8" style={{ backgroundImage: `url("187161.webp")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold text-center">Why are you using `firebase`? What other options do you have to implement authentication?</h1>
      <p className="mb-5 text-xl">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
      </p>
      <p className="mb-5 text-xl">Other options  to implement authentication
      <ul>
        <li>1. Auth0</li>
        <li>2.  MongoDB</li>
        <li>3. Passport</li>
        <li>4. Okta etc.</li>
      </ul>
      </p>
    </div>
  </div>
</div>
<div className="hero mb-8" style={{ backgroundImage: `url("187161.webp")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold text-center">How does the private route work?</h1>
      <p className="mb-5 text-xl">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
      </p>
      
    </div>
  </div>
</div>
<div className="hero mb-8" style={{ backgroundImage: `url("187161.webp")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold text-center">What is Node? How does Node work?</h1>
      <p className="mb-5 text-xl">Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.
      </p>
      <p mb-5 text-xl>Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;