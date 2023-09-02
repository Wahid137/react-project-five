import { useState } from "react";

const useDisclouse = () => {
    const [open, setOpen] = useState(false)

    const onOpen = () => {
        setOpen(true)
    }
    return (
        <div>

        </div>
    );
};

export default useDisclouse;