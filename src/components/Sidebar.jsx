import React from 'react';
import { FaHome, FaBell, FaComments, FaWallet, FaUser } from "react-icons/fa";
import { FaBagShopping} from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="side_bar_content">
      <div className="top_content">
        <div className="items"><FaHome /> Home</div>
        <div className="items"><FaBell /> Notification</div>
        <div className="items"><FaBagShopping /> Shop</div>
        <div className="items"><FaComments /> Conversation</div>
        <div className="items"><FaWallet /> Wallet</div>
        <div className="items"> Subscription</div>
        <div className="items"><FaUser /> My Profile</div>
      </div>
      <div className="bottom_content items">
        <span>Log Out</span>
      </div>
    </div>
  );
}

export default Sidebar;

