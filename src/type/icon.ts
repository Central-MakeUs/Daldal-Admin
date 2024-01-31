import { ColorKey } from '@constants/colors';

export type IconId = 'plus' | 'refresh';

export type IconProps = {
	id: IconId;
	color: ColorKey;
	size?: number;
	width?: number;
	height?: number;
};
