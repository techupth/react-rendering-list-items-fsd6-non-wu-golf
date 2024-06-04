/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Title() {
  return (
    <h1
      className="title"
      css={css`
        margin-top: 5rem;
        font-size: 50px;
      `}
    >
      Movie List Section
    </h1>
  );
}

export default Title;
