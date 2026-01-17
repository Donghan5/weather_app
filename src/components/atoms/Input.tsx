import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	helperText?: string;
}

export const Input = ({
	label,
	error,
	helperText,
	className = '',
	...props
}: InputProps) => {
	return (
		<div className="flex flex-col gap-1 w-full">
			{label && (
				<label className="text-sm font-medium text-gray-700">
					{label}
				</label>
			)}

			<input
				className={`
					w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200
					${error 
						? 'border-red-500 focus:ring-2 focus:ring-red-200' 
						: 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
					}
					${className}
				`}
				{...props}
			/>

			{helperText && (
				<p className="text-xs text-gray-500 mt-1">
					{helperText}
				</p>
			)}

			
			{error && (
				<p className="text-xs text-red-500 mt-1">
					{error}
				</p>
			)}
		</div>
	);
};