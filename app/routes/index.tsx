// import { Link } from "@remix-run/react";
export default function Index() { 
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to 220Cord&Code</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <a target="_self" href="/magazine" rel="noreferrer">
          Go mangazine
          </a>
          {/* <Link to="/magazine" className="text-blue-500 underline">
            Go mangazine
          </Link> */}
        </li>
      </ul>
     
    </div>
  );
}
