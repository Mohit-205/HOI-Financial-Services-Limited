import { Link, NavLink } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';
import { GoQuote } from 'react-icons/go';
import { MdHealthAndSafety, MdPolicy } from 'react-icons/md';
import { CgFormatJustify } from 'react-icons/cg';

import sidebarBg from '../assets/bg1.jpeg';

const Sidebar = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      {/* Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            >
              <div
                style={{
                  padding: '9px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: '1px'
                }}
              >
                Health Insurance
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<GoQuote />}
            // suffix={<span className="badge red">NEW</span>}
          >
            Get Quote
            <Link to="/Health/Quote" />
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
          {/* <MenuItem icon={<FaGem />}>
            Components 
            <Link to="/Health/Home" />
          </MenuItem> */}
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
            title={'Health Overview'}
            icon={<MdHealthAndSafety />}
          >
            <MenuItem>Submenu 0<Link to="/Health/Overview" /></MenuItem>
            <MenuItem>Submenu 1<Link to="/Health/Overview_Q1" /></MenuItem>
            <MenuItem>Submenu 2<Link to="/Health/Overview_Q2" /></MenuItem>
            <MenuItem>Submenu 3<Link to="/Health/Overview_Q3" /></MenuItem>
            <MenuItem>Submenu 4<Link to="/Health/Overview_Q4" /></MenuItem>
            <MenuItem>Submenu 5<Link to="/Health/Overview_Q5" /></MenuItem>
            <MenuItem>Submenu 6<Link to="/Health/Overview_Q6" /></MenuItem>
            <MenuItem>Submenu 7<Link to="/Health/Overview_Q7" /></MenuItem>
            <MenuItem>Submenu 8<Link to="/Health/Overview_Q8" /></MenuItem>
            <MenuItem>Submenu 9<Link to="/Health/Overview_Q9" /></MenuItem>
          </SubMenu>
          {/* <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={'With Prefix'}
            icon={<FaHeart />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title={'Multi Level'} icon={<FaList />}>
            <MenuItem>Submenu 1 </MenuItem>
            <MenuItem>Submenu 2 </MenuItem>
            <SubMenu title={'Submenu 3'}>
              <MenuItem>Submenu 3.1 </MenuItem>
              <MenuItem>Submenu 3.2 </MenuItem>
            </SubMenu> 
          </SubMenu>*/}
          <MenuItem icon={<CgFormatJustify />}>
            CheckOut <Link to="/Health/Checkout" />
          </MenuItem>
          {/* <MenuItem icon={<MdPolicy />}>
            Get Policy <Link to="/Health/Getpolicy" />
          </MenuItem> */}
        </Menu>
      </SidebarContent>
      {/* Footer */}
      {/* <SidebarFooter style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: 'pointer' }}
            to="/profile"
          >
            <FaUser />
            <span>My Account</span>
          </Link>
        </div>
      </SidebarFooter> */}
    </ProSidebar>
  );
};

export default Sidebar;
