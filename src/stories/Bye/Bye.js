import React from "react";
import PropTypes from "prop-types";

/**안녕하세요
 * 반갑습니다
 */
const Bye = ({ name, big }) => {
  return (
    <>{big ? <h1>안녕히 가세요, {name}</h1> : <p>안녕히 가세요, {name}</p>}</>
  );
};

Bye.propTypes = {
  /** 보여주고 싶은 이름 */
  name: PropTypes.string,
  /** 큰 사이즈로 할까 */
  big: PropTypes.bool,
};

Bye.defaultProps = {
  name: "test",
  big: false,
};

export default Bye;
