// import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Magazine</h1>
      {/* <ul>
        <li>
          <Link to="/magazine/1235" className="text-blue-500 underline">
            Go mangazine - 1234
          </Link>
        </li>
        <li>
          <Link to="/" className="text-blue-500 underline">
            Go to main
          </Link>
        </li>
      </ul> */}
       <ul>
        <li>
        <a target="_self" href="/magazine/1234" rel="noreferrer">
          Go mangazine - 1234
          </a>
          {/* <Link to="/magazine/1235" className="text-blue-500 underline">
            Go mangazine - 1234
          </Link> */}
        </li>
        <li>
        <a target="_self" href="/" rel="noreferrer">
          Go main
          </a>
          {/* <Link to="/" className="text-blue-500 underline">
            Go main
          </Link> */}
        </li>
      </ul>
    </div>
  );
}
