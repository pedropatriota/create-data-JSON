import styled from "styled-components";
import Select from "react-select";

export const ReactSelect = styled(Select)`
  .react-select__control {
    width: 100%;
    background-color: #f8fbff;
    box-shadow: 0 0 0 transparent;
    min-height: 2.87rem;
  }

  .react-select__single-value {
    color: #000;
  }

  .react-select__menu {
    width: 12.5rem;
    background-color: #fff;
    color: #000;
  }

  .react-select__control--is-disabled {
    background-color: #ccc;
  }

  .react-select__dropdown-indicator,
  .react-select__indicator-separator {
    display: none;
  }
`;
