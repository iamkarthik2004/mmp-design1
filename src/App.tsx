import './App.css';
import logo from './assets/logo.png';
import demoProfile from './assets/Demo.png';
import backbutton from './assets/back-icon.png';
import profilepic from './assets/profile.png';
import droppedIcon from './assets/dropped.png';
import blacklistIcon from './assets/blacklist.png';
import exportIcon from './assets/export.png';
import addIcon from './assets/add.png';
import hoomans from './assets/hoomans.png';
import InstaIcon from './assets/instagram.png';
import LinkedinIcon from './assets/linkedin.png';
import TwitterIcon from './assets/twitter.png';
import TelegramIcon from './assets/telegram.png';
import editIcon from './assets/pencil.png';
import tickIcon from './assets/tick.png';
import dollarIcon from './assets/dollar1.png';
import ticketIcon from './assets/ticket.png';
import notickIcon from './assets/notick.png';
import greenticketIcon from './assets/greenticket.png';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
          <div className="text">
            <span className="site-name">MakeMyPass</span>
            <div className="title-row">
              <img src={backbutton} alt="back btn" className="back-btn" />
              <img src={demoProfile} alt="event logo" className="event-logo" />
              <h1 className="title">Paradox Production Meet-Up</h1>

               <div className="view-docs">
                📖 View Docs
                </div>

            </div>
          </div>
        </div>

         <div className="user-section">
          <span className="greeting">Hi, adankattekaden43</span>
          <img src={profilepic} alt="profile" className="profile-pic" />
         </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-tabs">
        <span className="tab">Overview</span>
        <span className="tab">Insights</span>
        <span className="tab active">Guests</span>
        <span className="tab">|</span>
        <span className="tab">Event Page</span>
        <span className="tab">From Builder</span>
        <span className="tab">|</span>
        <span className="tab">Scan QR In-Event</span>
        <span className="tab">|</span>
        <span className="tab">Logs</span>
        <span className="tab">Finance</span>
        <span className="tab">|</span>
        <span className="tab">Post Event</span>
        <span className="tab">|</span>
        <span className="tab">Child Events</span>
      </nav>

      {/* At a Glance and Last Registered */}
      <div className="glance-bar">
        <span className="glance-text">At a Glance</span>
        <span className="last-registered">Last Registered 1st May at 7:42 PM</span>
      </div>

      {/* Info Bar */}
      <div className="info-bar">
        <div className="info-top-row">
          <span className="green">80 unique guests</span>
          <div className="guest-status-line">
            <span className="white">59 </span>
            <span className="green2">shortlisted </span>
            <span className="white2"> 11</span>
            <span className="green3"> unclaimed</span>
          </div>
        </div>

        {/* Colored Progress Bar */}
        <div className="progress-bar">
          <div className="segment special" style={{ width: "82.8%" }}></div>
          <div className="segment demo" style={{ width: "0.9%" }}></div>
          <div className="segment hackathon" style={{ width: "1.2%" }}></div>
          <div className="segment new" style={{ width: "14.2%" }}></div>
        </div>

        {/* Progress Items */}
        <div className="tags">
          <span className="tag purple">• (280) Special Ticket</span>
          <span className="tag green">• (3) Demo Paid Ticket</span>
          <span className="tag grey">• (4) Hackathon</span>
          <span className="tag blue">• (50) New Ticket</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="button-row">
        <button className="btn purple">
          Dropped Users
          <img src={droppedIcon} alt="Dropped" className="btn-icon" />
        </button>
        <button className="btn pink">
          Blacklisted Users
          <img src={blacklistIcon} alt="blacklist" className="btn-icon" />
        </button>
        <button className="btn grey">
          Export Data
          <img src={exportIcon} alt="export" className="btn-icon" />
        </button>
        <button className="btn new2green">
          Add Guest
          <img src={addIcon} alt="add" className="btn-icon" />
        </button>
      </div>

      {/*Guest List and Search Bar*/}
      {/*Guest Title*/}
      <div className="guest-list-header">
        <h2 className="guest-title">Guests List</h2>
      </div>
      
      {/*Search Bar*/}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <span className="search-text">Search</span>
      </div>


      {/* Guest List */}
      <div className="guest-section">
        <div className="guest-header">
          <h2>Recent Guests (30)</h2>
          <div className="guest-filters">
            <button className="select-multiple">Select Multiple</button>
            <select className="dropdown">
              <option>Checked In | </option>
            </select>
            <select className="dropdown">
              <option>Approval Status | </option>
            </select>
            <select className="dropdown">
              <option>Registration Status | </option>
            </select>
          </div>
        </div>

        <div className="guest-table">
          <div className="guest-list-container">
            <div className="guest-row">
              <span>Ananthu M P</span>
              <span>chn21ec019</span>
              <span>5 days ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Aro Ann</span>
              <span>Aroann23</span>
              <span>1 week ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Ananthu M P</span>
              <span>chn21ec019</span>
              <span>2 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Ananthu M P</span>
              <span>ananthu.mp333</span>
              <span>2 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Ananthu M P</span>
              <span>chn21ec019</span>
              <span>2 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Aswin Asok</span>
              <span>aswinasokofficial</span>
              <span>4 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Ananthu MP</span>
              <span>chn21ec019</span>
              <span>4 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={notickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={greenticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Aswin Asok</span>
              <span>aswinasokofficial</span>
              <span>4 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={notickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
            <div className="guest-row">
              <span>Ananthu MP</span>
              <span>ananthunandu.magic</span>
              <span>5 weeks ago</span>
              <span className="actions">
                <img src={editIcon} alt="Edit" className="action-icon" />
                <img src={tickIcon} alt="Check" className="action-icon" />
                <img src={dollarIcon} alt="Dollar" className="action-icon" />
                <img src={ticketIcon} alt="Ticket" className="action-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}
      <div className="page-footer">
        <span className="records">69 Records</span>
        <div className="per-page">
          Per Page: <span className="page-count">30</span>
        </div>
        
        <div className="page-nav">
          <span>1 of 3</span>
          <span className="arrows">
            &lt;&nbsp;&nbsp;&gt;
          </span>
        </div>
      </div>

      {/*Hooman Logo*/}
      <div className="hooman-logo-container">
        <img src={hoomans} alt="Hoomans Logo" className="hooman-logo" />
      </div>

      {/*Social Meida Icon Logo*/}
      <div className="social-logo-icon">
        <img src={InstaIcon} alt="Insta Logo" className="insta-logo" />
        <img src={LinkedinIcon} alt="Linkedin Logo" className="linkedin-logo" />
        <img src={TwitterIcon} alt="Twitter Logo" className="twitter-logo" />
        <img src={TelegramIcon} alt="Telegram Logo" className="telegram-logo" />
      </div>


    </div>
  );
}

export default App;
