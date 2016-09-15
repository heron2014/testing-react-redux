import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {

  //use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    //create an instance of App
    const AppComponent = renderComponent(App);
    //use 'expect' to make an 'assertion' about a target
    expect(AppComponent).to.contain('React simple starter');
  });

});
