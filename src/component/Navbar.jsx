import React from 'react'


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {




  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <div className=' m-auto max-w-[95%]   h-16 flex items-center  justify-between'>

      <div className='flex items-center'>

        <div className='sm:text-2xl text-lg' style={{ fontFamily: "'Pacifico', cursive" }}>Imagellry</div>


        <div className='sm:ms-5  ms-3 flex items-center justify-center  gap-x-4 rounded-full px-3 h-10  w-[80%] md:w-[600px]'   >


          <ion-icon name="search-outline" style={{ fontSize: "20px" }}></ion-icon> <input type="text" name="" className='outline-none w-full h-full ' placeholder='Search Images' id="" />


        </div>



      </div>




      <div className='ms-3  flex space-x-2'>
       

        <ion-icon name="reorder-three-outline"


          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{ color: "white", cursor: "pointer", fontSize: "30px" }}


        ></ion-icon>


        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>


    </div>
  )
}

export default Navbar

