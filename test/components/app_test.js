import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  //use 'it' to test a single attribute of a target
  it('shows the CommentBox', () => {
    //use 'expect' to make an 'assertion' about a target
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows the CommentList', () => {
    expect(component.find('.comment-list')).to.exist;
  })

});
