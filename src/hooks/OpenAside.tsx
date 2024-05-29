import { useState } from "react";

export const useOpenAside = () => {
    const [isOpenAsideMenu, setIsOpenAsideMenu] = useState(false);
    
    const handleOpenMenu = () => {
        setIsOpenAsideMenu(!isOpenAsideMenu);
    }

    return {
        isOpenAsideMenu,
        handleOpenMenu,
    }
}