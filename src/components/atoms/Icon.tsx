import iconSvg from '@assets/icon.svg';
import colors, { ColorKey } from '@constants/colors';
import { IconId } from '@type/icon';

type IconProps = {
	id: IconId;
	color: ColorKey;
	size?: number;
	width?: number;
	height?: number;
};

const Icon = ({ id, color, size, width, height }: IconProps) => {
	return (
		<svg fill={colors[color]} width={size || width} height={size || height}>
			<use href={`${iconSvg}#${id}`} />
		</svg>
	);
};

export default Icon;
