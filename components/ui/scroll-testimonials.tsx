import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export const ScrollTestimonials = () => {
    const ref = useRef(null)

    const { scrollYProgress }  = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    

    return <div>

    </div>
}