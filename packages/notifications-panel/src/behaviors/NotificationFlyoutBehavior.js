/* eslint-disable react/no-unused-prop-types */

import { Component } from "react";
import PropTypes from "prop-types";

import parseNotifications from "./parseNotifications";

/** @typedef {import("./parseNotifications").Input} NotificationsInput */
/** @typedef {import("./parseNotifications").ParsedNotification} ParsedNotification */
/** @typedef {import("./NotificationBehavior").Payload} NotificationBehaviorPayload */

/**
 * @typedef {Object} Payload
 * @property {Function} dismissNotification
 * @property {ParsedNotification[]} notifications
 * @property {boolean} showUnreadCount
 * @property {number} unreadCount
 */

/**
 * @typedef {Object} Props
 * @property {function(Payload): import("react").ReactElement} [children]
 * @property {NotificationsInput} [notifications]
 * @property {number} [unreadCount]
 */

/**
 * @typedef {Object} State
 * @property {string[]} dismissedNotifications An array of notification IDs that have been dismissed
 * @property {ParsedNotification[]} notifications
 * @property {string[]} readNotifications An array of notification IDs that have been read
 */

export default class NotificationFlyoutBehavior extends Component {
  /** @type {Props} */
  props;

  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    /** Render prop */
    children: PropTypes.func.isRequired,
    /** Rendered notifications */
    notifications: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.node, PropTypes.shape({})])
      ),
    ]),
    /** When provided, it overrides the derived unread notification count */
    unreadCount: PropTypes.number,
  };

  /** @type {State} */
  // eslint-disable-next-line react/state-in-constructor
  state = {
    dismissedNotifications: [],
    readNotifications: [],
  };

  /**
   * @returns {ParsedNotification[]}
   */
  getNotifications() {
    const { dismissedNotifications, readNotifications } =
      this.state;

    const updateReadStatus = ({ id, unread, ...otherProps }) => ({
      id,
      unread: unread && !readNotifications.includes(id),
      ...otherProps,
    });
    const isNotDismissed = ({ id }) => !dismissedNotifications.includes(id);

    return this.props.notifications.map(updateReadStatus).filter(isNotDismissed);
  }

  /** @returns {number} */
  getUnreadCount() {
    const { unreadCount: controlledUnreadCount } = this.props;

    return controlledUnreadCount !== undefined
      ? controlledUnreadCount
      : this.deriveUnreadCount();
  }

  /**
   * Action to dismiss a notification
   * @param {string} id
   */
  dismissNotification = (id) => {
    this.setState((prevState) => {
      const updatedNotifications = prevState.dismissedNotifications.includes(id);
      if(updatedNotifications) return;
      return { dismissedNotifications: prevState.dismissedNotifications.concat(id) }
    });
    this.props.markNotificationAsRead(id);
    // This function let NotificationCenter knows about any change done in NotificationsPanel
    // so then we could trigger the function that shares the NotificationCenter height to Dynamo
    this.props.notificationChanged();
  };

  /**
   * Handler for when the flyout opens
   */
  handleClose = () => {
    this.markAllNotificationsRead();
  };

  /**
   * @param {ParsedNotification[]} notifications
   */
  deriveUnreadCount() {
    return this.getNotifications().reduce(
      (count, { unread }) => (unread ? count + 1 : count),
      0
    );
  }

  markAllNotificationsAsRead() {
    const notifications = this.getNotifications();
    const updatedNotifications = notifications.map(notification => {
      if(notification.unread === false) return notification;
      return {
        ...notification,
        unread: false
      }
    })
    this.setNotificationsInput(updatedNotifications);
    this.setState({ readNotifications: updatedNotifications.map(notification => notification.id) });
  }
  /**
   * @returns {import("react").ReactElement}
   */
  render() {
    const { dismissNotification, handleClose } = this;
    const notifications = this.props.notifications;
    const unreadCount = this.getUnreadCount();
    const showUnreadCount = unreadCount > 0;

    return this.props.children({
      dismissNotification,
      handleClose,
      notifications,
      showUnreadCount,
      unreadCount,
    });
  }
}
