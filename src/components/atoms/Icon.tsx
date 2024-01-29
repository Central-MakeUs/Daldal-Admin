import iconSvg from '@assets/icon.svg';
import colors from '@constants/colors';
import { IconProps } from '@type/icon';

const Icon = ({ id, color, size, width, height }: IconProps) => {
	return (
		<svg fill={colors[color]} width={size || width} height={size || height}>
			<use href={`${iconSvg}#${id}`} />
		</svg>
	);
};

export default Icon;
