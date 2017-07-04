import React from 'react';
import { shallow } from 'enzyme';
import CatsList from './cats-list';
import Cat from './cat'; 
 

describe('cat list component tests', () => {
		
		const cats = [
			{name: 'Socks', picture: 'https://picsofsocks.com/1'},
			{name: 'Loki', picture: 'https://picsofloki.com/1'},
			{name: 'Daisy', picture: 'https://picsofdaisy.com/1'},
			{name: 'Jackson', picture: 'https://picsofjackson.com/1'}
		]

		const emptyList = []

	it('should render the entire list of cats', () => {
		const wrapper = shallow(<CatsList cats={ cats } />);
		expect(wrapper.find(Cat)).toHaveLength(cats.length);
	}); 

	it('should not render any cats', () => {
		const wrapper = shallow(<CatsList cats={ emptyList } />);
		expect(wrapper.find(Cat)).toHaveLength(0);
	}); 


});

