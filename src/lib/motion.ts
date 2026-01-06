import { Variants } from "framer-motion";

export const FadeDown: Variants = {
  init: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
  on: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const FadeUp: Variants = {
  init: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
  on: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const FadeRight: Variants = {
  init: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
    },
  },
  on: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};

export const FadeLeft: Variants = {
  init: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
    },
  },
  on: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};

export const SkillContent: Variants = {
  init: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  on: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
