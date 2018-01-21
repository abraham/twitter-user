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
      expect(component.$('#content').innerText).to.include('Loading...');
    });
  });


  describe('user', () => {
    beforeEach(async () => {
      component = fixture('<twitter-user></twitter-user>');
      let res = await fetch('./base/test/abraham.json');
      component.user = await res.json();
    });

    it('renders name', () => {
      expect(component.$('#header').innerText.trim()).to.eq('Abraham Williams\n@abraham');
    });

    it('renders text', () => {
      expect(component.$('#text').innerText.trim()).to.eq('Developer and caffeine consumer at @Bendyworks, #WebTechnologies @GoogleDevExpert, international speaker, @GDGMadison organizer, writer of code');
    });

    it('renders footer', () => {
      expect(component.$('#footer').innerText.trim()).to.eq('Madison, WI\n abrah.am\n Joined Oct 2007');
    });

    it('renders links with user color', () => {
      expect(getComputedStyle(component.$('#header a')).color).to.eq('rgb(56, 175, 255)');
    });

    it('renders banner image', () => {
      expect(getComputedStyle(component.$('#media')).backgroundImage).to.eq('url("https://pbs.twimg.com/profile_banners/9436992/1490189391")');
    });

    it('renders banner color', () => {
      expect(getComputedStyle(component.$('#media')).backgroundColor).to.eq('rgb(255, 255, 255)');
    });

    it('renders profile image', () => {
      expect(component.$('#profile-image img').getAttribute('src')).to.eq('https://pbs.twimg.com/profile_images/897079141719195648/_mvh-QJH_400x400.jpg');
    });

    it('links to tweet', () => {
      expect(component.$('#logo a').getAttribute('href')).to.eq('https://twitter.com/abraham');
    });

    it('links to the profiles homepage', () => {
      expect(component.$('#footer a').getAttribute('href')).to.eq('https://t.co/ck29y8mOBT');
      expect(component.$('#footer a').innerText).to.eq('abrah.am');
    });

    it('renders counts', () => {
      expect(component.$('#counts').innerText.trim()).to.eq('Tweets\n45k\nFollowing\n401\nFollowers\n8k\nLikes\n16k\nLists\n582');
    });

    it('has count links', () => {
      expect(component.$$('#counts a')[0].getAttribute('href')).to.include('https://twitter.com/abraham');
      expect(component.$$('#counts a')[1].getAttribute('href')).to.include('https://twitter.com/abraham/following');
      expect(component.$$('#counts a')[2].getAttribute('href')).to.include('https://twitter.com/abraham/followers');
      expect(component.$$('#counts a')[3].getAttribute('href')).to.include('https://twitter.com/abraham/likes');
      expect(component.$$('#counts a')[4].getAttribute('href')).to.include('https://twitter.com/abraham/lists');
    });

    it('autoLinks description hashtag', () => {
      expect(component.$$('#text a')[1].getAttribute('href')).to.eq('https://twitter.com/search?q=%23WebTechnologies');
      expect(component.$$('#text a')[1].getAttribute('class')).to.include('tweet-url hashtag'); // Firefox ShadowDOM pollyfil adds additional classes
    });

    it('autoLinks description mention', () => {
      expect(component.$$('#text a')[0].getAttribute('href')).to.eq('https://twitter.com/Bendyworks');
      expect(component.$$('#text a')[0].getAttribute('class')).to.include('tweet-url username'); // Firefox ShadowDOM pollyfil adds additional classes
    });
  });

  describe('with no profile details', () => {
    beforeEach(async () => {
      component = fixture('<twitter-user></twitter-user>');
      let res = await fetch('./base/test/jack.json');
      component.user = await res.json();
    });

    it('does not render footer', () => {
      expect(component.$('#footer')).to.eq(null);
    });
  })

  describe('when verified', () => {
    beforeEach(async () => {
      component = fixture('<twitter-user></twitter-user>');
      let res = await fetch('./base/test/jack.json');
      component.user = await res.json();
    });

    it('renders verified badge', () => {
      expect(component.$('#header svg.verified').getAttribute('class')).to.include('verified'); // Firefox ShadowDOM pollyfil adds additional classes
    });
  })
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
