import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPopular from './components/CardPopular';
import LayoutSectionPopular from './components/LayoutSectionPopular';

function App() {
  return (
    <div className="App">
      <LayoutSectionPopular>
        <CardPopular
          img={
            'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg'
          }
          category={'covid-19'}
          title={
            'How this small town of 16,000 near the US-Canada border has given out 50,000 vaccines'
          }
          description={
            'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.'
          }
        />
        <CardPopular
          isReversed
          img={
            'https://www.reuters.com/resizer/e-rtKXHJBMDr3n3yPuzMmaBrXaE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/62VXJFTHEZNRZM4CO6PTL5CS3A.jpg'
          }
          category={'covid-19'}
          title={
            'Crypto firm 21Shares lists bitcoin ETP on Nasdaq Dubai - Reuters.com'
          }
          description={
            "Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's first physically-backed bitcoin ETP."
          }
        />
        <CardPopular
          img={
            'https://s.yimg.com/os/creatr-uploaded-images/2022-10/4d5df170-4f00-11ed-a7aa-b9f7641311d6'
          }
          category={'covid-19'}
          title={'iPadOS 16 and macOS Ventura arrive on October 24th'}
          description={
            "You'll finally be able to get your hands on iPadOS 16 next Monday, October 24th, Apple announced this morning. The new OS includes support for Apple's Stage Manager multi-tasking feature, which should make it easier to move between multiple apps on your iPad.…"
          }
        />
      </LayoutSectionPopular>
    </div>
  );
}

export default App;
