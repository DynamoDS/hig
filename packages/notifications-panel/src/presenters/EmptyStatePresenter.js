import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import Typography from "@hig/typography";

import Bell from "./Bell.svg";
import stylesheet from "./stylesheet";

export default function EmptyStatePresenter({
	title,
	message,
	image,
	stylesheet: customStylesheet,
}) {
	const styles = stylesheet({ stylesheet: customStylesheet }, {});
	const defaultImage = (
		<Bell role="presentation" className={css(styles.emptyStateImage)} />
	);
	return (
		<div className={css(styles.emptyState)}>
			{image ? image : defaultImage}
			<Typography variant={"h3"} style={styles.emptyStateTitle}>{title}</Typography>
			<Typography style={styles.emptyStateMessage}>{message}</Typography>
		</div>
	);
}

EmptyStatePresenter.defaultProps = {
	message: "You currently have no notifications",
};

EmptyStatePresenter.propTypes = {
  title: PropTypes.string,
	message: PropTypes.string,
	stylesheet: PropTypes.func,
};
