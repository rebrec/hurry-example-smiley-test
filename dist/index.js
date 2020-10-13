import Plugin from '../../src/core/Plugin'
import Test from './Test.jsx'


export default class TestPlugin extends Plugin{
    constructor(api, context ){
        super(api, context); 
        api.store.uiState.addView('SmileyTest', Test(api)); 
        api.menu.insertMenuItem('Help',{label: "SmileyTest Plugin", click: () => api.store.uiState.showModal('SmileyTest')}, {before: 'About'});
    }
} 