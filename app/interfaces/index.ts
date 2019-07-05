export interface Todo {
	title: string;
	editing: boolean;
	completed?: boolean;
	id?: number;
}
export interface State {
	todos: Todo[];
	filter?: string;
}
export interface Action {
	type: string;
	payload?: {
		id?: number;
		title?: string;
		filter?: string;
	};
}
