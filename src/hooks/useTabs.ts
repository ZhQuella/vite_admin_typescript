import { tabMenuMethod } from "types/index";

export const useTabs = (): tabMenuMethod => { 

  const redload = () => { 
    console.log(1111);
  };

  const closeTag = () => { 
    console.log(1111);
  };

  const closeLeftTag = () => { 
    console.log(1111);
  };

  const closeRightTag = () => { 
    console.log(1111);
  };

  const closeOtherTag = () => { 
    console.log(1111);
  };

  const closeAllTag = () => { 
    console.log(1111);
  };

  return {
    redload,
    closeTag,
    closeLeftTag,
    closeRightTag,
    closeOtherTag,
    closeAllTag
  }
};

