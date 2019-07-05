import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todo-item';
import ToggleAll from './toggle-all';
import Footer from './footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/todo-filters';

import { State } from '../interfaces/index';

const TODO_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: (todo) => !todo.completed,
	[SHOW_COMPLETED]: (todo) => todo.completed
};

function TodoList({ todos, filter }: State) {
	let filteredTodos = todos.filter(TODO_FILTERS[filter]);

	return (
		<section className="main">
			<ToggleAll />
			<ul className="todo-list">
				{filteredTodos.map(todo => (
					<TodoItem key={ todo.id } todoId={ todo.id } />
				))}
			</ul>
			<Footer />
		</section>
	);
}

export default connect((state: State) => state)(TodoList);