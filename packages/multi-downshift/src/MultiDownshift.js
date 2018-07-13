import React from "react";
import Downshift from "downshift";
import { combineEventHandlers } from "@hig/utils";

/**
 * @typedef {import("downshift").DownshiftProps<any>} Props
 */

/**
 * @typedef {Object} GetRemoveButtonPropsOptions
 * @property {function(MouseEvent)} onClick
 * @property {any} item
 */

/**
 * @typedef {import("downshift").ControllerStateAndHelpers<any>} ControllerStateAndHelpers
 * @property {function(GetRemoveButtonPropsOptions): any} getRemoveButtonProps
 * @property {any[]} selectedItems
 */

export default class MultiDownshift extends React.Component {
  static propTypes = {
    ...Downshift.propTypes
  };

  state = {
    selectedItems: []
  };

  /**
   * @param {import("downshift").ControllerStateAndHelpers<any>} downshift
   * @returns {ControllerStateAndHelpers}
   */
  getStateAndHelpers(downshift) {
    const { selectedItems } = this.state;
    const { getRemoveButtonProps } = this;
    const getInputProps = this.createInputPropsGetter(downshift);

    return {
      ...downshift,
      getRemoveButtonProps,
      selectedItems,
      getInputProps
    };
  }

  /**
   * @param {GetRemoveButtonPropsOptions} options
   * @returns {any}
   */
  getRemoveButtonProps = ({ onClick, item, ...props } = {}) => {
    /**
     * @param {MouseEvent} event
     */
    const handleRemoveButtonClick = event => {
      event.stopPropagation();
      this.unselectItem(item);
    };

    const handleClick = combineEventHandlers(onClick, handleRemoveButtonClick);

    return {
      ...props,
      onClick: handleClick
    };
  };

  /**
   * @returns {import("downshift").ControllerStateAndHelpers}
   */
  getDownshiftProps() {
    const { children, ...passThruProps } = this.props;

    return {
      ...passThruProps,
      stateReducer: this.stateReducer,
      onChange: this.handleChange
    };
  }

  /**
   * @param {import("downshift").DownshiftState<any>} state
   * @param {import("downshift").StateChangeOptions<any>} changes
   * @returns {import("downshift").Partial<StateChangeOptions<any>>}
   */
  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: true
        };
      default:
        return changes;
    }
  };

  /**
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   */
  createChangeTrigger(downshift) {
    const multiDownshift = this.getStateAndHelpers(downshift);

    return () => {
      const { onChange } = this.props;
      const { selectedItems } = this.state;

      if (onChange) {
        onChange(selectedItems, multiDownshift);
      }
    };
  }

  /**
   * @param {any} selectedItem
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   */
  handleChange = (selectedItem, downshift) => {
    const { selectedItems } = this.state;
    const triggerChange = this.createChangeTrigger(downshift);

    if (selectedItems.includes(selectedItem)) {
      this.unselectItem(selectedItem, triggerChange);
    } else {
      this.selectItem(selectedItem, triggerChange);
    }
  };

  /**
   * @returns {string}
   * @todo Add intelligent formatting
   */
  selectedItemsToString() {
    const { itemToString } = this.props;
    const { selectedItems } = this.state;

    return selectedItems.map(itemToString).join(", ");
  }

  /**
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   * @returns {function(import("downshift").GetInputPropsOptions): any}
   */
  createInputPropsGetter({ getInputProps }) {
    return props => ({
      ...getInputProps(props),
      value: this.selectedItemsToString()
    });
  }

  /**
   * @param {any} item
   * @param {Function} done
   */
  unselectItem(item, done) {
    const { selectedItems } = this.state;
    const nextSelectedItems = selectedItems.filter(
      selectedItem => selectedItem !== item
    );

    this.setState({ selectedItems: nextSelectedItems }, done);
  }

  /**
   * @param {any} removedItem
   * @param {Function} done
   */
  selectItem(item, done) {
    const { selectedItems } = this.state;
    const nextSelectedItems = [...selectedItems, item];

    this.setState({ selectedItems: nextSelectedItems }, done);
  }

  /**
   * @param {import("downshift").ControllerStateAndHelpers} downshift
   */
  renderPresenter = downshift =>
    this.props.children(this.getStateAndHelpers(downshift));

  render() {
    return (
      <Downshift {...this.getDownshiftProps()}>
        {this.renderPresenter}
      </Downshift>
    );
  }
}
