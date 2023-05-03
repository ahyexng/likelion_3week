import {useContext } from "react";
import { ModeContext } from '../Main';

const Introduce = (props) => {
    const {isDark} = useContext(ModeContext)
    return (
        <>
        <div className={isDark ? "darkintro" : "main-introdution"}>
            {props.data}
        </div>
        </>
    );
};

export default Introduce;