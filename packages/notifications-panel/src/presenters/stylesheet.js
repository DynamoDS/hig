import { types } from "../types";

function getRulesByTransitionStatus(transitionStatus) {
  if (transitionStatus === "exiting") {
    return { height: 0, opacity: 0 };
  }
  if (transitionStatus === "exited") {
    return { display: "none" };
  }
  return {};
}

function getRulesByType(type, themeData) {
  switch (type) {
    case types.ERROR:
      return { borderLeftColor: themeData["colorScheme.status.error"] };
    case types.WARNING:
      return { borderLeftColor: themeData["colorScheme.status.warning"] };
    case types.SUCCESS:
      return { borderLeftColor: themeData["colorScheme.status.success"] };
    default:
      return {
        borderLeftColor: themeData["basics.colors.primary.autodeskBlue.500"],
      };
  }
}

export default function stylesheet(props, themeData) {
  const {
    hasHover,
    loadingTransitionState,
    showCount,
    stylesheet: customStylesheet,
    transitionStatus,
    type,
    unread,
  } = props;
  const isEntering =
    loadingTransitionState === `entering` ||
    loadingTransitionState === `entered`;
  const styles = {
    dismissButton: {
      display: `none`,
      position: `absolute`,
      top: 0,
      right: 0,
      ...(hasHover ? { display: `block` } : {}),
    },
    notification: {
      position: `relative`,
      overflow: `hidden`,
      transitionProperty: `height, opacity`,
      transitionDuration: `300ms`,
      transitionTimingFunction: `ease`,
      "&:last-child": {
        borderBottom: `none`,
      },
      ...(transitionStatus ? getRulesByTransitionStatus(transitionStatus) : {}),
      ...(hasHover
        ? { backgroundColor: themeData["colorScheme.background.filled.level100To250.hover"] }
        : {}),
    },
    notificationContent: {
      display: `flex`,
      borderBottom: `1px solid ${themeData["divider.heavyColor"]}`,
      borderLeft: `3px solid #bec8d2`,
      ...(unread
        ? getRulesByType(type, themeData)
        : { borderLeftColor: `rgba(128, 128, 128, 0.4)` }),
    },
    notificationContentImage: {
      margin: `${themeData["density.spacings.small"]} 0 ${themeData["density.spacings.small"]} ${themeData["density.spacings.small"]}`,
    },
    notificationContentText: {
      margin: `${themeData["density.spacings.small"]}`,
      wordWrap: `break-word`,
      overflow: `hidden`,
      b: {
        fontSize: '12px',
        fontWeight: 'bold'
      },
      a: {
        fontSize: '12px',
        fontWeight: '200'
      },
    },
    notificationDescription: {
      p: {
        fontSize: '12px',
        fontWeight: '200'
      }
    },
    panelTitle: {
      padding: `${themeData["density.spacings.small"]}
        ${themeData["density.spacings.large"]}`,
      borderBottom: `1px solid ${themeData["divider.heavyColor"]}`,
      fontWeight: 'bold'
    },
    panelContainer: {
      width: `100%`,
      overflowY: `auto`,
      overflowX: `hidden`,
    },
    panelLoading: {
      display: `flex`,
      boxSizing: `border-box`,
      justifyContent: `center`,
      alignItems: `center`,
      height: 0,
      overflow: `hidden`,
      backgroundColor: `transparent`,
      opacity: `0`,
      transitionProperty: `height, opacity`,
      transitionDuration: `300ms`,
      transitionTimingFunction: `ease`,
      pointerEvents: `none`,
      ...(isEntering ? { height: `44px`, opacity: 1 } : {}),
    },
    notificationsFooter:{
      height: '2.5rem',
      backgroundColor: 'white',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '0.5rem',
      marginBottom: '0px'
    },
    indicator: {
      display: `flex`,
      position: `relative`,
    },
    indicatorCount: {
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      height: `13px`,
      padding: `0 3px`,
      fontSize: `11px`,
      lineHeight: `13px`,
      border: `1px solid ${themeData["colorScheme.surface.level100"]}`,
      color: themeData["basics.colors.primary.white"],
      backgroundColor: `#0696d7`,
      borderRadius: `4px`,
      pointerEvents: `none`,
      fontWeight: 400,
      fontFamily: themeData["notifications.fontFamily"],
      margin: 0,
      ...(showCount ? { display: `block` } : { display: `none` }),
    },
    image: {
      height: `48px`,
      width: `48px`,
      overflow: `hidden`,
      borderRadius: `4px`,
    },
    emptyState: {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
    },
    emptyStateImage: {
      margin: `15px`
    },
    emptyStateTitle: {
      fontFamily: themeData["notifications.fontFamily"],
      fontSize: `14px`,
      textAlign: `center`
    },
    emptyStateMessage: {
      fontSize: `12px`,
      fontFamily: themeData["notifications.fontFamily"],
      margin: `10px 0 30px`,
      textAlign: `center`,
      width: `80%`
    },
  };

  return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
}
