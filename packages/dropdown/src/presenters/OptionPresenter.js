import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import { ThemeContext } from "@hig/theme-context";
import { CheckmarkSUI, CheckmarkXsUI } from "@hig/icons";
import { createButtonEventHandlers } from "@hig/utils";
import stylesheet from "./OptionPresenter.stylesheet";

function OptionWrapper(props) {
  const {
    children,
    disabled,
    id,
    onClick,
    onMouseDown,
    onMouseMove,
    selected,
    highlighted,
  } = props;

  const { handleClick, handleKeyDown } = createButtonEventHandlers(onClick);

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => (
        <div
          aria-selected={selected}
          className={css(
            stylesheet(
              { disabled, selected, highlighted, ...props },
              resolvedRoles
            ).option
          )}
          disabled={disabled}
          id={id}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          role="option"
          tabIndex="0"
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

OptionWrapper.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  selected: PropTypes.bool,
};
const OptionPresenter = (props) => {
  const { children, selected, ...otherProps } = props;

  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const Icon =
          metadata.densityId === "medium-density"
            ? CheckmarkSUI
            : CheckmarkXsUI;
        const styles = stylesheet(props, resolvedRoles);

        return (
          <OptionWrapper selected={selected} {...otherProps}>
            <span>{children}</span>
            <div className={css(styles.optionCheckWrapper)}>
              <Icon />
            </div>
          </OptionWrapper>
        );
      }}
    </ThemeContext.Consumer>
  );
};

OptionPresenter.displayName = "OptionPresenter";

OptionPresenter.propTypes = {
  /**
   * Visual representation of the option
   */
  children: PropTypes.node,
  /**
   * Indicates the option is currently highlighted.
   * This is comparable to hover state, but useful when interacting by keyboard.
   */
  highlighted: PropTypes.bool,
  /**
   * Called when user finishes clicking on an option
   */
  onClick: PropTypes.func,
  /**
   * Called when user begins clicking on an option
   */
  onMouseDown: PropTypes.func,
  /**
   * Called when user moves mouse over the option
   */
  onMouseMove: PropTypes.func,
  /**
   * Indicates the option is currently selected
   */
  selected: PropTypes.bool,
};

export default OptionPresenter;
