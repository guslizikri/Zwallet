import bgFirstSection from '../../assets/bg-first-section.svg';
import zwalletLogo from '../../assets/zwallet-logo.svg';
import support from '../../assets/support.svg';
import dataPrivacy from '../../assets/data-privacy.svg';
import easyDownload from '../../assets/easy-download.svg';
import microsoft from '../../assets/microsoft.svg';
import dropbox from '../../assets/dropbox.svg';
import handm from '../../assets/h&m.svg';
import airbnb from '../../assets/airbnb.svg';
import canon from '../../assets/canon.svg';
import dell from '../../assets/dell.svg';
import doublePhone from '../../assets/double-phone.svg';
import Carousel from '../../component/Carousel';
import alex from '../../assets/alex.svg';
import sherina from '../../assets/sherina.svg';
import jessica from '../../assets/jessica.svg';
import robert from '../../assets/robert.svg';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const advantages = [
    {
      image: support,
      title: '24/7 Support',
      desc: 'We have 24/7 contact support so you can contact us whenever you want and we will respond it.',
    },
    {
      image: dataPrivacy,
      title: 'Data Privacy',
      desc: 'We make sure your data is safe in our database and we will encrypt any data you submitted to us.',
    },
    {
      image: easyDownload,
      title: 'Easy Download',
      desc: 'Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.',
    },
  ];

  const sponsors = [
    {
      img: microsoft,
      name: 'microsoft',
    },
    {
      img: dropbox,
      name: 'dropbox',
    },
    {
      img: handm,
      name: 'h&m',
    },
    {
      img: airbnb,
      name: 'air bnb',
    },
    {
      img: canon,
      name: 'canon',
    },
    {
      img: dell,
      name: 'dell',
    },
  ];

  const benefits = [
    {
      no: '1.',
      title: 'Small Fee',
      desc: 'We only charge 5% of every success transaction done in Zwallet app.',
    },
    {
      no: '2.',
      title: 'Data Secured',
      desc: 'All your data is secured properly in our system and it’s encrypted.',
    },
    {
      no: '3.',
      title: 'User Friendly',
      desc: 'Zwallet come up with modern and sleek design and not complicated.',
    },
  ];

  const users = [
    {
      image: alex,
      name: 'Alex Hansinburg',
      job: 'Designer',
      comment:
        '“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”',
    },
    {
      image: sherina,
      name: 'Sherina Chaw',
      job: 'Psychologist',
      comment:
        '“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life“',
    },
    {
      image: jessica,
      name: 'Jessica Mera',
      job: 'Nurse',
      comment:
        '“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app“',
    },
    {
      image: robert,
      name: 'Robert Chandler',
      job: 'Photographer',
      comment:
        '“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!“',
    },
  ];

  return (
    <div className="">
      <Header />
      <section className="container flex">
        <main>
          <h1>Hello World</h1>
        </main>
  );
}

export default LandingPage;
