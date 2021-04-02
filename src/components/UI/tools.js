import styles from '@/styles/tool.module.css';

const Tool = (props) => {
	const { children } = props;
	return (
		<div className={styles.wrapper}>
			<div className={styles.tool}>
				<div className={styles.child} />
				<div className={styles.child} />
				<div className={styles.child} />
			</div>

			<div className={styles.tool}>
				<div className={styles.child} />
				<div className={styles.child}>{children}</div>
				<div className={styles.child} />
			</div>
			<div className={styles.tool}>
				<div className={styles.child} />
				<div className={styles.child} />
				<div className={styles.child} />
			</div>
		</div>
	);
};

export default Tool;
