import Icon from '@components/atoms/Icon';
import { IconProps } from '@type/icon';

type ButtonWithIconProps = {
	icon: IconProps;
	title: string;
	action: () => void;
};
const ButtonWithIcon = ({ icon, title, action }: ButtonWithIconProps) => {
	return (
		<button
			onClick={action}
			className="flex gap-2 bg-White px-3 py-[5px] border"
		>
			<Icon {...icon} />
			<h6 className="typography-Body1 typography-M text-Black">{title}</h6>
		</button>
	);
};

export default ButtonWithIcon;
