import _ from 'lodash';
Object.assign(Node.prototype, {
	on (e, handler) { return _.castArray(e).map(e => this.addEventHandler(e, handler, true)); }, 
	off(e, handler) { return _.castArray(e).map(e => this.removeEventHandler(e, handler, true)); }, 
	hittest(x, y)
	{
		const { left, top, right, bottom } = this.getBoundingClientRect();
		return _.inRange(x, left, right) && _.inRange(y, top, bottom);
	}, 
});