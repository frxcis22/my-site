'use client';

import React, { useState, useEffect } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ClientMotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const ClientMotion: React.FC<ClientMotionProps> = ({ children, ...props }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <div className={props.className}>{children}</div>;
  }

  return <motion.div {...props}>{children}</motion.div>;
};

export default ClientMotion; 