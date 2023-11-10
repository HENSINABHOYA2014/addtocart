import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const AdminHeader = () => {
    return (
        <>
            <div>
                {/* ======= Header ======= */}
                <header id="header" className="header fixed-top d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <NavLink href="index.html" className="logo d-flex align-items-center">
                            
                            <span className="d-none d-lg-block">NiceAdmin</span>
                        </NavLink>
                        <i className="bi bi-list toggle-sidebar-btn" />
                    </div>{/* End Logo */}
                    <div className="search-bar">
                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                            <button type="submit" title="Search"><i className="bi bi-search" /></button>
                        </form>
                    </div>{/* End Search Bar */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">
                            <li className="nav-item d-block d-lg-none">
                                <NavLink className="nav-link nav-icon search-bar-toggle ">
                                    <i className="bi bi-search" />
                                </NavLink>
                            </li>{/* End Search Icon*/}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link nav-icon" data-bs-toggle="dropdown">
                                    <i className="bi bi-bell" />
                                    <span className="badge bg-primary badge-number">4</span>
                                </NavLink>{/* End Notification Icon */}
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                    <li className="dropdown-header">
                                        You have 4 new notifications
                                        <NavLink><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-exclamation-circle text-warning" />
                                        <div>
                                            <h4>Lorem Ipsum</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>30 min. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-x-circle text-danger" />
                                        <div>
                                            <h4>Atque rerum nesciunt</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>1 hr. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-check-circle text-success" />
                                        <div>
                                            <h4>Sit rerum fuga</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>2 hrs. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="notification-item">
                                        <i className="bi bi-info-circle text-primary" />
                                        <div>
                                            <h4>Dicta reprehenderit</h4>
                                            <p>Quae dolorem earum veritatis oditseno</p>
                                            <p>4 hrs. ago</p>
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="dropdown-footer">
                                        <NavLink>Show all notifications</NavLink>
                                    </li>
                                </ul>{/* End Notification Dropdown Items */}
                            </li>{/* End Notification Nav */}
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link nav-icon" data-bs-toggle="dropdown">
                                    <i className="bi bi-chat-left-text" />
                                    <span className="badge bg-success badge-number">3</span>
                                </NavLink>{/* End Messages Icon */}
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                                    <li className="dropdown-header">
                                        You have 3 new messages
                                        <NavLink><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="message-item">
                                        <NavLink>
                                            <img src="assets/img/messages-1.jpg" alt className="rounded-circle" />
                                            <div>
                                                <h4>Maria Hudson</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>4 hrs. ago</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="message-item">
                                        <NavLink>
                                            <img src="assets/img/messages-2.jpg" alt className="rounded-circle" />
                                            <div>
                                                <h4>Anna Nelson</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>6 hrs. ago</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="message-item">
                                        <NavLink>
                                            <img src="assets/img/messages-3.jpg" alt className="rounded-circle" />
                                            <div>
                                                <h4>David Muldon</h4>
                                                <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                                                <p>8 hrs. ago</p>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="dropdown-footer">
                                        <NavLink>Show all messages</NavLink>
                                    </li>
                                </ul>{/* End Messages Dropdown Items */}
                            </li>{/* End Messages Nav */}
                            <li className="nav-item dropdown pe-3">
                                <NavLink className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                    <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                    <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                                </NavLink>{/* End Profile Iamge Icon */}
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                    <li className="dropdown-header">
                                        <h6>Kevin Anderson</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-person" />
                                            <span>My Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                            <i className="bi bi-gear" />
                                            <span>Account Settings</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i className="bi bi-question-circle" />
                                            <span>Need Help?</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center">
                                            <i className="bi bi-box-arrow-right" />
                                            <span>Sign Out</span>
                                        </NavLink>
                                    </li>
                                </ul>{/* End Profile Dropdown Items */}
                            </li>{/* End Profile Nav */}
                        </ul>
                    </nav>{/* End Icons Navigation */}
                </header>{/* End Header */}
                {/* ======= Sidebar ======= */}
                <aside id="sidebar" className="sidebar">
                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link "to={`/admin/admindashboard`} >
                                <i className="bi bi-grid" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>{/* End Dashboard Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" to={`/admin/adminproduct`} data-bs-target="#components-nav" data-bs-toggle="collapse"> 
                                <i className="bi bi-menu-button-wide" /><span>Product</span><i className="bi bi-chevron-down ms-auto" />
                            </NavLink>
                            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink href="components-alerts.html">
                                        <i className="bi bi-circle" /><span>Alerts</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-accordion.html">
                                        <i className="bi bi-circle" /><span>Accordion</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-badges.html">
                                        <i className="bi bi-circle" /><span>Badges</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-breadcrumbs.html">
                                        <i className="bi bi-circle" /><span>Breadcrumbs</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-buttons.html">
                                        <i className="bi bi-circle" /><span>Buttons</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-cards.html">
                                        <i className="bi bi-circle" /><span>Cards</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-carousel.html">
                                        <i className="bi bi-circle" /><span>Carousel</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-list-group.html">
                                        <i className="bi bi-circle" /><span>List group</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-modal.html">
                                        <i className="bi bi-circle" /><span>Modal</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-tabs.html">
                                        <i className="bi bi-circle" /><span>Tabs</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-pagination.html">
                                        <i className="bi bi-circle" /><span>Pagination</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-progress.html">
                                        <i className="bi bi-circle" /><span>Progress</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-spinners.html">
                                        <i className="bi bi-circle" /><span>Spinners</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="components-tooltips.html">
                                        <i className="bi bi-circle" /><span>Tooltips</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>{/* End Components Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" to={`/admin/user`} data-bs-target="#forms-nav" data-bs-toggle="collapse">
                                <i className="bi bi-journal-text" /><span>Users</span><i className="bi bi-chevron-down ms-auto" />
                            </NavLink>
                            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink href="forms-elements.html">
                                        <i className="bi bi-circle" /><span>Form Elements</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="forms-layouts.html">
                                        <i className="bi bi-circle" /><span>Form Layouts</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="forms-editors.html">
                                        <i className="bi bi-circle" /><span>Form Editors</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="forms-validation.html">
                                        <i className="bi bi-circle" /><span>Form Validation</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>{/* End Forms Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse">
                                <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
                            </NavLink>
                            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink href="tables-general.html">
                                        <i className="bi bi-circle" /><span>General Tables</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="tables-data.html">
                                        <i className="bi bi-circle" /><span>Data Tables</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>{/* End Tables Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse">
                                <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
                            </NavLink>
                            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink href="charts-chartjs.html">
                                        <i className="bi bi-circle" /><span>Chart.js</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="charts-apexcharts.html">
                                        <i className="bi bi-circle" /><span>ApexCharts</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="charts-echarts.html">
                                        <i className="bi bi-circle" /><span>ECharts</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>{/* End Charts Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse">
                                <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
                            </NavLink>
                            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <NavLink href="icons-bootstrap.html">
                                        <i className="bi bi-circle" /><span>Bootstrap Icons</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="icons-remix.html">
                                        <i className="bi bi-circle" /><span>Remix Icons</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="icons-boxicons.html">
                                        <i className="bi bi-circle" /><span>Boxicons</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>{/* End Icons Nav */}
                        <li className="nav-heading">Pages</li>
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="users-profile.html">
                                <i className="bi bi-person" />
                                <span>Profile</span>
                            </NavLink>
                        </li>{/* End Profile Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="pages-faq.html">
                                <i className="bi bi-question-circle" />
                                <span>F.A.Q</span>
                            </NavLink>
                        </li>{/* End F.A.Q Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="pages-contact.html">
                                <i className="bi bi-envelope" />
                                <span>Contact</span>
                            </NavLink>
                        </li>{/* End Contact Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="pages-register.html">
                                <i className="bi bi-card-list" />
                                <span>Register</span>
                            </NavLink>
                        </li>{/* End Register Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="pages-login.html">
                                <i className="bi bi-box-arrow-in-right" />
                                <span>Login</span>
                            </NavLink>
                        </li>{/* End Login Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="pages-error-404.html">
                                <i className="bi bi-dash-circle" />
                                <span>Error 404</span>
                            </NavLink>
                        </li>{/* End Error 404 Page Nav */}
                        <li className="nav-item">
                            <NavLink className="nav-link collapsed" href="pages-blank.html">
                                <i className="bi bi-file-earmark" />
                                <span>Blank</span>
                            </NavLink>
                        </li>{/* End Blank Page Nav */}
                    </ul>
                </aside>
                <main id="main" className="main">
                    
                   
                </main>{/* End #main */}
            </div>


            

            <NavLink class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></NavLink>
            {/* <div className="wrapper">
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <NavLink className="sidebar-brand">
                            <span className="align-middle">AdminKit</span>
                        </NavLink>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">
                                Pages
                            </li>
                            <li className="sidebar-item active">
                                <NavLink className="sidebar-link" to={`/admin/admindashboard`}>
                                    <i class="fa-solid fa-gauge-high"></i> <span className="align-middle">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to={`/admin/adminproduct`}>
                                    <i class="fa-solid fa-gauge-high"></i> <span className="align-middle">Product</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" to={`/admin/user`}>
                                    <i class="fa-solid fa-gauge-high"></i> <span className="align-middle">Users</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="user" /> <span className="align-middle">Profile</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="log-in" /> <span className="align-middle">Sign In</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="user-plus" /> <span className="align-middle">Sign Up</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="book" /> <span className="align-middle">Blank</span>
                                </NavLink>
                            </li>
                            
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="square" /> <span className="align-middle">Buttons</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="check-square" /> <span className="align-middle">Forms</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="grid" /> <span className="align-middle">Cards</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="align-left" /> <span className="align-middle">Typography</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="coffee" /> <span className="align-middle">Icons</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link">
                                    <i className="align-middle" data-feather="bar-chart-2" /> <span className="align-middle">Charts</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link" href="maps-google.html">
                                    <i className="align-middle" data-feather="map" /> <span className="align-middle">Maps</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <NavLink className="sidebar-toggle js-sidebar-toggle">
                            <i className="hamburger align-self-center" />
                        </NavLink>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-icon dropdown-toggle" id="alertsDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            <i className="align-middle" data-feather="bell" />
                                            <span className="indicator">4</span>
                                        </div>
                                    </NavLink>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                        <div className="dropdown-menu-header">
                                            4 New Notifications
                                        </div>
                                        <div className="list-group">
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-danger" data-feather="alert-circle" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Update completed</div>
                                                        <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                        <div className="text-muted small mt-1">30m ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-warning" data-feather="bell" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Lorem ipsum</div>
                                                        <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-primary" data-feather="home" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Login from 192.186.1.8</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-success" data-feather="user-plus" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">New connection</div>
                                                        <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                        <div className="text-muted small mt-1">14h ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <NavLink className="text-muted">Show all notifications</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-icon dropdown-toggle" id="messagesDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            <i className="align-middle" data-feather="message-square" />
                                        </div>
                                    </NavLink>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                        <div className="dropdown-menu-header">
                                            <div className="position-relative">
                                                4 New Messages
                                            </div>
                                        </div>
                                        <div className="list-group">
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Vanessa Tucker</div>
                                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                        <div className="text-muted small mt-1">15m ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">William Harris</div>
                                                        <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Christina Mason</div>
                                                        <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                        <div className="text-muted small mt-1">4h ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Sharon Lessman</div>
                                                        <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <NavLink className="text-muted">Show all messages</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-icon dropdown-toggle d-inline-block d-sm-none" data-bs-toggle="dropdown">
                                        <i className="align-middle" data-feather="settings" />
                                    </NavLink>
                                    <NavLink className="nav-link dropdown-toggle d-none d-sm-inline-block" data-bs-toggle="dropdown">
                                        <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                    </NavLink>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <NavLink className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user" /> Profile</NavLink>
                                        <NavLink className="dropdown-item"><i className="align-middle me-1" data-feather="pie-chart" /> Analytics</NavLink>
                                        <div className="dropdown-divider" />
                                        <NavLink className="dropdown-item"><i className="align-middle me-1" data-feather="settings" /> Settings &amp; Privacy</NavLink>
                                        <NavLink className="dropdown-item"><i className="align-middle me-1" data-feather="help-circle" /> Help Center</NavLink>
                                        <div className="dropdown-divider" />
                                        <NavLink className="dropdown-item">Log out</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav> */}

            {/* <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-start">
                                    <p className="mb-0">
                                        <NavLink className="text-muted" href="https://adminkit.io/" target="_blank"><strong>AdminKit</strong></NavLink> -<NavLink className="text-muted" href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin Template</strong></NavLink>								
                                    </p>
                                </div>
                                <div className="col-6 text-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <NavLink className="text-muted" href="https://adminkit.io/" target="_blank">Support</NavLink>
                                        </li>
                                        <li className="list-inline-item">
                                            <NavLink className="text-muted" href="https://adminkit.io/" target="_blank">Help Center</NavLink>
                                        </li>
                                        <li className="list-inline-item">
                                            <NavLink className="text-muted" href="https://adminkit.io/" target="_blank">Privacy</NavLink>
                                        </li>
                                        <li className="list-inline-item">
                                            <NavLink className="text-muted" href="https://adminkit.io/" target="_blank">Terms</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer> */}
            {/* </div>
            </div>
             */}
        </>
    )
}

export default AdminHeader