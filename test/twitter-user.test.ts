import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

describe('<twitter-user>', () => {
  let component;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<twitter-user></twitter-user>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <twitter-user>');
    });
  });

  
  describe('user', () => {
    beforeEach(() => {
      component = fixture('<twitter-user></twitter-user>');      /** Set typical complex property. */
      // component.user = User
    });

    it('is rendered', () => {
      // expect(component.$('.content').innerText).to.include('user: ');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<twitter-user>slot content</twitter-user>');
    });

    it('is rendered', () => {
      // Firefox has different output so testing for inclusion instead of exact match.
      expect(component.$('slot').assignedNodes()[0].wholeText).to.include('slot content');
      // TODO: Switch to simpler test when Firefox is no longer polyfilled.
      // expect(component.innerText).equal('slot content');
    });
  });

  describe('--twitter-user-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<twitter-user></twitter-user>');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(250, 250, 250)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture(`
          <div>
            <style>
              twitter-user.blue {
                --twitter-user-background-color: #03A9F4;
              }
            </style>
            <twitter-user class="blue"></twitter-user>
          </div>
        `).querySelector('twitter-user');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): HTMLElement {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as HTMLElement;
}
