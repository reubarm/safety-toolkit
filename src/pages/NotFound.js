import { Link } from "react-router-dom";

/**
 * Page not found (404) component
 */
export const NotFound = () => (
  <div className="not-found">
    <h1>Check your internet connection</h1>
    <h2>Document not found</h2>
    <p>
      <Link to="/">Return to Home</Link>
    </p>
  </div>
);
