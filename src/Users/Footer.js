import React from "react";
export default function Footer() {
  return (
    <footer>
      {/* <!-- should be located in the middle  --> */}
      <div>
        <p>
          Created By{" "}
          <a href="linkedIn info" target="_blank">
            Besker T
          </a>
        </p>
      </div>

      <div className="contacts">
        {/* <!-- will be located on the left hand sign when it's on mobile  and desktop--> */}

        <ul>
          <li>
            <a
              href="https://linkedin.com/in/besker-telisma"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              linkedin
            </a>
          </li>

          <li>
            <a
              href="https://github.com/besker1"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
