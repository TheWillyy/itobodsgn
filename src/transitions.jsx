import { motion } from "framer-motion";

const transition = (OgComponent)=> {
    return () => (
        <>
            <OgComponent/>

            <motion.div
                className="slide-in"
                initial={{opacity: 0, visibility:"hidden", backdropFilter: "blur(0px) brightness(100%)"}}
                animate={{opacity: 0, visibility:"hidden", backdropFilter: "blur(16px) brightness(120%)"}}
                exit={{opacity: 1, visibility:"visible", backdropFilter: "blur(16px) brightness(120%)"}}
                transition={{ duration:.3, ease : [0, 0.5, 0, 1]}}
            />


            <motion.div
                className="slide-out"
                initial={{opacity: 1, visibility:"visible", backdropFilter: "blur(16px) brightness(120%)"}}
                animate={{opacity: 0, visibility:"hidden", backdropFilter: "blur(16px) brightness(120%)"}}
                exit={{opacity: 0, visibility:"hidden", backdropFilter: "blur(0px) brightness(100%)"}}
                transition={{ delay:.4, duration:.3, ease : [0, 0.5, 0, 1]}}
            />
        </>
    )
}

export default transition;