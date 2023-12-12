import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  FiUpload,
  FiMenu,
  FiHome,
  FiX,
  FiUser,
} from "react-icons/fi";


const FloatingBottomNav = () => {
  const [open, setOpen] = useState(false);
  

  return (
    <div className="h-[400px] bg-white relative">
      <motion.nav
        animate={open ? "open" : "closed"}
        initial="closed"
        className="bg-white text-black shadow-lg flex items-center justify-between absolute bottom-8 left-[50%] -translate-x-[50%]"
      >
        <MenuButton setOpen={setOpen} open={open} />
        <div className="flex gap-6 px-6">
          <Link to='/feed' text="Home" Icon={FiHome} />
          <Link to='/upload' text="Post" Icon={FiUpload} />
          <Link to='/profile' text="Profile" Icon={FiUser} />
        </div>
        <Menu />
      </motion.nav>
    </div>
  );
};

const Link = ({ text, Icon }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="text-sm w-12 hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center"
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </a>
  );
};

const MenuButton = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen((pv) => !pv)}
      className="text-xl font-bold h-full bg-black text-white"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="icon-1"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <FiX />
            </motion.span>
          ) : (
            <motion.span
              key="icon-2"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <FiMenu />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

const Menu = () => {
  return (
    <motion.div
      variants={menuVariants}
      style={{ transformOrigin: "bottom", x: "-50%" }}
      className="p-8 bg-white shadow-lg absolute bottom-[125%] left-[50%] flex w-[calc(100vw_-_48px)] max-w-lg"
    >
      <div className="flex flex-col gap-2 w-1/3">
        <SectionTitle text="Men" />
        <MenuLink text="Athletic" />
        <MenuLink text="Golf" />
        <MenuLink text="Basketball" />
        <MenuLink text="Running" />
      </div>
      <div className="flex flex-col gap-2 w-1/3">
        <SectionTitle text="Women" />
        <MenuLink text="Tops" />
        <MenuLink text="Pants" />
        <MenuLink text="Running" />
        <MenuLink text="Leisure" />
        <MenuLink text="Sports Bras" />
      </div>
      <div className="flex flex-col gap-2 w-1/3">
        <SectionTitle text="Kids" />
        <MenuLink text="Toddler" />
        <MenuLink text="Back to school" />
        <MenuLink text="Shirts" />
        <MenuLink text="Shorts" />
        <MenuLink text="Cleats" />
        <MenuLink text="Winter" />
      </div>
    </motion.div>
  );
};

const SectionTitle = ({ text }) => {
  return (
    <motion.h4
      variants={menuLinkVariants}
      className="text-sm mb-2 font-semibold"
    >
      {text}
    </motion.h4>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      href="#"
      rel="nofollow"
      className="text-sm hover:text-indigo-500 transition-colors flex items-center gap-2"
    >
      {text}
    </motion.a>
  );
};

export default FloatingBottomNav;

const iconVariants = {
  initial: { rotate: 180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -180, opacity: 0 },
};

const menuVariants = {
  open: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scale: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -15,
    opacity: 0,
  },
};



