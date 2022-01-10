import React from "react";

export default function button() {
  return (
    <div class="buttons">
      <button class="blob-btn">
        Order Again
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
    </div>
  );
}
