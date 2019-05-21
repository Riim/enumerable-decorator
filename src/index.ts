export function NonEnumerable(
	_target: Object,
	_propertyName: string,
	propertyDesc?: PropertyDescriptor
): any {
	if (propertyDesc) {
		propertyDesc.enumerable = false;
		return propertyDesc;
	}

	return {
		configurable: true,
		enumerable: false,
		writable: true,
		value: undefined
	};
}

export { NonEnumerable as nonEnumerable };

export function Enumerable(
	_target: Object,
	_propertyName: string,
	propertyDesc?: PropertyDescriptor
): any {
	if (propertyDesc) {
		propertyDesc.enumerable = true;
		return propertyDesc;
	}

	return {
		configurable: true,
		enumerable: true,
		writable: true,
		value: undefined
	};
}

export { Enumerable as enumerable };
