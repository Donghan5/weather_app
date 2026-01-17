import React from 'react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

interface SearchBarProps {
	onSearch: (city: string) => void;
	isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
	const [searchValue, setSearchValue] = React.useState('');
	const [error, setError] = React.useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!searchValue.trim()) {
			setError('Please enter a city name');
			return;
		}
		setError('');
		onSearch(searchValue.trim());
	}
	
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-row gap-2 items-center w-full max-w-md"
		>
			<div className="flex-1">
				<Input
					placeholder="Enter a city name (e.g. Paris)"
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
						if (error) setError('');
					}}
					error={error}
				/>
			</div>
			<Button disabled={isLoading}>
				{isLoading ? '...' : 'Search'}
			</Button>
		</form>
	);
};
