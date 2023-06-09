export const Loader = () => {
	const style = {
		margin: 'auto',
		background: 'none',
		display: 'block',
		shapeRendering: 'auto'
	}
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			style={style as any}
			width='231px'
			height='231px'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
		>
			<circle
				cx='50'
				cy='50'
				r='25'
				strokeWidth='6'
				stroke='#ff9902'
				strokeDasharray='39.269908169872416 39.269908169872416'
				fill='none'
				strokeLinecap='round'
			>
				<animateTransform
					attributeName='transform'
					type='rotate'
					repeatCount='indefinite'
					dur='0.819672131147541s'
					keyTimes='0;1'
					values='0 50 50;360 50 50'
				></animateTransform>
			</circle>
		</svg>
	)
}
