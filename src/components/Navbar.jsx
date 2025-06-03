
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 p-2.5 w-[110vh] min-h-[100vh] flex flex-col z-10">
      {/* logo icons copyrights */}
      <div>
        <h1>M<span>.</span></h1>
      </div>
      {/* navigation links */}
      <div>
        <ul>
          <li><a href="">< i class='bx  bx-home'  ></i></a></li>
          <li><a href="">< i class='bx  bx-user'  ></i></a></li>
          <li><a href=""></a>< i class='bx  bx-envelope-alt'  ></i></li>
          <li><a href=""></a>< i class='bx  bx-education'  ></i> </li>
          <li><a href=""></a>< i class='bx  bx-layers-down-right'  ></i> </li>
          <li><a href=""></a>< i class='bx  bx-note-book'  ></i> </li>
          <li><a href="">< i class='bx  bx-message-circle'  ></i> </a></li>
        </ul>
      </div>
      <div className="rotate-90 absolute left-0 inline-block">
        <p className=""> &copy; 2022 - 2023.</p>
      </div>
    </header>
  )
}

export default Navbar