import { useState } from 'react';

const Toggle = ({
	label,
	toggled,
	onClick,
}: {
	label: string;
	toggled: boolean;
	onClick: (isToggled: boolean) => void;
}) => {
	const [isToggled, toggle] = useState(toggled);

	const handleClick = () => {
		toggle(!isToggled);
		onClick(!isToggled);
	};

	return (
		<label>
			<input
				type="checkbox"
				defaultChecked={isToggled}
				onClick={handleClick}
			/>
			<span />
			<strong>{label}</strong>
		</label>
	);
};

export default Toggle;
