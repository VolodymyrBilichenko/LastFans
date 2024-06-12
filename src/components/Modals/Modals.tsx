import { useSelector } from "react-redux"
import { ModalAddVid } from "./components/ModalAddVid"
import { ModalCreateGroup } from "./components/ModalCreateGroup"

export const Modals = () => {
    const modalsStateStore = useSelector((state: any) => state.toolkit.modals) as ModalKeys[]
    console.log(modalsStateStore);

    type ModalKeys = 'addVideo' | 'createGroup';

    const modalComponents: Record<ModalKeys, React.ComponentType> = {
        // addVideo: <ModalAddVid/>,
        // createGroup: <ModalCreateGroup/>,
        addVideo: ModalAddVid,
        createGroup: ModalCreateGroup,
    }
    

    return (
        
                    /* <div id="popup-add-group" aria-hidden="true" className="popup-add-group popup"> */
        <>
            {
                modalsStateStore.map((modalName, index) => {
                    const ModalComponent = modalComponents[modalName];
                    
                    // Рендерьте відповідний компонент у оболонці
                    return (
                        <div key={index} id={`popup-${modalName}`} aria-hidden="true" className={`popup-${modalName} popup`}>
                            <div className="popup__wrapper">
                                <div className="popup__content">
                                    <button data-close type="button" className="popup__close"></button>
                                    <ModalComponent />
                                </div>
                            </div>
                        </div>
                    );
                })
            }

            <div id="popup-add-vid" aria-hidden="true"  className="popup-add-vid popup">
                <div  className="popup__wrapper">
                    <div  className="popup__content">
                        <button data-close type="button"  className="popup__close"></button>

                        
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}
