import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  let component;
  // beforeEach is going to be called 3 times, one for each 'it' block
  // defining component in beforeEach makes our code 'dry'
  beforeEach(() => {
    //renderComponent return jquery object that contain react component, this is why we can use jquery methods like find etc
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  // th enext two specs are considered very similar this is why we can wrap them around describe
  describe('entering some text', () => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows that text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });

});
