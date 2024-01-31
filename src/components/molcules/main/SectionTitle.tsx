type SectionTitleProps = {
	title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
	return (
		<h2 className="w-full typography-Body1 typography-M text-Black bg-Title_Background text-center py-3">
			{title}
		</h2>
	);
};

export default SectionTitle;
