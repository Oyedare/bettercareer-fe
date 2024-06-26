import classNames from 'classnames';

import ViewIcon from '@labs/icons/dashboard/view.svg';

type InputProps = {
	wrapperProps?: React.ComponentPropsWithoutRef<'div'>;
	inputProps: React.ComponentPropsWithoutRef<'input'>;
};

export default function Input({ wrapperProps, inputProps }: InputProps) {
	return (
		<div
			{...wrapperProps}
			className={classNames(
				wrapperProps?.className,
				'mt-3 rounded-xl relative border-[#e7e9eb] border border-solid py-5 pe-10 shadow-sm sm:text-sm'
			)}
		>
			<input
				type={inputProps.type}
				id={inputProps.id}
				placeholder={inputProps.placeholder}
				className="w-full outline-none border-none px-4"
				minLength={8}
				required
				{...inputProps}
			/>
			<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
				<button type="button" className="text-gray-600 hover:text-gray-700">
					<span className="sr-only">{inputProps.placeholder}</span>
					<ViewIcon className="w-4 h-4" />
				</button>
			</span>
		</div>
	);
}
