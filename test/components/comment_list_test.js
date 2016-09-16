import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const state =  { comments: [ 'new comment', 'other comment' ] };
    component = renderComponent(CommentList, null, state);
  });

  it('show an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('show each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other comment');
  });

});
